import Header from "./components/Header/Header.tsx";
import "./styles/App.scss";
import Content from "./components/Content/Content.tsx";
import { getInitialSearchDate } from "./global/functions/getInitialDate.ts";
import { SearchParams } from "./global/Types.ts";

const App = () => {
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
  const searchParams = initialSearchParams;
  const period = 30;

  return (
    <div className="app">
      <Header />
      <h1 className="app__label">News for the last: {period} days</h1>
      <Content searchParams={searchParams} />
    </div>
  );
};

export default App;
