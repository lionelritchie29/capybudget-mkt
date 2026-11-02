import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { RESEND_API_KEY, SUPABASE_SECRET_KEY, SUPABASE_URL, WAITLIST_FROM_EMAIL } from 'astro:env/server';
import { confirmationEmail } from './waitlist-email';
import type { Locale } from '../i18n/config';

export const WAITLIST_SOURCES = ['hero', 'final-cta', 'features'] as const;
export type WaitlistSource = (typeof WAITLIST_SOURCES)[number];

export class WaitlistUnavailableError extends Error {}

/**
 * Adds the email to `waitlist_signups` (see db/waitlist_signups.sql). Returns false when it was
 * already there, so callers can skip the confirmation email; both cases look the same to the visitor.
 */
export async function addToWaitlist(row: {
  email: string;
  source: WaitlistSource;
  referrer?: string;
}): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_SECRET_KEY) {
    throw new WaitlistUnavailableError('SUPABASE_URL and SUPABASE_SECRET_KEY are not set');
  }
  const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  // ignoreDuplicates turns a repeat into a no-op, and only rows actually inserted come back.
  const { data, error } = await supabase
    .from('waitlist_signups')
    .upsert(
      { email: row.email, source: row.source, referrer: row.referrer || null },
      { onConflict: 'email', ignoreDuplicates: true }
    )
    .select('id');
  if (error) throw new Error(`waitlist insert failed: ${error.message}`);
  return data.length > 0;
}

/** Best effort: a failed send is logged and never fails the sign-up. */
export async function sendConfirmation(email: string, locale: Locale): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set; skipping the waitlist confirmation email');
    return;
  }
  try {
    const { subject, html, text } = confirmationEmail(locale);
    const { error } = await new Resend(RESEND_API_KEY).emails.send({
      from: WAITLIST_FROM_EMAIL,
      to: email,
      subject,
      html,
      text,
    });
    if (error) console.error('waitlist confirmation email failed', error);
  } catch (error) {
    console.error('waitlist confirmation email failed', error);
  }
}
