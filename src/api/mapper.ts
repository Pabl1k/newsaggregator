import { RequestParams } from "../global/Types.ts";
import { NYTResult } from "./types/NewYorkTimes.ts";
import { NewsApiResponse } from "./types/NewsApi.ts";
import { GuardianResult } from "./types/Guardian.ts";
import { Result } from "./types/model.ts";

type DateFormat = `${string}-${string}-${string}`;

const dateToFormat = (publishedAt: string): DateFormat => {
  const date = new Date(publishedAt);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const mapNewsApiDtoToModel = (data: NewsApiResponse): Result => ({
  id: data.url,
  author: data.author,
  content: data.content,
  description: data.description,
  imageUrl: data.urlToImage,
  publishedAt: dateToFormat(data.publishedAt),
  section: null,
  sourceName: data.source.name,
  sourceUrl: data.url,
  title: data.title,
});

export const mapGuardianDtoToModel = (data: GuardianResult): Result => ({
  id: data.apiUrl,
  author: null,
  content: null,
  description: null,
  imageUrl: null,
  publishedAt: dateToFormat(data.webPublicationDate),
  section: data.sectionName,
  sourceName: "The Guardian",
  sourceUrl: data.webUrl,
  title: data.webTitle,
});

export const mapNYTDtoToModel = (data: NYTResult): Result => ({
  id: data.id.toString(),
  author: data.byline,
  content: data.adx_keywords,
  description: data.abstract,
  imageUrl: data.media[0]["media-metadata"][0]?.url ?? null,
  publishedAt: data.published_date,
  section: data.section,
  sourceName: "New York Times",
  sourceUrl: data.url,
  title: data.title,
});

export const mapModelToNewsApiDto = (params: RequestParams) => ({
  from: params.fromDate,
  to: params.toDate,
  sources: "bbc-news,associated-press,the-wall-street-journal,espn,cnn",
  pageSize: 20,
  language: "en",
});

export const mapModelToGuardianDto = (params: RequestParams) => ({
  ["from-date"]: params.fromDate,
  ["to-date"]: params.toDate,
  ["page-size"]: 20,
  lang: "en",
});
