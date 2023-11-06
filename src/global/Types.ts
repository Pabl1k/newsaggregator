import { NewsApiParams } from "../api/types/NewsApi.ts";
import { GuardianApiParams } from "../api/types/Guardian.ts";
import { NYTApiParams } from "../api/types/NewYorkTimes.ts";

export interface SearchParams {
  newsApi: NewsApiParams;
  guardian: GuardianApiParams;
  nyt: NYTApiParams;
}
