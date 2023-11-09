import { FC, useEffect, useState } from "react";
import Input from "../Input/Input.tsx";
import DateSelector from "../DateSelector/DateSelector.tsx";
import Select from "../Select/Select.tsx";
import menuIcon from "../../assets/icons/burgerMenu.svg";
import closeIcon from "../../assets/icons/cross.svg";
import { DateRange, Filters } from "../../global/Types.ts";
import "./Header.scss";

interface Props {
  filters: Filters;
  categories: string[];
  sources: string[];
  setKeywordFilter: (value: string | null) => void;
  onKeywordSearch: (keyword: string | null) => void;
  onDateSearch: (dateRange: DateRange) => void;
  onCategorySelect: (category: string | null) => void;
  onSourceSelect: (source: string | null) => void;
  onClearFilters: () => void;
}

const Header: FC<Props> = ({
  filters,
  categories,
  sources,
  setKeywordFilter,
  onKeywordSearch,
  onDateSearch,
  onCategorySelect,
  onSourceSelect,
  onClearFilters,
}) => {
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
      <button onClick={onClearFilters}>Clear all filters</button>
      <Select
        title="Source"
        value={filters.source}
        options={sources}
        onSelect={onSourceSelect}
      />
      <Select
        title="Category"
        value={filters.category}
        options={categories}
        onSelect={onCategorySelect}
      />
      <DateSelector dateRange={filters.dateRange} onChange={onDateSearch} />
      <Input
        value={filters.keyword}
        onChange={setKeywordFilter}
        onSearch={onKeywordSearch}
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
      <div className="header__logo">NEWS LOGO</div>
      <div className="header__container">
        {mobile && displayIcon}
        {mobile && open && menu}
        {!mobile && menu}
      </div>
    </div>
  );
};

export default Header;
