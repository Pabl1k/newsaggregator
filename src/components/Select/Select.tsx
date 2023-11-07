import { FC } from "react";
import "./Select.scss";

interface Props {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Select: FC<Props> = ({ title, options, onSelect }) => {
  const optionsWithAll = ["All", ...options];

  const onChange = (value: string) => {
    if (value === "All") {
      onSelect("");
      return;
    }

    onSelect(value);
  };

  return (
    <div className="select">
      <span>{title}</span>
      <select onChange={(e) => onChange(e.currentTarget.value)}>
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
