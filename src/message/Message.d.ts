import { APIUser } from "../User";
import { APIGuildMember } from "../guild/Member";
import { APIEmbed } from "./Embed";
import { APIReaction } from "./index";
import { ChannelType } from "../Channel";

export type APIMessageMention = APIUser & { member?: Omit<APIGuildMember, 'user'> };

export interface APIMessage {
  id: string;
  channel_id: string;
  guild_id?: string;
  author: APIUser;
  member?: APIGuildMember;
  content: string;
  timestamp: string;
  edited_timestamp: string | null;
  tts: boolean;
  mention_everyone: boolean;
  mentions: APIMessageMention[];
  mention_roles: string[];
  mention_channels: APIMessageMentionChannel[];
  attachments: APIMessageAttachmentData[];
  embeds: APIEmbed[];
  reactions?: APIReaction[];
  nonce?: string | null;
  pinned: boolean;
  webhook_id?: string;
  type: MessageType;
  activity?: APIMessageActivity;
  application?: APIMessageApplication;
  message_reference?: APIMessageReference;
  flags?: APIMessageFlags;
}

export interface APIMessageAttachmentData {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  height: number | null;
  width: number | null;
}

export interface APIMessageActivity {
  type: MessageActivityType;
  party_id?: string;
}

export interface APIMessageApplication {
  id: string;
  cover_image?: string;
  description: string;
  icon: string | null;
  name: string;
}

export interface APIMessageReference {
  message_id?: string;
  channel_id: string;
  guild_id?: string;
}

export interface APIMessageMentionChannel {
  id: string;
  guild_id: string;
  type: ChannelType;
  name: string;
}

export const enum APIMessageFlags {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOST = 1 << 1,
  SUPPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT = 1 << 4
}

export const enum MessageActivityType {
  JOIN = 1,
  SPECTATE,
  LISTEN,
  JOIN_REQUEST
}

export const enum MessageType {
  DEFAULT,
  RECIPIENT_ADD,
  RECIPIENT_REMOVE,
  CALL,
  CHANNEL_NAME_CHANGE,
  CHANNEL_ICON_CHANGE,
  CHANNEL_PINNED_MESSAGE,
  GUILD_MEMBER_JOIN,
  USER_PREMIUM_GUILD_SUBSCRIPTION,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3,
  CHANNEL_FOLLOW_ADD,
  GUILD_DISCOVERY_DISQUALIFIED = 14,
  GUILD_DISCOVERY_REQUALIFIED
}
