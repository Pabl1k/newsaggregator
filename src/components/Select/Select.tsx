import { FC } from "react";
import "./Select.scss";

interface Props {
  title: string;
  value: string | null;
  options: string[];
  onSelect: (option: string | null) => void;
}

const Select: FC<Props> = ({ title, value, options, onSelect }) => {
  const optionsWithAll = ["All", ...options];

  return (
    <div className="select">
      <span>{title}</span>
      <select
        value={value ?? "All"}
        onChange={(e) => onSelect(e.currentTarget.value)}
      >
        {optionsWithAll.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
