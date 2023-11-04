import { pathCreator } from "../global/functions/utils.ts";
import { NewsApiParams } from "./types/NewsApi.ts";
import { GuardianApiParams } from "./types/GuardianApi.ts";

export const fetchNewsApi = async (params: NewsApiParams) => {
  const key = import.meta.env.VITE_NEWS_API_KEY;
  const domain = "https://newsapi.org/v2/everything";
  const path = pathCreator(params);
  const url = `${domain}${path}&apiKey=${key}`;

  const response = await fetch(url);
  return await response.json();
};

export const fetchGuardian = async (params: GuardianApiParams) => {
  const key = import.meta.env.VITE_GUARDIAN_API_KEY;
  const domain = "https://content.guardianapis.com/search";
  const path = pathCreator(params);
  const url = `${domain}${path}&api-key=${key}`;

  const response = await fetch(url);
  return await response.json();
};

export const fetchNYT = async () => {
  const key = import.meta.env.VITE_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${key}`;

  const response = await fetch(url);
  return await response.json();
};
