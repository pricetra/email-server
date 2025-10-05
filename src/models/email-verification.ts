import type { EmailRequest, EmailResponse } from "./email-request.js";

export type EmailVerificationRequest = EmailRequest & {
  code: string;
  name: string;
}

export type EmailVerificationResponse = EmailResponse & {
  code: string;
  name: string;
}
