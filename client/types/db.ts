export type Art = {
  url: string;
  alt: string;
};
export type Code = {
  githubLink: string;
  siteLink?: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  title: string;
  body: string;
  description: string;
  tags?: string[];
};
export type Database = {
  art: Art[];
  code: Code[];
};
