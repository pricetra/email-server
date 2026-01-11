import type { EmailRequest, EmailResponse } from "./email-request.js"

export type JoinStoreInviteRequest = EmailRequest & {
  store: string;
  storeSlug: string;
  storeLogo: string;
  role: string;
  invitee: string;
  inviter: string;
  accept: string;
  decline: string;
}

export type JoinStoreInviteResponse = EmailResponse & {
  store: string;
  storeSlug: string;
  storeLogo: string;
  role: string;
  invitee: string;
  inviter: string;
  accept: string;
  decline: string;
}

export type InviteAcceptedRequest = EmailRequest & {
  store: string;
  storeSlug: string;
  storeLogo: string;
  role: string;
  invitee: string;
  inviter: string;
}

export type InviteAcceptedResponse = EmailResponse & {
  store: string;
  storeSlug: string;
  storeLogo: string;
  role: string;
  invitee: string;
  inviter: string;
}
