import Header from "./components/Header/Header.tsx";
import "./styles/App.scss";
import Content from "./components/Content/Content.tsx";

const App = () => {
  const items = [] as any[];

  return (
    <div className="app">
      <Header />
      <h1 className="app__label">The latest news:</h1>
      <Content items={items} loading={false} />
    </div>
  );
};

export default App;
