import { FC } from "react";
import { DateRange, Filters } from "../Content/useContent.ts";
import Input from "../Input/Input.tsx";
import DateSelector from "../DateSelector/DateSelector.tsx";
import Select from "../Select/Select.tsx";
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
  return (
    <div className="header">
      <div className="header__logo">NEWS LOGO</div>
      <div className="header__container">
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
      </div>
    </div>
  );
};

export default Header;
