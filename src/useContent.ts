import { useEffect, useState } from "react";
import { Params } from "./api/types/params.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getData } from "./api/fetch.ts";
import { Result } from "./api/types/response.ts";
import { SearchInSource } from "./api/types/general.ts";

export type FilterUpdateType = <K extends keyof Params>(
  key: K,
  value: Params[K]
) => void;

const initialFilter: Params = {
  language: "en",
  pageSize: 20,
  page: 1
};

const filterInvalidData = (data: Result[]) => {
  return data.filter((item) => item.title !== "[Removed]");
};

const mapResponseToState = (data?: Array<Result[]>): Result[] => {
  if (!data) {
    return [];
  }

  const combinedData = data.reduce((res, newPageData) => {
    return [...res, ...newPageData];
  }, []);

  return filterInvalidData(combinedData);
};

const getEndpoint = (params: Params): SearchInSource => {
  if (params.q) {
    return "all";
  }
  return "top";
};

const twoRowsHeight = 300;
const MAX_ALLOWED_PAGES = 5;

export const useContent = () => {
  const [filter, setFilter] = useState<Params>(initialFilter);
  const filterValue = Object.values(filter);

  const {
    data,
    isLoading: loading,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ["projects", filterValue],
    queryFn: ({ pageParam }) =>
      getData(getEndpoint(filter), { ...filter, page: pageParam }),
    initialPageParam: 1,
    getPreviousPageParam: () => undefined,
    getNextPageParam: (_, allPages) => {
      if (allPages.length < filter.page * 20) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    }
  });
  const state = mapResponseToState(data?.pages);
  const currentPage = data?.pageParams.at(-1);

  // onFilterChange reset current page to 1
  const updateFilter = <K extends keyof Params>(key: K, value: Params[K]) => {
    setFilter((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  useEffect(() => {
    let fetch = false;

    const handleScroll = async () => {
      if (
        !fetch &&
        currentPage !== MAX_ALLOWED_PAGES &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - twoRowsHeight
      ) {
        fetch = true;
        await fetchNextPage();
        fetch = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, currentPage]);

  return {
    state,
    loading,
    filter,
    updateFilter,
    resetFilters: () => setFilter(initialFilter)
  };
};
