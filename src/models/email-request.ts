export type EmailRequest = {
  recipientEmail: string;
}

export type EmailResponse = {
  status: number;
  content: string;
  recipientEmail: string;
  subject: string;
}
