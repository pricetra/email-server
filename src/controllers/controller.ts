import { CreateEmailResponse, Resend } from "resend";
import { Controller } from "tsoa";

export class BaseController extends Controller {
  public resendClient = new Resend();

  public BaseController() {
    this.resendClient = new Resend(process.env.RESEND_API_KEY!);
  }

  public async sendNoReplyEmail(recipientEmail: string, subject: string, html: string): Promise<CreateEmailResponse> {
    return this.resendClient.emails.send({
      from: `Pricetra <no-reply@pricetra.com>`,
      to: recipientEmail,
      subject,
      html,
    })
  }
}
