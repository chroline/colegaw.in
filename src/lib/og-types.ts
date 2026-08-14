export type LinkPreview = {
  url: string;
  domain: string;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
};

export type PreviewMap = Record<string, LinkPreview>;
