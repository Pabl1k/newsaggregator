import { Response, SourceResponse } from "./types/response.ts";
import { pathCreator } from "./pathCreator.ts";
import { Params, SourceParams } from "./types/params.ts";
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

export const getData = async (endpoint: Endpoint, params: Params) => {
  const _endpoint = getEndpoint(endpoint);
  const _params = pathCreator(params) ?? "";
  const url = `${domain}/${_endpoint}${_params}&apiKey=${key}`;

  const response = await fetch(url);
  const data: Response = await response.json();

  if (data.status === "error") {
    alert(data.message);
  }

  return data.articles;
};

export const getSources = async (params?: SourceParams) => {
  const _params = pathCreator(params) ?? "";
  const url = `${domain}/sources${_params}&apiKey=${key}`;

  const response = await fetch(url);
  const data: SourceResponse = await response.json();

  return data;
};
