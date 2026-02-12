import type { EmailRequest, EmailResponse } from "./email-request.js";

export type SimpleEmailRequest = EmailRequest & {
  subject: string;
  message: string;
}

export type SimpleEmailResponse = EmailResponse & {
  subject: string;
  message: string;
}
