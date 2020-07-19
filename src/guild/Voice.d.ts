import { APIGuildMember } from ".";

export interface APIVoiceStatePartial {
  channel_id: string | null;
  user_id: string;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  suppress: boolean;
}

export interface APIVoiceState extends APIVoiceStatePartial {
  guild_id?: string;
  member?: APIGuildMember;
}

export interface APIVoiceRegion {
  id: string;
  name: string;
  vip: boolean;
  optional: boolean;
  deprecated: boolean;
  custom: boolean;
}