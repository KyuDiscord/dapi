import { APIUser } from "../User";

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