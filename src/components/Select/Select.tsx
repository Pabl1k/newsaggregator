import { FC } from "react";
import { IdName } from "../../api/types/general.ts";
import "./Select.scss";

interface Props {
  title: string;
  value?: string;
  options: IdName[];
  onSelect: (option?: string) => void;
}

const Select: FC<Props> = ({ title, value, options, onSelect }) => {
  const optionsWithAll = [{ id: "all", name: "All" }, ...options];

  const handleSelect = (value: string) => {
    if (value === "all") {
      onSelect(undefined);
      return;
    }

    onSelect(value);
  };

  return (
    <div className="select">
      <span>{title}</span>
      <select
        value={value ?? "All"}
        onChange={(e) => handleSelect(e.currentTarget.value)}
      >
        {optionsWithAll.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
