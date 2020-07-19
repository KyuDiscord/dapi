export interface APIEmbed {
  title?: string;
  type?: "rich";
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: APIEmbedFooter;
  image?: APIEmbedImage;
  thumbnail?: APIEmbedThumbnail;
  video?: APIEmbedVideo;
  provider?: APIEmbedProvider;
  author?: APIEmbedAuthor;
  fields?: APIEmbedField[];
}

export interface APIEmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface APIEmbedImage {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface APIEmbedThumbnail {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface APIEmbedVideo {
  url?: string;
  height?: number;
  width?: number;
}

export interface APIEmbedProvider {
  name?: string;
  url?: string;
}

export interface APIEmbedAuthor {
  name?: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface APIEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}