import { APIEmoji } from "./guild";

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

export enum ActivityType {
  GAME,
  STREAMING,
  LISTENING,
  CUSTOM = 4
}

export enum PresenceStatus {
  IDLE = "idle",
  DND = "dnd",
  ONLINE = "online",
  OFFLINE = "offline"
}
