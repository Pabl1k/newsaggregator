import { FC, useEffect, useState } from "react";
import Select from "../Select/Select.tsx";
import menuIcon from "../../assets/icons/burgerMenu.svg";
import closeIcon from "../../assets/icons/cross.svg";
import LanguageSelect from "../Select/LanguageSelect.tsx";
import { Params } from "../../api/types/params.ts";
import { FilterUpdateType } from "../../useContent.ts";
import { useSources } from "../../useSources.ts";
import { Category, IdName } from "../../api/types/general.ts";
import DateSelector from "../DateSelector/DateSelector.tsx";
import KeywordInput from "../KeywordInput/KeywordInput.tsx";
import logo from "../../assets/logo.png";
import "./Header.scss";

interface Props {
  filters: Params;
  updateFilter: FilterUpdateType;
}

const categories: Category[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology"
];

const Header: FC<Props> = ({ filters, updateFilter }) => {
  const sourcesList = useSources({
    language: filters.language
  });
  const categoriesList: IdName[] = categories.map((category) => ({
    id: category,
    name: category
  }));

  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mobile = screenWidth <= 625;

  const displayIcon = (
    <button className="header__menu-container" onClick={() => setOpen(!open)}>
      <img
        src={open ? closeIcon : menuIcon}
        className="header__menu-icon"
        alt="menu icon"
      />
    </button>
  );

  const menu = (
    <>
      <LanguageSelect
        title="Language"
        value={filters.language}
        onSelect={(value) => updateFilter("language", value)}
      />
      {sourcesList.length > 0 && (
        <Select
          title="Source"
          value={filters.sources}
          options={sourcesList}
          onSelect={(value) => updateFilter("sources", value)}
        />
      )}
      <Select
        title="Category"
        value={filters.category}
        options={categoriesList}
        onSelect={(category) => updateFilter("category", category as Category)}
      />
      <DateSelector
        dateRange={{ from: filters.from, to: filters.to }}
        onFromChange={(fromDate) => updateFilter("from", fromDate)}
        onToChange={(toDate) => updateFilter("to", toDate)}
      />
      <KeywordInput
        onSearch={(value) => updateFilter("qInTitle", value ?? undefined)}
      />
    </>
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Site logo" />
      </div>
      <div className="header__container">
        {mobile && displayIcon}
        {mobile && open && menu}
        {!mobile && menu}
      </div>
    </div>
  );
};

export default Header;
