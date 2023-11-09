import { uniqueId } from "../../global/functions/uniqueId.ts";
import "./Skeleton.scss";

const TABLET_SCREEN_WIDTH = 1060;
const MOBILE_SCREEN_WIDTH = 706;

const Skeleton = () => {
  const userScreenWidth = window.screen.width;

  const getCardsCount = () => {
    if (userScreenWidth < MOBILE_SCREEN_WIDTH) {
      return 4;
    }

    if (userScreenWidth < TABLET_SCREEN_WIDTH) {
      return 6;
    }

    return 12;
  };

  return Array.from({ length: getCardsCount() }).map(() => {
    const id = uniqueId();

    return (
      <div className="skeleton" key={id}>
        <div className="skeleton__image" />
        <div className="skeleton__content">
          <div className="skeleton__title" />
          <div className="skeleton__description" />
        </div>
      </div>
    );
  });
};

export default Skeleton;
