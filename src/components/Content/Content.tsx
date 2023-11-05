import { FC } from "react";
import Card from "../Card/Card.tsx";
import "./Content.scss";
import Skeleton from "../Card/Skeleton.tsx";

interface Props {
  items: any[];
  loading: boolean;
}

const Content: FC<Props> = ({ items, loading }) => {
  return (
    <div className="content">
      {loading ? (
        <Skeleton />
      ) : (
        items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))
      )}
    </div>
  );
};

export default Content;
