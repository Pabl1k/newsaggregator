import { useQueries } from "@tanstack/react-query";
import { fetchGuardian, fetchNewsApi, fetchNYT } from "./fetchData.ts";
import {
  getSearchStartDate,
  getTodayDate,
} from "../global/functions/getInitialDate.ts";

export const useRequestData = () => {
  const initialParams = {
    fromDate: getSearchStartDate(),
    toDate: getTodayDate(),
  };

  const response = useQueries({
    queries: [
      {
        queryKey: ["newsApi"],
        queryFn: () => fetchNewsApi(initialParams),
      },
      {
        queryKey: ["guardian"],
        queryFn: () => fetchGuardian(initialParams),
      },
      {
        queryKey: ["newYorkTimes"],
        queryFn: () => fetchNYT(),
      },
    ],
  });

  const data = response.map((item) => item.data ?? []).flat();
  const loading = response.some((item) => item.isLoading);
  const dataFetched = response.every((item) => item.isFetched);

  return {
    data,
    loading,
    dataFetched,
  };
};
