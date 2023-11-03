import { FC } from "react";
import "./Header.scss";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className="header">
      <div className="header__logo">NEWS LOGO</div>
      <div>MENU</div>
    </div>
  );
};

export default Header;
