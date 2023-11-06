import { useQueries } from "@tanstack/react-query";
import { fetchGuardian, fetchNewsApi, fetchNYT } from "../../api/fetchData.ts";
import { SearchParams } from "../../global/Types.ts";

/**
 * data from all endpoints will be taken from the previous 30 days
 */

export const useContent = (searchParams: SearchParams) => {
  const [newsApi, guardian, newYorkTimes] = useQueries({
    queries: [
      {
        queryKey: ["newsApi", searchParams.newsApi],
        queryFn: () => fetchNewsApi(searchParams.newsApi),
      },
      {
        queryKey: ["guardianApi", searchParams.guardian],
        queryFn: () => fetchGuardian(searchParams.guardian),
      },
      {
        queryKey: ["newYorkTimes"],
        queryFn: () => fetchNYT(searchParams.nyt.pageSize),
      },
    ],
  });
  const newsApiData = newsApi.data ?? [];
  const guardianData = guardian.data ?? [];
  const newYorkTimesData = newYorkTimes.data ?? [];

  const combinedData = [...newsApiData, ...guardianData, ...newYorkTimesData];

  return {
    data: combinedData,
    loading: newsApi.isLoading || guardian.isLoading || newYorkTimes.isLoading,
  };
};
