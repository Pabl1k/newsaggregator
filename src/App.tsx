import Header from "./components/Header/Header.tsx";
import Content from "./components/Content/Content.tsx";
import { useContent } from "./components/Content/useContent.ts";
import "./styles/App.scss";

const App = () => {
  const {
    data,
    loading,
    sources,
    categories,
    filters,
    setKeywordFilter,
    filterByKeyword,
    filterByDate,
    filterByCategory,
    filterBySource,
    clearFilters,
  } = useContent();

  return (
    <div className="app">
      <Header
        filters={filters}
        categories={categories}
        sources={sources}
        setKeywordFilter={setKeywordFilter}
        onKeywordSearch={filterByKeyword}
        onDateSearch={filterByDate}
        onCategorySelect={filterByCategory}
        onSourceSelect={filterBySource}
        onClearFilters={clearFilters}
      />
      <Content data={data} loading={loading} />
    </div>
  );
};

export default App;
