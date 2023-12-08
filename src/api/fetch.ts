import { Response, SourceResponse } from "./types/response.ts";
import { pathCreator } from "./pathCreator.ts";
import { AllParams, SourceParams, TopParams } from "./types/params.ts";
import { SearchInSource as Endpoint } from "./types/general.ts";

type RequestEndpoint = "everything" | "top-headlines" | "top-headlines/sources";

const getEndpoint = (type: Endpoint): RequestEndpoint => {
  if (type === "all") {
    return "everything";
  }

  return "top-headlines";
};

const key = import.meta.env.VITE_NEWS_API_KEY;
const domain = "https://newsapi.org/v2";

export const fetchData = async (
  endpoint: Endpoint,
  params?: AllParams | TopParams,
) => {
  const _endpoint = getEndpoint(endpoint);
  const _params = pathCreator(params) ?? "";
  const url = `${domain}/${_endpoint}${_params}&apiKey=${key}`;

  const response = await fetch(url);
  const data: Response = await response.json();

  return data;
};

export const fetchSources = async (params?: SourceParams) => {
  const _params = pathCreator(params) ?? "";
  const url = `${domain}/sources?${_params}apiKey=${key}`;

  const response = await fetch(url);
  const data: SourceResponse = await response.json();

  return data;
};
