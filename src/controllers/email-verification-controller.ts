import { Body, Controller, Post, Get, Path, Query, Route, Tags, SuccessResponse } from "tsoa";
import type { EmailVerificationRequest, EmailVerificationResponse } from "../models/email-verification.js";

@Route("email-verification")
@Tags("email-verification-controller")
export class EmailVerificationController extends Controller {
  @Post()
  @SuccessResponse("200", "OK")
  public async sendEmailVerificationCode(@Body() requestBody: EmailVerificationRequest): Promise<EmailVerificationResponse> {
    return {} as EmailVerificationResponse;
  }
}
