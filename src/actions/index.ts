import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { LOCALES } from '../i18n/config';
import { ui } from '../i18n';
import { WAITLIST_SOURCES, WaitlistUnavailableError, addToWaitlist, sendConfirmation } from '../lib/waitlist';
import { EMAIL_ERRORS } from '../lib/waitlist-errors';

export const server = {
  waitlist: {
    join: defineAction({
      accept: 'form',
      input: z.object({
        email: z
          .string()
          .trim()
          .toLowerCase()
          .max(254, { error: EMAIL_ERRORS.tooLong })
          .pipe(z.email({ error: EMAIL_ERRORS.invalid })),
        source: z.enum(WAITLIST_SOURCES).catch('hero'),
        /** The page's language, for the error message and the confirmation email. */
        locale: z.enum(LOCALES).catch('en'),
        referrer: z.string().max(500).optional(),
        // Honeypot: hidden from people, filled in by naive bots.
        company: z.string().optional(),
      }),
      handler: async ({ email, source, locale, referrer, company }) => {
        // Bots get the same success as everyone else, so there's nothing to probe.
        if (company) return { ok: true };
        try {
          const added = await addToWaitlist({ email, source, referrer });
          if (added) await sendConfirmation(email, locale);
        } catch (error) {
          console.error('waitlist join failed', error);
          throw new ActionError({
            code: error instanceof WaitlistUnavailableError ? 'SERVICE_UNAVAILABLE' : 'INTERNAL_SERVER_ERROR',
            message: ui[locale].waitlist.errors.unavailable,
          });
        }
        return { ok: true };
      },
    }),
  },
};
