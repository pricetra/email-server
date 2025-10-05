import fs from 'fs';
import path from 'path';
import sendgridMail from '@sendgrid/mail';

export function getEmailTemplate(templateName: string): string {
  const filePath = path.join(process.cwd(), 'resources', 'email-templates', `${templateName}.html`);
  return fs.readFileSync(filePath, 'utf8');
}

export function fillTemplateVariables(template: string, variableToValueMap: Map<string, string>) {
  let result = template;
  for (const [key, val] of variableToValueMap) {
    const keyProper = key.includes('{{', 0) ? key : `{{${key}}}`
    result = result.replace(keyProper, val);
  }
  return result;
}

export async function sendNoReplyEmail(recipientEmail: string, subject: string, html: string): Promise<[sendgridMail.ClientResponse, {}]> {
  return sendgridMail.send({
    from: {
      name: "Pricetra",
      email: 'no-reply@pricetra.com'
    },
    to: {
      email: recipientEmail,
    },
    subject,
    html,
  })
}
