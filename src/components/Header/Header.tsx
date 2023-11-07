import { FC } from "react";
import Input from "../Input/Input.tsx";
import DateSelector from "../DateSelector/DateSelector.tsx";
import "./Header.scss";
import Select from "../Select/Select.tsx";

interface Props {
  categories: string[];
  sources: string[];
  onKeywordSearch: (keyword: string) => void;
  onFromDateSearch: (from: string) => void;
  onToDateSearch: (to: string) => void;
  onCategorySelect: (category: string) => void;
  onSourceSelect: (source: string) => void;
  onClearFilters: () => void;
}

const Header: FC<Props> = ({
  categories,
  sources,
  onKeywordSearch,
  onFromDateSearch,
  onToDateSearch,
  onCategorySelect,
  onSourceSelect,
  onClearFilters,
}) => {
  return (
    <div className="header">
      <div className="header__logo">NEWS LOGO</div>
      <div className="header__container">
        <button onClick={onClearFilters}>Clear all filters</button>
        <Select title="Source" options={sources} onSelect={onSourceSelect} />
        <Select
          title="Category"
          options={categories}
          onSelect={onCategorySelect}
        />
        <DateSelector onFrom={onFromDateSearch} onTo={onToDateSearch} />
        <Input onSearch={onKeywordSearch} />
      </div>
    </div>
  );
};

export default Header;
