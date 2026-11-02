import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { WAITLIST_SOURCES, WaitlistUnavailableError, addToWaitlist, sendConfirmation } from '../lib/waitlist';

export const server = {
  waitlist: {
    join: defineAction({
      accept: 'form',
      input: z.object({
        email: z
          .string()
          .trim()
          .toLowerCase()
          .max(254, { error: 'That email address is too long.' })
          .pipe(z.email({ error: 'Enter a valid email address.' })),
        source: z.enum(WAITLIST_SOURCES).catch('hero'),
        referrer: z.string().max(500).optional(),
        // Honeypot: hidden from people, filled in by naive bots.
        company: z.string().optional(),
      }),
      handler: async ({ email, source, referrer, company }) => {
        // Bots get the same success as everyone else, so there's nothing to probe.
        if (company) return { ok: true };
        try {
          const added = await addToWaitlist({ email, source, referrer });
          if (added) await sendConfirmation(email);
        } catch (error) {
          console.error('waitlist join failed', error);
          throw new ActionError({
            code: error instanceof WaitlistUnavailableError ? 'SERVICE_UNAVAILABLE' : 'INTERNAL_SERVER_ERROR',
            message: "We couldn't add you just now. Please try again in a minute.",
          });
        }
        return { ok: true };
      },
    }),
  },
};
