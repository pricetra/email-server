
import { Body, Post, Route, Tags, SuccessResponse } from "tsoa";
import { fillTemplateVariables, getEmailTemplate } from "../utils/mail-helpers";
import { BaseController } from "./controller";
import { InviteAcceptedRequest, InviteAcceptedResponse, JoinStoreInviteRequest, JoinStoreInviteResponse } from "../models/store-user";

@Route("store-user")
@Tags("store-user-controller")
export class StoreUserController extends BaseController {
  @Post("send-join-store-request-email")
  @SuccessResponse("200", "OK")
  public async sendJoinStoreRequestEmail(@Body() body: JoinStoreInviteRequest): Promise<JoinStoreInviteResponse> {
    const vars = new Map([
      ['accept', body.accept],
      ['decline', body.decline],
      ['invitee', body.invitee],
      ['inviter', body.inviter],
      ['recipientEmail', body.recipientEmail],
      ['role', body.role],
      ['store', body.store],
      ['storeLogo', body.storeLogo],
      ['storeSlug', body.storeSlug],
    ]);
    const html = fillTemplateVariables(getEmailTemplate('store-user-invite'), vars);
    const subject = `Invitation to join ${body.store} as ${body.role} by ${body.inviter}`;
    const { error } = await this.sendNoReplyEmail(body.recipientEmail, subject, html);
    if (error) throw new Error(`Resend Error: ${error.name} - ${error.message}`);

    return {
      content: html,
      status: 200,
      subject,
      ...body,
    };
  }

  @Post("invite-accepted-email")
  @SuccessResponse("200", "OK")
  public async inviteAcceptedEmail(@Body() body: InviteAcceptedRequest): Promise<InviteAcceptedResponse> {
    const vars = new Map([
      ['invitee', body.invitee],
      ['inviter', body.inviter],
      ['recipientEmail', body.recipientEmail],
      ['role', body.role],
      ['store', body.store],
      ['storeLogo', body.storeLogo],
      ['storeSlug', body.storeSlug],
    ]);
    const html = fillTemplateVariables(getEmailTemplate('store-invite-accepted'), vars);
    const subject = `${body.invitee} Has Joined ${body.store} as ${body.role}`;
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