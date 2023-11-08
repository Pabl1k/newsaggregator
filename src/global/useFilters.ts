import { useEffect, useRef, useState } from "react";
import { Filters } from "../components/Content/useContent.ts";

const CACHE_KEY = "news-filters";

export const useFilters = (initialFilters: Filters) => {
  const [filters, setFilters] = useState(() => {
    const value = window.localStorage.getItem(CACHE_KEY);

    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        window.localStorage.removeItem(CACHE_KEY);
      }
    }
    return initialFilters;
  });

  const prevKeyRef = useRef(CACHE_KEY);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== CACHE_KEY) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = CACHE_KEY;
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(filters));
  }, [CACHE_KEY, filters]);

  return [filters, setFilters];
};
