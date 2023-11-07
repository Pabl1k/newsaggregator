import { FC } from "react";
import Card from "../Card/Card.tsx";
import "./Content.scss";
import Skeleton from "../Card/Skeleton.tsx";
import { Result } from "../../api/types/model.ts";

interface Props {
  data: Result[];
  loading: boolean;
}

const Content: FC<Props> = ({ data, loading }) => {
  return (
    <div className="content">
      {loading ? (
        <Skeleton />
      ) : (
        data.map((item) => <Card key={item.id} data={item} />)
      )}
    </div>
  );
};

export default Content;
