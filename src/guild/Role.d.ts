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