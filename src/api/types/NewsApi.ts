import { IdName, Language } from "./global.ts";

export type SortBy = "relevancy" | "popularity" | "publishedAt";
export type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

export interface NewsApiParams {
  from: string;
  q?: string;
  to?: string;
  sortBy?: SortBy;
  category?: Category;
  language: Language;
}

export interface NewsApiResponse extends IdName {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: IdName;
  title: string;
  url: string;
  urlToImage: string;
}
