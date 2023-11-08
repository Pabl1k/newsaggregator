import { FC, KeyboardEvent } from "react";
import "./Input.scss";

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  onSearch: (search: string | null) => void;
}

const Input: FC<Props> = ({ value, onChange, onSearch }) => {
  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(e.currentTarget.value);
    }
  };

  const onClear = () => {
    onSearch(null);
  };

  return (
    <div className="input">
      <input
        type="text"
        value={value ?? ""}
        placeholder="Search by keywords"
        onChange={(e) => onChange(e.currentTarget.value)}
        onKeyPress={onEnterPress}
      />
      <button onClick={onClear}>Clear</button>
      <button onClick={() => onSearch(value)}>Search</button>
    </div>
  );
};

export default Input;
