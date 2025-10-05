import type { EmailRequest, EmailResponse } from "./email-request.js"

export type PasswordResetRequest = EmailRequest & {
  code: string;
  fullName: string;
  avatarUrl?: string;
}

export type PasswordResetResponse = EmailResponse & {
  code: string;
  fullName: string;
  avatarUrl?: string;
}
