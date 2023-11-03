import { FC } from "react";
import "./Card.scss";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Card: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="card-img" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <span className="card__description">{description}</span>
      </div>
    </div>
  );
};

export default Card;
