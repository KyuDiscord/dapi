import { APIActivity, PresenceStatus } from "./Activity";
import { APIUser } from "./User";

export interface APIPresenceUpdate {
  user: { id: string } & Partial<APIUser>;
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