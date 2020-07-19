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

export enum PremiumType {
  NONE,
  NITRO_CLASSIC,
  NITRO
}
