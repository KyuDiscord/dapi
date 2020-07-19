import { APIEmojiPartial } from "../guild";

export * from "./Message";
export * from "./Embed";

export interface APIReaction {
  count: number;
  me: boolean;
  emoji: APIEmojiPartial;
}
