import Header from "./components/Header/Header.tsx";
import Card from "./components/Card/Card.tsx";
import "./styles/App.scss";

const App = () => {
  const items = [
    {
      id: "1",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.adsasssd",
    },
    {
      id: "2",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.",
    },
    {
      id: "3",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.",
    },
    {
      id: "4",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.",
    },
    {
      id: "5",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.",
    },
    {
      id: "6",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.",
    },
    {
      id: "7",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "Title Title Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam dapibus, nunc nunc ultricies nunc, vitae aliquam nunc nunc eu nunc.",
    },
  ];

  return (
    <div className="app">
      <Header />
      <h1 className="app__label">The latest news:</h1>
      <div className="app__content">
        {items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
