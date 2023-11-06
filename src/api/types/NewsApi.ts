import { IdName, Language } from "./model.ts";

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
  sources: string;
  from: string;
  pageSize: number;
  language: Language;
  q?: string;
  to?: string;
  sortBy?: SortBy;
  category?: Category;
}

export interface NewsApiDto {
  articles: NewsApiResponse[];
  status: string;
  totalResults: number;
}

export interface NewsApiResponse {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: IdName;
  title: string;
  url: string;
  urlToImage: string;
}
