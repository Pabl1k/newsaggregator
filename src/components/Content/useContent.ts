import { useRequestData } from "../../api/useData.ts";
import { useEffect, useMemo, useState } from "react";
import { Result } from "../../api/types/model.ts";
import {
  getSearchStartDate,
  getTodayDate,
} from "../../global/functions/getInitialDate.ts";
import { useFilters } from "../../global/useFilters.ts";
import { DateRange, Filters } from "../../global/Types.ts";

const initialDates = {
  from: getSearchStartDate(),
  to: getTodayDate(),
};

const initialFilters: Filters = {
  keyword: null,
  dateRange: initialDates,
  category: "All",
  source: "All",
};

export const useContent = () => {
  const { data, loading, dataFetched } = useRequestData();
  const [state, setState] = useState<Result[]>([]);
  const [filters, setFilters] = useFilters(initialFilters);

  const sources = useMemo(
    () => [...new Set(data.map((item) => item.sourceName))],
    [dataFetched],
  );

  const categories = useMemo(
    () =>
      data
        .filter((item) => !!item.section)
        .map((item) => item.section as string),
    [dataFetched],
  );
  const uniqueCategories = [...new Set(categories)];

  const clearFilters = () => {
    setFilters(initialFilters);
    setState(data);
  };

  const setKeywordFilter = (value: string | null) => {
    setFilters({ ...filters, keyword: value });
  };

  const filterByKeyword = (keyword: string | null) => {
    if (!keyword) {
      clearFilters();
      return;
    }

    const filtered = state.filter((item) =>
      item.title.toLowerCase().split(" ").includes(keyword.toLowerCase()),
    );

    setState(filtered);
  };

  const filterByDate = ({ from, to }: DateRange) => {
    const fromDate = from ?? filters.dateRange.from;
    const toDate = to ?? filters.dateRange.to;

    const filteredFrom = data.filter(
      (item) => item.publishedAt >= fromDate && item.publishedAt <= toDate,
    );
    setFilters({ ...filters, dateRange: { from, to } });
    setState(filteredFrom);
  };

  const filterByCategory = (category: string | null) => {
    if (category === "All") {
      setFilters({ ...filters, category });
      setState(data);
      return;
    }

    const dataForFilter = filters.category === category ? state : data;
    const filtered = dataForFilter.filter((item) => item.section === category);
    setFilters({ ...filters, category });
    setState(filtered);
  };

  const filterBySource = (source: string | null) => {
    if (source === "All") {
      setFilters({ ...filters, source });
      setState(data);
      return;
    }

    const dataForFilter = filters.source === source ? state : data;
    const filtered = dataForFilter.filter((item) => item.sourceName === source);
    setFilters({ ...filters, source });
    setState(filtered);
  };

  useEffect(() => {
    if (dataFetched) {
      setState(data);
    }
  }, [dataFetched]);

  return {
    data: state,
    loading,
    filters,
    sources,
    categories: uniqueCategories,
    setKeywordFilter,
    filterByKeyword,
    filterByDate,
    filterByCategory,
    filterBySource,
    clearFilters,
  };
};
