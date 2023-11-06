import { NYTResult } from "./types/NewYorkTimes.ts";
import { NewsApiResponse } from "./types/NewsApi.ts";
import { GuardianResult } from "./types/Guardian.ts";
import { Result } from "./types/model.ts";

export const mapNewsApiDtoToModel = (data: NewsApiResponse): Result => ({
  id: data.url,
  author: data.author,
  content: data.content,
  description: data.description,
  imageUrl: data.urlToImage,
  publishedAt: data.publishedAt,
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
  publishedAt: data.webPublicationDate,
  section: data.sectionName,
  sourceName: "The Guardian",
  sourceUrl: data.webUrl,
  title: data.webTitle,
});

export const mapNYTDtoToModel = (data: NYTResult): Result => ({
  id: data.id.toString(),
  author: data.byline,
  content: null,
  description: data.abstract,
  imageUrl: data.media[0]["media-metadata"][0]?.url ?? null,
  publishedAt: data.published_date,
  section: data.section,
  sourceName: "New York Times",
  sourceUrl: data.url,
  title: data.title,
});
