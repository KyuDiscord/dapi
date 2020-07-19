import { APIUser } from "../User";

export * from "./Guild";
export * from "./Emoji";
export * from "./Integration";
export * from "./Invite";
export * from "./Role";
export * from "./Voice";

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

