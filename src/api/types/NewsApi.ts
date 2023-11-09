import { IdName } from "../../global/Types.ts";

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
