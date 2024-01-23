import { FC, KeyboardEvent, useState } from "react";
import "./KeywordInput.scss";

interface Props {
  onSearch: (search: string | null) => void;
}

const KeywordInput: FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState<string | null>(null);

  const handleSearch = () => {
    if (!value) {
      return;
    }

    onSearch(value.trim());
  };

  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onClear = () => {
    setValue(null);
    handleSearch();
  };

  return (
    <div className="keyword-input">
      <input
        type="text"
        value={value ?? ""}
        placeholder="Search by keywords"
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={onEnterPress}
      />
      <button onClick={onClear}>Clear</button>
      <button className="keyword-input__search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default KeywordInput;
