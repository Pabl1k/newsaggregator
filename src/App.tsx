import Header from "./components/Header/Header.tsx";
import "./styles/App.scss";
import { useContent } from "./useContent.ts";
import Content from "./components/Content/Content.tsx";

const App = () => {
  const { state, loading, filter, updateFilter } = useContent();

  return (
    <div className="app">
      <Header filters={filter} updateFilter={updateFilter} />
      <Content items={state} loading={loading} />
    </div>
  );
};

export default App;
