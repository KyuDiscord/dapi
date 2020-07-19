import { APIUser } from "./User";
import { APIOverwrite } from "./guild/Overwrite";

export interface APIChannelPartial {
  id: string;
  type: ChannelType;
  name?: string;
}

export interface APIChannel extends APIChannelPartial {
  guild_id?: string;
  position?: number;
  permission_overwrites?: APIOverwrite[];
  topic?: string | null;
  nsfw?: boolean;
  last_message_id?: string | null;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: APIUser[];
  icon?: string | null;
  owner_id?: string;
  application_id?: string;
  parent_id?: string | null;
  last_pin_timestamp?: string;
}

export const enum ChannelType {
  GUILD_TEXT,
  DM,
  GUILD_VOICE,
  GROUP_DM,
  GUILD_CATEGORY,
  GUILD_NEWS,
  GUILD_STORE,
}