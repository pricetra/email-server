import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import { BaseController } from "./controller";
import { WelcomeRequest, WelcomeResponse } from "../models/welcome";
import { fillTemplateVariables, getEmailTemplate } from "../utils/mail-helpers";

@Route("welcome")
@Tags("welcome-controller")
export class WelcomeController extends BaseController {
  @Post()
  @SuccessResponse("200", "OK")
  public async sendWelcomeEmail(
    @Body() body: WelcomeRequest
  ): Promise<WelcomeResponse> {
    const vars = new Map([
      ["fullName", body.fullName],
    ]);
    const html = fillTemplateVariables(
      getEmailTemplate("welcome"),
      vars
    );
    const subject = "Welcome to Pricetra";
    const { error } = await this.sendNoReplyEmail(
      body.recipientEmail,
      subject,
      html
    );
    if (error)
      throw new Error(`Resend Error: ${error.name} - ${error.message}`);

    return {
      content: html,
      status: 200,
      subject,
      ...body,
    };
  }
}
