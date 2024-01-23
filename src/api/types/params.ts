import { Category, Country, DateFormat, Language } from "./general.ts";

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

/**
 * @param q
 *   add "" for exact much
 *   Symbol + from words or phrases that must appear
 *   Symbol - from words or phrases that must not appear
 *   AND | OR | NOT - Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
 */
interface CommonParams {
  q?: string;
  sources?: string;
  pageSize?: number;
  page?: number;
}

/**
 * at least one parameter of q, sources, domains required:
 * @param sources: can be multiple, max 20
 * @param pageSize: max 100, default 100
 * @param searchIn: can be multiple, e.g?: "title,content"
 * @param sortBy: Default: publishedAt
 */
interface All extends CommonParams {
  qInTitle?: string;
  searchIn?: "title" | "description" | "content";
  domains?: string;
  excludeDomains?: string;
  from?: DateFormat;
  to?: DateFormat;
  language: Language;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
}

export type AllParams = RequireAtLeastOne<
  All,
  "q" | "qInTitle" | "sources" | "domains"
>;

/**
 * @param sources: can't be used with country or category
 * @param pageSize: max 100, default 20
 * @param country: can't be used with sources
 * @param category: can't be used with sources
 */
export interface TopParams extends CommonParams {
  language: Language;
  country?: Country;
  category?: Category;
}

export interface SourceParams {
  category?: Category;
  language?: Language;
  country?: Country;
}

export interface Params {
  language: Language;
  pageSize?: number;
  page?: number;
  q?: string;
  sources?: string;
  qInTitle?: string;
  searchIn?: "title" | "description" | "content";
  domains?: string;
  excludeDomains?: string;
  from?: DateFormat;
  to?: DateFormat;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  country?: Country;
  category?: Category;
}
