import { APIUser } from "../User";

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

export const enum IntegrationExpireBehavior {
  REMOVE_ROLE,
  KICK
}
