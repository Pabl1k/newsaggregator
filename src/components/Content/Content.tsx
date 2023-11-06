import { FC } from "react";
import Card from "../Card/Card.tsx";
import "./Content.scss";
import Skeleton from "../Card/Skeleton.tsx";
import { useContent } from "./useContent.ts";
import { SearchParams } from "../../global/Types.ts";

interface Props {
  searchParams: SearchParams;
}

const Content: FC<Props> = ({ searchParams }) => {
  const { data, loading } = useContent(searchParams);

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
