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
export interface APIEmojiPartial {
    id: string | null;
    name: string | null;
    animated?: boolean;
}
export interface APIEmoji extends APIEmojiPartial {
    roles?: string[];
    user?: APIUser;
    require_colons?: boolean;
    managed?: boolean;
    available?: boolean;
}
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
    default_message_notifications: GuildMessageNotificationType;
    explicit_content_filter: GuildContentFilter;
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
export interface APIGuildPreview extends Omit<APIGuildUnavailable, "unavailable"> {
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
export interface APIBanData {
    reason: string | null;
    user: APIUser;
}
export interface APIGuildMember {
    user?: APIUser;
    nick: string | null;
    roles: string[];
    joined_at: number;
    premium_sense?: number | null;
    deaf: boolean;
    mute: boolean;
}
export interface APIOverwrite {
    id: string;
    type: 'role' | 'member';
    allow: number;
    deny: number;
}
export interface APIIntegration {
    id: string;
    name: string;
    type: string;
    enabled: boolean;
    syncing: boolean;
    role_id: string;
    enable_emoticons?: boolean;
    expire_behavior: IntegrationExpireBehavior;
    expire_grace_period: number;
    user: APIUser;
    account: APIIntegrationAccountData;
    synced_at: string;
}
export interface APIIntegrationAccountData {
    id: string;
    name: string;
}
export interface APIInvite {
    code: string;
    guild?: APIGuildPartial;
    channel: APIChannelPartial;
    inviter?: APIUser;
    target_user?: APIUser;
    target_user_type?: InviteTargetUserType;
    approximate_presence_count?: number;
    approximate_member_count?: number;
}
export interface APIInviteMetadata {
    uses: number;
    max_uses: number;
    max_age: number;
    temporary: boolean;
    created_at: string;
}
export interface APIRole {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: number;
    managed: boolean;
    mentionable: boolean;
    tags?: APIRoleTags;
}
export interface APIRoleTags {
    bot_id?: string;
    premium_subscriber?: null;
    integration?: string;
}
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
export interface APIActivity {
    name: string;
    type: ActivityType;
    url?: string | null;
    created_at: number;
    timestamps?: {
        start?: number;
        end?: number;
    };
    application_id?: string;
    details?: string | null;
    state?: string | null;
    emoji?: APIEmoji | null;
    party?: APIActivityParty;
    assets?: APIActivityAssets;
    secrets?: APIActivitySecrets;
    instance?: boolean;
    flags?: number;
}
export interface APIActivityParty {
    id: string;
    size?: [number, number];
}
export interface APIActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
}
export interface APIActivitySecrets {
    join?: string;
    spectate?: string;
    match?: string;
}
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
export interface APIPresenceUpdate {
    user: {
        id: string;
    } & Partial<APIUser>;
    roles: string[];
    game?: APIActivity;
    guild_id: string;
    status: PresenceStatus;
    activities: APIActivity[];
    client_status: APIClientStatus;
    premium_since?: number | null;
    nick?: string | null;
}
export interface APIClientStatus {
    desktop?: string;
    mobile?: string;
    web?: string;
}
export interface APIUser {
    id: string;
    username: string;
    discriminator: string;
    avatar?: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number;
    premium_type?: PremiumType;
    public_flags?: number;
}
export declare const enum InviteTargetUserType {
    STREAM = 1
}
export declare const enum IntegrationExpireBehavior {
    REMOVE_ROLE = 0,
    KICK = 1
}
export declare const enum GuildMessageNotificationType {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1
}
export declare const enum GuildContentFilter {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLE = 1,
    ALL_MEMBERS = 2
}
export declare const enum GuildFeatures {
    INVITE_SPLASH = "INVITE_SPLASH",
    VIP_REGION = "VIP_REGIONS",
    VANITY_URL = "VANITY_URL",
    VERIFIED = "VERIFIED",
    PARTNERED = "PARTNERED",
    PUBLIC = "PUBLIC",
    COMMERCE = "COMMERCE",
    NEWS = "NEWS",
    DISCOVERABLE = "DISCOVERABLE",
    FEATURABLE = "FEATURABLE",
    ANIMATED_ICON = "ANIMATED_ICON",
    BANNER = "BANNER",
    PUBLIC_DISABLED = "PUBLIC_DISABLED",
    WELCOME_SCREEN_ENABLED = "WELCOME_SCREEN_ENABLED"
}
export declare const enum GuildMFALevel {
    NONE = 0,
    ELEVATED = 1
}
export declare const enum GuildVerificationLevel {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4
}
export declare const enum GuildSystemChannelFlags {
    SUPPRESS_JOIN_NOTIFICATIONS = 1,
    SUPPRESS_PREMIUM_SUBSCRIPTIONS = 2
}
export declare const enum GuildPremiumTier {
    NONE = 0,
    TIER_1 = 1,
    TIER_2 = 2,
    TIER_3 = 3
}
export declare const enum APIMessageFlags {
    CROSSPOSTED = 1,
    IS_CROSSPOST = 2,
    SUPPRESS_EMBEDS = 4,
    SOURCE_MESSAGE_DELETED = 8,
    URGENT = 16
}
export declare const enum MessageActivityType {
    JOIN = 1,
    SPECTATE = 2,
    LISTEN = 3,
    JOIN_REQUEST = 4
}
export declare const enum MessageType {
    DEFAULT = 0,
    RECIPIENT_ADD = 1,
    RECIPIENT_REMOVE = 2,
    CALL = 3,
    CHANNEL_NAME_CHANGE = 4,
    CHANNEL_ICON_CHANGE = 5,
    CHANNEL_PINNED_MESSAGE = 6,
    GUILD_MEMBER_JOIN = 7,
    USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
    CHANNEL_FOLLOW_ADD = 12,
    GUILD_DISCOVERY_DISQUALIFIED = 14,
    GUILD_DISCOVERY_REQUALIFIED = 15
}
export declare enum ActivityType {
    GAME = 0,
    STREAMING = 1,
    LISTENING = 2,
    CUSTOM = 4
}
export declare enum PresenceStatus {
    IDLE = "idle",
    DND = "dnd",
    ONLINE = "online",
    OFFLINE = "offline"
}
export declare const enum ChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_NEWS = 5,
    GUILD_STORE = 6
}
export declare const enum WebhookType {
    INCOMING = 1,
    CHANNEL_FOLLOWER = 2
}
export declare const enum ConnectionVisibility {
    NONE = 0,
    EVERYONE = 1
}
export declare enum PremiumType {
    NONE = 0,
    NITRO_CLASSIC = 1,
    NITRO = 2
}