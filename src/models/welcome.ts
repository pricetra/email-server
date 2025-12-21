import { EmailRequest, EmailResponse } from "./email-request";

export type WelcomeRequest = EmailRequest & {
  fullName: string;
};

export type WelcomeResponse = EmailResponse & {
  fullName: string;
};
