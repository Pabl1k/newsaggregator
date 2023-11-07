import { FC, useState } from "react";
import "./Input.scss";

interface Props {
  onSearch: (search: string) => void;
}

const Input: FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };
  const onClear = () => {
    setValue("");
    onSearch("");
  };
  return (
    <div className="input">
      <input
        type="text"
        value={value}
        placeholder="Search by keywords"
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={onEnterPress}
      />
      <button onClick={onClear}>Clear</button>
      <button onClick={() => onSearch(value)}>Search</button>
    </div>
  );
};

export default Input;
