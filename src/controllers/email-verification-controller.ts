import { Body, Post, Route, Tags, SuccessResponse, Controller } from "tsoa";
import type { EmailVerificationRequest, EmailVerificationResponse } from "../models/email-verification";

@Route("email-verification")
@Tags("email-verification-controller")
export class EmailVerificationController extends Controller {
  @Post()
  @SuccessResponse("200", "OK")
  public async sendEmailVerificationCode(@Body() requestBody: EmailVerificationRequest): Promise<EmailVerificationResponse> {
    return {} as EmailVerificationResponse;
  }
}
