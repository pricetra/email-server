import { Body, Post, Route, Tags, SuccessResponse } from "tsoa";
import { BaseController } from "./controller";
import { SimpleEmailRequest, SimpleEmailResponse } from "../models/simple-email";

@Route("simple-email")
@Tags("simple-email-controller")
export class SimpleEmailController extends BaseController {
  @Post()
  @SuccessResponse("200", "OK")
  public async sendSimpleEmail(@Body() requestBody: SimpleEmailRequest): Promise<SimpleEmailResponse> {
    const { error } = await this.sendNoReplyTextEmail(
      requestBody.recipientEmail,
      requestBody.subject,
      requestBody.message,
    );
    if (error) throw new Error(`Resend Error: ${error.name} - ${error.message}`);

    return {
      content: requestBody.message,
      status: 200,
      ...requestBody,
    };
  }
}
