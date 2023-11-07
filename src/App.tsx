import Header from "./components/Header/Header.tsx";
import "./styles/App.scss";
import Content from "./components/Content/Content.tsx";
import { getInitialSearchDate } from "./global/functions/getInitialDate.ts";
import { SearchParams } from "./global/Types.ts";
import { useState } from "react";
import { useContent } from "./components/Content/useContent.ts";
import { Category } from "./api/types/NewsApi.ts";

const newsApiCategories: Category[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const initialSearchParams: SearchParams = {
  newsApi: {
    sources: "bbc-news,associated-press,the-wall-street-journal,espn,cnn",
    from: getInitialSearchDate(),
    language: "en",
    pageSize: 10,
    page: 1,
  },
  guardian: {
    fromDate: getInitialSearchDate(),
    pageSize: 10,
    page: 1,
  },
  nyt: {
    publishedDaysAgo: 7,
  },
};

const App = () => {
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const { data, loading } = useContent(searchParams);

  const categories = data
    .filter((item) => item.section)
    .map((item) => item.section?.toLowerCase() as string)
    .concat(newsApiCategories)
    .sort();
  const uniqueCategories = [...new Set(categories)];

  const source = data.map((item) => item.sourceName).sort();
  const uniqueSource = [...new Set(source)];

  const searchByKeyword = (keyword: string) => {
    setSearchParams((prevState) => ({
      ...prevState,
      newsApi: {
        ...prevState.newsApi,
        keyword,
      },
      guardian: {
        ...prevState.guardian,
        keyword,
      },
      nyt: {
        ...prevState.nyt,
        keyword,
      },
    }));
  };

  const searchByFromDate = (from: string) => {
    setSearchParams((prevState) => ({
      ...prevState,
      newsApi: {
        ...prevState.newsApi,
        from,
      },
      guardian: {
        ...prevState.guardian,
        fromDate: from,
      },
      nyt: {
        ...prevState.nyt,
        fromDate: from,
      },
    }));
  };

  const searchByToDate = (to: string) => {
    setSearchParams((prevState) => ({
      ...prevState,
      newsApi: {
        ...prevState.newsApi,
        to,
      },
      guardian: {
        ...prevState.guardian,
        toDate: to,
      },
      nyt: {
        ...prevState.nyt,
        toDate: to,
      },
    }));
  };

  const searchByCategory = (category: string) => {
    const newsApiCategory = newsApiCategories.includes(category as Category);

    setSearchParams((prevState) => ({
      ...prevState,
      newsApi: {
        ...prevState.newsApi,
        category: newsApiCategory ? (category as Category) : undefined,
      },
      guardian: {
        ...prevState.guardian,
        section: category,
      },
      nyt: {
        ...prevState.nyt,
        section: category,
      },
    }));
  };

  const searchBySource = (source: string) => {
    setSearchParams((prevState) => ({
      ...prevState,
      newsApi: {
        ...prevState.newsApi,
        sources: source,
      },
      guardian: {
        ...prevState.guardian,
        source,
      },
      nyt: {
        ...prevState.nyt,
        source,
      },
    }));
  };

  const clearFilters = () => {
    setSearchParams(initialSearchParams);
  };

  return (
    <div className="app">
      <Header
        categories={uniqueCategories}
        sources={uniqueSource}
        onKeywordSearch={searchByKeyword}
        onFromDateSearch={searchByFromDate}
        onToDateSearch={searchByToDate}
        onCategorySelect={searchByCategory}
        onSourceSelect={searchBySource}
        onClearFilters={clearFilters}
      />
      <Content data={data} loading={loading} />
    </div>
  );
};

export default App;
