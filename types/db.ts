export type Art = {
  url: string;
  alt: string;
};
export type CodeBodyItem = {
  type: "heading" | "text" | "code" | "list" | "image";
  content: string[];
};
export type Code = {
  githubLink: string;
  siteLink?: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  title: string;
  body: CodeBodyItem[];
  description: string;
  tags?: string[];
};
export type Database = {
  art: Art[];
  code: Code[];
};
