import { IdName } from "../../global/Types.ts";
import { Category, Country, Language } from "./general.ts";

export interface Result {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: IdName;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Response {
  articles: Result[];
  status: "ok" | "error";
  totalResults: number;
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
  sources: SourceResult;
}
