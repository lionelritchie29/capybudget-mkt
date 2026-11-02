const SITE = 'https://capybudget.site';

/**
 * Plain table layout with inline styles, so it holds up in Gmail, Outlook and Apple Mail.
 * Colours are the light theme's (email clients mostly ignore dark-mode CSS); caramel is the only accent.
 */
export function confirmationEmail(): { subject: string; html: string; text: string } {
  const subject = "You're on the Capybudget waitlist";

  const text = [
    "You're on the list.",
    '',
    "Thanks for joining the Capybudget waitlist. We're letting people in a few at a time, and we'll email you when your budget is ready.",
    '',
    'Until then: give every dollar a job, and take a long soak.',
    '',
    `Capybudget · ${SITE}`,
    '',
    "You're getting this because this address was entered on capybudget.site. If that wasn't you, ignore this email and you won't hear from us again.",
  ].join('\n');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#09090b;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border:1px solid #e4e4e7;border-radius:10px;">
            <tr>
              <td style="padding:32px 32px 8px;">
                <img src="${SITE}/icons/icon-192.png" width="56" height="56" alt="Capybudget" style="display:block;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 0;">
                <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:600;letter-spacing:-0.01em;">You're on the list.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 0;font-size:15px;line-height:1.6;color:#3f3f46;">
                Thanks for joining the Capybudget waitlist. We're letting people in a few at a time, and we'll email you when your budget is ready.
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-radius:8px;background:#d1fae5;border:1px solid rgba(6,95,70,0.2);">
                  <tr>
                    <td style="padding:12px 16px;">
                      <div style="font-size:18px;font-weight:500;color:#065f46;font-variant-numeric:tabular-nums;">$0.00</div>
                      <div style="font-size:12px;font-weight:500;color:#71717a;">Ready to Assign · every dollar has a job</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;font-size:15px;line-height:1.6;color:#3f3f46;">
                Until then: take a long soak.<br />
                <span style="color:#d4895a;font-weight:600;">The Capybudget capybara</span>
              </td>
            </tr>
          </table>
          <p style="max-width:480px;margin:16px auto 0;font-size:12px;line-height:1.5;color:#71717a;">
            You're getting this because this address was entered on <a href="${SITE}" style="color:#71717a;">capybudget.site</a>. If that wasn't you, ignore this email and you won't hear from us again.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
