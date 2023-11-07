import { useQueries } from "@tanstack/react-query";
import { fetchGuardian, fetchNewsApi, fetchNYT } from "../../api/fetchData.ts";
import { SearchParams } from "../../global/Types.ts";
import { NewsApiParams } from "../../api/types/NewsApi.ts";
import { GuardianApiParams } from "../../api/types/Guardian.ts";

const newsApiQueryKey = (obj: NewsApiParams) => {
  const keys = Object.keys(obj);
  const result: never[] = [];

  for (const key of keys) {
    if (key !== "category") {
      return [...result, key];
    }
  }

  return result;
};

const guardianQueryKey = (obj: GuardianApiParams) => {
  const keys = Object.keys(obj);
  const result: never[] = [];

  for (const key of keys) {
    if (key !== "source") {
      return [...result, key];
    }
  }

  return result;
};

export const useContent = (searchParams: SearchParams) => {
  const [newsApi, guardian, newYorkTimes] = useQueries({
    queries: [
      {
        queryKey: newsApiQueryKey(searchParams.newsApi),
        queryFn: () => fetchNewsApi(searchParams.newsApi),
      },
      {
        queryKey: guardianQueryKey(searchParams.guardian),
        queryFn: () => fetchGuardian(searchParams.guardian),
      },
      {
        queryKey: ["newYorkTimes"],
        queryFn: () => fetchNYT(searchParams.nyt.publishedDaysAgo),
      },
    ],
  });

  const newsApiData = newsApi.data ?? [];
  const guardianData = guardian.data ?? [];
  const newYorkTimesData = newYorkTimes.data ?? [];

  const filterNewsApiByCategory = () => {
    const category = searchParams.newsApi.category;

    if (category) {
      return newsApiData.filter(
        (item) =>
          item.description?.toLowerCase().includes(category.toLowerCase()),
      );
    }

    return [];
  };

  const filterNewYorkTimesDataByKeyword = (keyword: string) =>
    newYorkTimesData.filter(
      (item) => item.content?.toLowerCase().includes(keyword.toLowerCase()),
    );

  const filterNewYorkTimesDataBySection = (section: string) =>
    newYorkTimesData.filter(
      (item) => item.section?.toLowerCase() === section.toLowerCase(),
    );

  const newsApiDataToDisplay = searchParams.newsApi.category
    ? filterNewsApiByCategory()
    : newsApiData;

  const newYorkTimesDataToDisplay = () => {
    if (searchParams.nyt.keyword) {
      return filterNewYorkTimesDataByKeyword(searchParams.nyt.keyword);
    }

    if (searchParams.nyt.section) {
      return filterNewYorkTimesDataBySection(searchParams.nyt.section);
    }

    return newYorkTimesData;
  };

  const combinedData = [
    ...newsApiDataToDisplay,
    ...guardianData,
    ...newYorkTimesDataToDisplay(),
  ];

  const filterDataBySource = () => {
    return combinedData.filter((item) => {
      if (searchParams.guardian.source) {
        return (
          item.sourceName?.toLowerCase() ===
          searchParams.guardian?.source.toLowerCase()
        );
      }
    });
  };

  const dataToDisplay = searchParams.guardian.source
    ? filterDataBySource()
    : combinedData;

  return {
    data: dataToDisplay,
    loading: newsApi.isLoading || guardian.isLoading || newYorkTimes.isLoading,
  };
};
