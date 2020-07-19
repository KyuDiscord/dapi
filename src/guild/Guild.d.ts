import { APIRole } from "./Role";
import { APIEmoji } from "./Emoji";
import { APIGuildMember } from "./index";
import { APIChannel } from "../Channel";
import { APIPresenceUpdate } from "../Presence";
import { APIVoiceStatePartial } from "./Voice";

export interface APIGuildPartial {
  id: string;
  name: string;
  icon: string | null;
  splash: string | null;
  unavailable?: boolean;
}

export interface APIGuild {
  id: string;
  name: string;
  icon?: string | null;
  splash?: string | null;
  discovery_splash?: string | null;
  owner_id?: string;
  permissions?: number;
  region: string;
  afk_channel_id?: string;
  afk_timeout: number;
  embed_enabled?: boolean;
  embed_channel_id?: string | null;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: APIRole[];
  emojis: APIEmoji[];
  features: string[];
  mfa_level: number;
  application_id: string | null;
  widget_enabled?: boolean;
  widget_channel_id?: string | null;
  system_channel_id: string | null;
  rules_channel_id: string | null;
  joined_at?: number;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: APIVoiceStatePartial[];
  members?: APIGuildMember[];
  channels?: APIChannel;
  presences?: APIPresenceUpdate[];
  max_presences?: number | null;
  max_members?: number;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: string | null;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
}