import { Category, Country, DateFormat, IdName, Language } from "./general.ts";

export interface Result<T = DateFormat> {
  author: string;
  content: string;
  description: string;
  publishedAt: T;
  source: IdName;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Response {
  articles: Result[];
  status: "ok" | "error";
  totalResults: number;
  message?: string; // error message
}

export interface SourceResult extends IdName {
  description: string;
  url: string;
  category: Category;
  language: Language;
  country: Country;
}

export interface SourceResponse {
  status: "ok" | "error";
  sources: SourceResult[];
}
