import { APIGuildPartial } from "./Guild";
import { APIChannelPartial } from "../Channel";
import { APIUser } from "../User";

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

export const enum InviteTargetUserType {
  STREAM = 1
}
