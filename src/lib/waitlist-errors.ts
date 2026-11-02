/**
 * The action's email validation returns these codes instead of sentences, so the form (client or
 * the no-JS page) can show them in the page's language. Safe to import in the browser.
 */
export const EMAIL_ERRORS = { tooLong: 'email_too_long', invalid: 'email_invalid' } as const;

export function emailErrorMessage(code: string | undefined, errors: { invalid: string; tooLong: string }): string {
  return code === EMAIL_ERRORS.tooLong ? errors.tooLong : errors.invalid;
}
