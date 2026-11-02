import type { AstroGlobal } from 'astro';
import { actions, isInputError } from 'astro:actions';
import { ui, useI18n } from '../i18n';
import { emailErrorMessage } from './waitlist-errors';

/**
 * The no-JS form's result for /waitlist and /id/waitlist, or null when the page was opened
 * directly (the caller sends those back to the form on the home page).
 */
export function waitlistStatus(astro: AstroGlobal) {
  const { locale } = useI18n(astro);
  const result = astro.getActionResult(actions.waitlist.join);
  if (!result) return null;
  if (!result.error) return { kind: 'success' } as const;
  const message = isInputError(result.error)
    ? emailErrorMessage(result.error.fields.email?.[0], ui[locale].waitlist.errors)
    : result.error.message;
  return { kind: 'error', message } as const;
}
