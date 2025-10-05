import { Body, Post, Route, Tags, SuccessResponse } from "tsoa";
import type { PasswordResetRequest, PasswordResetResponse } from "../models/password-reset";
import { fillTemplateVariables, getEmailTemplate } from "../utils/mail-helpers";
import { BaseController } from "./controller";

@Route("password-reset")
  @Tags("password-reset-controller")
export class PasswordResetController extends BaseController {
  @Post()
  @SuccessResponse("200", "OK")
  public async sendPasswordResetCode(@Body() body: PasswordResetRequest): Promise<PasswordResetResponse> {
    const vars = new Map([
      ['code', body.code],
      ['fullName', body.fullName],
    ]);
    if (body.avatarUrl) vars.set('avatarUrl', body.avatarUrl);
    const html = fillTemplateVariables(getEmailTemplate('password-reset'), vars);
    const subject = 'Password Reset Code';
    const { error } = await this.sendNoReplyEmail(body.recipientEmail, subject, html);
    if (error) throw new Error(`Resend Error: ${error.name} - ${error.message}`);

    return {
      content: html,
      status: 200,
      subject,
      ...body,
    };
  }
}
