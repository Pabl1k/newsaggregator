import { FC } from "react";
import { Result } from "../../api/types/response.ts";
import "./Card.scss";

interface Props {
  data: Result;
}

const Card: FC<Props> = ({ data }) => {
  const { title, urlToImage, source, url, publishedAt } = data;
  const defaultImage =
    "https://b1370787.smushcdn.com/1370787/wp-content/uploads/2020/11/SE-5000H-RWS-3.jpg?lossy=1&strip=1&webp=1";

  const cardTitle = url ? `Click to open in ${source.name}` : undefined;

  return (
    <div className="card" title={cardTitle}>
      <a href={url ?? ""} target="_blank">
        <img
          className="card__image"
          src={urlToImage ?? defaultImage}
          alt={title}
        />
        <div className="card__content">
          <span className="card__publication-day-or-section">
            Publication day: {publishedAt}
          </span>
          <h2 className="card__title">{title}</h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
