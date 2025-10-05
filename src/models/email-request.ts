export type EmailRequest = {
  recipientEmail: string;
}

export type EmailResponse = {
  status: string;
  content: string;
  recipientEmail: string;
  subject: string;
}
