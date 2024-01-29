import { DateFormat } from "./types/general.ts";
import { Result } from "./types/response.ts";

export const mapDateToFormat = (value: string): DateFormat => {
  const date = new Date(value);

  const year = date.getFullYear();
  const dtoMonth = date.getMonth() + 1;
  const month = dtoMonth < 10 ? `0${dtoMonth}` : dtoMonth;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

export const mapDataToModel = (item: Result<string>): Result => ({
  ...item,
  publishedAt: mapDateToFormat(item.publishedAt)
});
