import React, { FC } from "react";
import { Result } from "../../api/types/model.ts";
import starIcon from "../../assets/icons/star.svg";
import "./Card.scss";

interface Props {
  data: Result;
}

const Card: FC<Props> = ({ data }) => {
  const {
    title,
    description,
    imageUrl,
    sourceName,
    sourceUrl,
    publishedAt,
    section,
  } = data;
  const defaultImage =
    sourceName === "The Guardian"
      ? "https://birn.eu.com/wp-content/uploads/2018/11/guardian.png"
      : "https://b1370787.smushcdn.com/1370787/wp-content/uploads/2020/11/SE-5000H-RWS-3.jpg?lossy=1&strip=1&webp=1";

  const cardTitle = sourceUrl ? `Click to open in ${sourceName}` : undefined;

  const handleAddToReadLater = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Add to read later");
  };

  return (
    <div className="card" title={cardTitle}>
      <a href={sourceUrl ?? ""} target="_blank">
        <img
          className="card__image"
          src={imageUrl ?? defaultImage}
          alt={title}
        />
        <div className="card__content">
          <span className="card__publication-day-or-section">
            Publication day: {publishedAt}
          </span>
          {!!section && (
            <span className="card__publication-day-or-section">
              Category: {section}
            </span>
          )}
          <h2 className="card__title">{title}</h2>
          <span className="card__description">{description}</span>
        </div>
        <div className="card__star-container">
          <button onClick={handleAddToReadLater}>
            <img src={starIcon} alt="star icon" title="Add to read later" />
          </button>
        </div>
      </a>
    </div>
  );
};

export default Card;
