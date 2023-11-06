import { pathCreator } from "../global/functions/utils.ts";
import { NewsApiDto, NewsApiParams } from "./types/NewsApi.ts";
import { GuardianApiParams, GuardianApiResponse } from "./types/Guardian.ts";
import { NYTApiResponse } from "./types/NewYorkTimes.ts";
import {
  mapGuardianDtoToModel,
  mapModelToGuardianDto,
  mapNewsApiDtoToModel,
  mapNYTDtoToModel,
} from "./mapper.ts";

export const fetchNewsApi = async (params: NewsApiParams) => {
  const key = import.meta.env.VITE_NEWS_API_KEY;
  const domain = "https://newsapi.org/v2/everything";
  const path = pathCreator(params);
  const url = `${domain}${path}&apiKey=${key}`;

  const response = await fetch(url);
  const data: NewsApiDto = await response.json();

  return data.articles.map(mapNewsApiDtoToModel);
};

export const fetchGuardian = async (params: GuardianApiParams) => {
  const key = import.meta.env.VITE_GUARDIAN_API_KEY;
  const domain = "https://content.guardianapis.com/search";
  const path = pathCreator(mapModelToGuardianDto(params));
  const url = `${domain}${path}&api-key=${key}`;

  const response = await fetch(url);
  const data: GuardianApiResponse = await response.json();

  return data.response.results.map(mapGuardianDtoToModel);
};

export const fetchNYT = async (pageSize: number) => {
  const key = import.meta.env.VITE_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${pageSize}.json?api-key=${key}`;

  const response = await fetch(url);
  const data: NYTApiResponse = await response.json();

  return data.results.map(mapNYTDtoToModel);
};
