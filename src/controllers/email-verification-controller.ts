import { Body, Post, Route, Tags, SuccessResponse } from "tsoa";
import type { EmailVerificationRequest, EmailVerificationResponse } from "../models/email-verification";
import { fillTemplateVariables, getEmailTemplate } from "../utils/mail-helpers";
import { BaseController } from "./controller";

@Route("email-verification")
@Tags("email-verification-controller")
export class EmailVerificationController extends BaseController {
  @Post()
  @SuccessResponse("200", "OK")
  public async sendEmailVerificationCode(@Body() requestBody: EmailVerificationRequest): Promise<EmailVerificationResponse> {
    const html = fillTemplateVariables(
      getEmailTemplate('email-verification'),
      new Map([
        ['code', requestBody.code],
        ['name', requestBody.name],
      ]),
    );
    const subject = 'Email Verification Code';
    const { data, error } = await this.sendNoReplyEmail(requestBody.recipientEmail, subject, html);
    if (error) throw new Error(`Resend Error: ${error.name} - ${error.message}`);

    return {
      content: html,
      status: 200,
      subject,
      ...requestBody,
    };
  }
}
