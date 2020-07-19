import { APIEmoji } from "./Emoji";
import { APIVoiceStatePartial } from "./Voice";
import { APIGuildMember, APIRole } from "./index";
import { APIChannel } from "../Channel";
import { APIPresenceUpdate } from "../Presence";

export interface APIGuildUnavailable {
  id: string;
  unavailable: boolean;
}

export interface APIGuildPartial {
  id: string;
  name: string;
  icon: string | null;
  splash: string | null;
  unavailable?: boolean;
}

export interface APIGuild extends APIGuildPartial {
  discovery_splash: string | null;
  owner?: boolean;
  owner_id: string;
  permissions?: number;
  region: string;
  afk_channel_id: string | null;
  afk_timeout: number;
  embed_enabled?: boolean;
  embed_channel_id?: string;
  verification_level: GuildVerificationLevel;
  default_message_notifications: GuildDefaultMessageNotifications;
  explicit_content_filter: GuildExplicitContentFilterLevel;
  roles: APIRole[];
  emojis: APIEmoji[];
  features: GuildFeatures[];
  mfa_level: GuildMFALevel;
  application_id: string | null;
  widget_enabled?: boolean;
  widget_channel_id?: string;
  system_channel_id: string | null;
  system_channel_flags: GuildSystemChannelFlags;
  rules_channel_id: string | null;
  joined_at?: string;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: APIVoiceStatePartial[];
  members?: APIGuildMember[];
  channels?: APIChannel[];
  presences?: APIPresenceUpdate[];
  max_presences?: number | null;
  max_members?: number;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: GuildPremiumTier;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: string | null;
  approximate_member_count?: number;
  approximate_presence_status?: number;
  max_video_channel_users?: number;
}

export interface APIGuildWidget {
  enabled: boolean;
  channel_id: string | null;
}

export interface APIGuildPreview extends Omit<APIGuildUnavailable, 'unavailable'> {
  discovery_splash: string | null;
  emojis: APIEmoji[];
  features: GuildFeatures[];
  approximate_member_count: number;
  approximate_presence_count: number;
  description: string | null;
}

export interface APIGuildVanity {
  code: string;
  uses: number;
}

export const enum GuildDefaultMessageNotifications {
  AllMessages,
  OnlyMentions
}

export const enum GuildExplicitContentFilterLevel {
  Disabled,
  MembersWithoutRoles,
  AllMembers
}

export const enum GuildFeatures {
  InviteSplash = 'INVITE_SPLASH',
  VipRegion = 'VIP_REGIONS',
  VanityUrl = 'VANITY_URL',
  Verified = 'VERIFIED',
  Partnered = 'PARTNERED',
  Public = 'PUBLIC',
  Commerce = 'COMMERCE',
  News = 'NEWS',
  Discoverable = 'DISCOVERABLE',
  Featurable = 'FEATURABLE',
  AnimatedIcon = 'ANIMATED_ICON',
  Banner = 'BANNER',
  PublicDisabled = 'PUBLIC_DISABLED',
  WelcomeScreenEnabled = 'WELCOME_SCREEN_ENABLED'
}

export const enum GuildMFALevel {
  None,
  Elevated
}

export const enum GuildVerificationLevel {
  None,
  Low,
  Medium,
  High,
  VeryHigh
}

export const enum GuildSystemChannelFlags {
  SuppressJoinNotifications = 1 << 0,
  SuppressPremiumSubscriptions = 1 << 1
}

export const enum GuildPremiumTier {
  None,
  Tier1,
  Tier2,
  Tier3
}
