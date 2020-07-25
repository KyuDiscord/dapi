"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InviteTargetUserType;
(function (InviteTargetUserType) {
    InviteTargetUserType[InviteTargetUserType["STREAM"] = 1] = "STREAM";
})(InviteTargetUserType = exports.InviteTargetUserType || (exports.InviteTargetUserType = {}));
var IntegrationExpireBehavior;
(function (IntegrationExpireBehavior) {
    IntegrationExpireBehavior[IntegrationExpireBehavior["REMOVE_ROLE"] = 0] = "REMOVE_ROLE";
    IntegrationExpireBehavior[IntegrationExpireBehavior["KICK"] = 1] = "KICK";
})(IntegrationExpireBehavior = exports.IntegrationExpireBehavior || (exports.IntegrationExpireBehavior = {}));
var GuildMessageNotificationType;
(function (GuildMessageNotificationType) {
    GuildMessageNotificationType[GuildMessageNotificationType["ALL_MESSAGES"] = 0] = "ALL_MESSAGES";
    GuildMessageNotificationType[GuildMessageNotificationType["ONLY_MENTIONS"] = 1] = "ONLY_MENTIONS";
})(GuildMessageNotificationType = exports.GuildMessageNotificationType || (exports.GuildMessageNotificationType = {}));
var GuildContentFilter;
(function (GuildContentFilter) {
    GuildContentFilter[GuildContentFilter["DISABLED"] = 0] = "DISABLED";
    GuildContentFilter[GuildContentFilter["MEMBERS_WITHOUT_ROLE"] = 1] = "MEMBERS_WITHOUT_ROLE";
    GuildContentFilter[GuildContentFilter["ALL_MEMBERS"] = 2] = "ALL_MEMBERS";
})(GuildContentFilter = exports.GuildContentFilter || (exports.GuildContentFilter = {}));
var GuildFeatures;
(function (GuildFeatures) {
    GuildFeatures["INVITE_SPLASH"] = "INVITE_SPLASH";
    GuildFeatures["VIP_REGION"] = "VIP_REGIONS";
    GuildFeatures["VANITY_URL"] = "VANITY_URL";
    GuildFeatures["VERIFIED"] = "VERIFIED";
    GuildFeatures["PARTNERED"] = "PARTNERED";
    GuildFeatures["PUBLIC"] = "PUBLIC";
    GuildFeatures["COMMERCE"] = "COMMERCE";
    GuildFeatures["NEWS"] = "NEWS";
    GuildFeatures["DISCOVERABLE"] = "DISCOVERABLE";
    GuildFeatures["FEATURABLE"] = "FEATURABLE";
    GuildFeatures["ANIMATED_ICON"] = "ANIMATED_ICON";
    GuildFeatures["BANNER"] = "BANNER";
    GuildFeatures["PUBLIC_DISABLED"] = "PUBLIC_DISABLED";
    GuildFeatures["WELCOME_SCREEN_ENABLED"] = "WELCOME_SCREEN_ENABLED";
})(GuildFeatures = exports.GuildFeatures || (exports.GuildFeatures = {}));
var GuildMFALevel;
(function (GuildMFALevel) {
    GuildMFALevel[GuildMFALevel["NONE"] = 0] = "NONE";
    GuildMFALevel[GuildMFALevel["ELEVATED"] = 1] = "ELEVATED";
})(GuildMFALevel = exports.GuildMFALevel || (exports.GuildMFALevel = {}));
var GuildVerificationLevel;
(function (GuildVerificationLevel) {
    GuildVerificationLevel[GuildVerificationLevel["NONE"] = 0] = "NONE";
    GuildVerificationLevel[GuildVerificationLevel["LOW"] = 1] = "LOW";
    GuildVerificationLevel[GuildVerificationLevel["MEDIUM"] = 2] = "MEDIUM";
    GuildVerificationLevel[GuildVerificationLevel["HIGH"] = 3] = "HIGH";
    GuildVerificationLevel[GuildVerificationLevel["VERY_HIGH"] = 4] = "VERY_HIGH";
})(GuildVerificationLevel = exports.GuildVerificationLevel || (exports.GuildVerificationLevel = {}));
var GuildSystemChannelFlags;
(function (GuildSystemChannelFlags) {
    GuildSystemChannelFlags[GuildSystemChannelFlags["SUPPRESS_JOIN_NOTIFICATIONS"] = 1] = "SUPPRESS_JOIN_NOTIFICATIONS";
    GuildSystemChannelFlags[GuildSystemChannelFlags["SUPPRESS_PREMIUM_SUBSCRIPTIONS"] = 2] = "SUPPRESS_PREMIUM_SUBSCRIPTIONS";
})(GuildSystemChannelFlags = exports.GuildSystemChannelFlags || (exports.GuildSystemChannelFlags = {}));
var GuildPremiumTier;
(function (GuildPremiumTier) {
    GuildPremiumTier[GuildPremiumTier["NONE"] = 0] = "NONE";
    GuildPremiumTier[GuildPremiumTier["TIER_1"] = 1] = "TIER_1";
    GuildPremiumTier[GuildPremiumTier["TIER_2"] = 2] = "TIER_2";
    GuildPremiumTier[GuildPremiumTier["TIER_3"] = 3] = "TIER_3";
})(GuildPremiumTier = exports.GuildPremiumTier || (exports.GuildPremiumTier = {}));
var APIMessageFlags;
(function (APIMessageFlags) {
    APIMessageFlags[APIMessageFlags["CROSSPOSTED"] = 1] = "CROSSPOSTED";
    APIMessageFlags[APIMessageFlags["IS_CROSSPOST"] = 2] = "IS_CROSSPOST";
    APIMessageFlags[APIMessageFlags["SUPPRESS_EMBEDS"] = 4] = "SUPPRESS_EMBEDS";
    APIMessageFlags[APIMessageFlags["SOURCE_MESSAGE_DELETED"] = 8] = "SOURCE_MESSAGE_DELETED";
    APIMessageFlags[APIMessageFlags["URGENT"] = 16] = "URGENT";
})(APIMessageFlags = exports.APIMessageFlags || (exports.APIMessageFlags = {}));
var MessageActivityType;
(function (MessageActivityType) {
    MessageActivityType[MessageActivityType["JOIN"] = 1] = "JOIN";
    MessageActivityType[MessageActivityType["SPECTATE"] = 2] = "SPECTATE";
    MessageActivityType[MessageActivityType["LISTEN"] = 3] = "LISTEN";
    MessageActivityType[MessageActivityType["JOIN_REQUEST"] = 4] = "JOIN_REQUEST";
})(MessageActivityType = exports.MessageActivityType || (exports.MessageActivityType = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["DEFAULT"] = 0] = "DEFAULT";
    MessageType[MessageType["RECIPIENT_ADD"] = 1] = "RECIPIENT_ADD";
    MessageType[MessageType["RECIPIENT_REMOVE"] = 2] = "RECIPIENT_REMOVE";
    MessageType[MessageType["CALL"] = 3] = "CALL";
    MessageType[MessageType["CHANNEL_NAME_CHANGE"] = 4] = "CHANNEL_NAME_CHANGE";
    MessageType[MessageType["CHANNEL_ICON_CHANGE"] = 5] = "CHANNEL_ICON_CHANGE";
    MessageType[MessageType["CHANNEL_PINNED_MESSAGE"] = 6] = "CHANNEL_PINNED_MESSAGE";
    MessageType[MessageType["GUILD_MEMBER_JOIN"] = 7] = "GUILD_MEMBER_JOIN";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION"] = 8] = "USER_PREMIUM_GUILD_SUBSCRIPTION";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1"] = 9] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2"] = 10] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3"] = 11] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3";
    MessageType[MessageType["CHANNEL_FOLLOW_ADD"] = 12] = "CHANNEL_FOLLOW_ADD";
    MessageType[MessageType["GUILD_DISCOVERY_DISQUALIFIED"] = 14] = "GUILD_DISCOVERY_DISQUALIFIED";
    MessageType[MessageType["GUILD_DISCOVERY_REQUALIFIED"] = 15] = "GUILD_DISCOVERY_REQUALIFIED";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["GAME"] = 0] = "GAME";
    ActivityType[ActivityType["STREAMING"] = 1] = "STREAMING";
    ActivityType[ActivityType["LISTENING"] = 2] = "LISTENING";
    ActivityType[ActivityType["CUSTOM"] = 4] = "CUSTOM";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var PresenceStatus;
(function (PresenceStatus) {
    PresenceStatus["IDLE"] = "idle";
    PresenceStatus["DND"] = "dnd";
    PresenceStatus["ONLINE"] = "online";
    PresenceStatus["OFFLINE"] = "offline";
})(PresenceStatus = exports.PresenceStatus || (exports.PresenceStatus = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["GUILD_TEXT"] = 0] = "GUILD_TEXT";
    ChannelType[ChannelType["DM"] = 1] = "DM";
    ChannelType[ChannelType["GUILD_VOICE"] = 2] = "GUILD_VOICE";
    ChannelType[ChannelType["GROUP_DM"] = 3] = "GROUP_DM";
    ChannelType[ChannelType["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
    ChannelType[ChannelType["GUILD_NEWS"] = 5] = "GUILD_NEWS";
    ChannelType[ChannelType["GUILD_STORE"] = 6] = "GUILD_STORE";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var WebhookType;
(function (WebhookType) {
    WebhookType[WebhookType["INCOMING"] = 1] = "INCOMING";
    WebhookType[WebhookType["CHANNEL_FOLLOWER"] = 2] = "CHANNEL_FOLLOWER";
})(WebhookType = exports.WebhookType || (exports.WebhookType = {}));
var ConnectionVisibility;
(function (ConnectionVisibility) {
    ConnectionVisibility[ConnectionVisibility["NONE"] = 0] = "NONE";
    ConnectionVisibility[ConnectionVisibility["EVERYONE"] = 1] = "EVERYONE";
})(ConnectionVisibility = exports.ConnectionVisibility || (exports.ConnectionVisibility = {}));
var PremiumType;
(function (PremiumType) {
    PremiumType[PremiumType["NONE"] = 0] = "NONE";
    PremiumType[PremiumType["NITRO_CLASSIC"] = 1] = "NITRO_CLASSIC";
    PremiumType[PremiumType["NITRO"] = 2] = "NITRO";
})(PremiumType = exports.PremiumType || (exports.PremiumType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWtkQSxJQUFZLG9CQUVYO0FBRkQsV0FBWSxvQkFBb0I7SUFDOUIsbUVBQVUsQ0FBQTtBQUNaLENBQUMsRUFGVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUUvQjtBQUVELElBQVkseUJBR1g7QUFIRCxXQUFZLHlCQUF5QjtJQUNuQyx1RkFBVyxDQUFBO0lBQ1gseUVBQUksQ0FBQTtBQUNOLENBQUMsRUFIVyx5QkFBeUIsR0FBekIsaUNBQXlCLEtBQXpCLGlDQUF5QixRQUdwQztBQUVELElBQVksNEJBR1g7QUFIRCxXQUFZLDRCQUE0QjtJQUN0QywrRkFBWSxDQUFBO0lBQ1osaUdBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyw0QkFBNEIsR0FBNUIsb0NBQTRCLEtBQTVCLG9DQUE0QixRQUd2QztBQUVELElBQVksa0JBSVg7QUFKRCxXQUFZLGtCQUFrQjtJQUM1QixtRUFBUSxDQUFBO0lBQ1IsMkZBQW9CLENBQUE7SUFDcEIseUVBQVcsQ0FBQTtBQUNiLENBQUMsRUFKVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUk3QjtBQUVELElBQVksYUFlWDtBQWZELFdBQVksYUFBYTtJQUN2QixnREFBK0IsQ0FBQTtJQUMvQiwyQ0FBMEIsQ0FBQTtJQUMxQiwwQ0FBeUIsQ0FBQTtJQUN6QixzQ0FBcUIsQ0FBQTtJQUNyQix3Q0FBdUIsQ0FBQTtJQUN2QixrQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBcUIsQ0FBQTtJQUNyQiw4QkFBYSxDQUFBO0lBQ2IsOENBQTZCLENBQUE7SUFDN0IsMENBQXlCLENBQUE7SUFDekIsZ0RBQStCLENBQUE7SUFDL0Isa0NBQWlCLENBQUE7SUFDakIsb0RBQW1DLENBQUE7SUFDbkMsa0VBQWlELENBQUE7QUFDbkQsQ0FBQyxFQWZXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFh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