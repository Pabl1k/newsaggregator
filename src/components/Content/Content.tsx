import { FC } from "react";
import Card from "../Card/Card.tsx";
import Skeleton from "../Card/Skeleton.tsx";
import "./Content.scss";
import { Result } from "../../api/types/response.ts";

interface Props {
  items: Result[];
  loading: boolean;
}

const Content: FC<Props> = ({ items, loading }) => {
  return (
    <div className="content">
      {loading && <Skeleton />}
      {items.length ? (
        items.map((item) => <Card key={item.url} data={item} />)
      ) : (
        <span>No news with the selected filters</span>
      )}
    </div>
  );
};

export default Content;
