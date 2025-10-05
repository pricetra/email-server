import { Body, Post, Route, Tags, SuccessResponse, Controller } from "tsoa";
import type { EmailVerificationRequest, EmailVerificationResponse } from "../models/email-verification";
import { fillTemplateVariables, getEmailTemplate, sendNoReplyEmail } from "../utils/mail-helpers";

@Route("email-verification")
@Tags("email-verification-controller")
export class EmailVerificationController extends Controller {
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
    const emailResponse = await sendNoReplyEmail(requestBody.recipientEmail, subject, html);
    return {
      content: html,
      status: String(emailResponse[0].statusCode),
      subject,
      ...requestBody,
    };
  }
}
