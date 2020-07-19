import { APIIntegration } from "./guild";
import { APIUser } from "./User";

export * from "./guild";
export * from "./message";

export * from "./User";
export * from "./Activity";
export * from "./Channel";
export * from "./Presence";

export interface APIConnection {
  id: string;
  name: string;
  type: string;
  revoked?: boolean;
  integrations?: APIIntegration[];
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  visibility: ConnectionVisibility;
}

export interface APIWebhookData {
  id: string;
  type: WebhookType;
  guild_id?: string;
  channel_id: string;
  user?: APIUser;
  name: string | null;
  avatar: string | null;
  token?: string;
}

export const enum WebhookType {
  INCOMING = 1,
  CHANNEL_FOLLOWER
}

export const enum ConnectionVisibility {
  None,
  Everyone
}
