import { FC } from "react";
import { Language } from "../../api/types/general.ts";
import "./Select.scss";

interface Props {
  title: string;
  value?: Language;
  onSelect: (value: Language) => void;
}

interface Option {
  value: Language;
  label: string;
}

const options: Option[] = [
  { value: "ar", label: "العربية" },
  { value: "de", label: "Deutsch" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "he", label: "עברית" },
  { value: "it", label: "Italiano" },
  { value: "nl", label: "Nederlands" },
  { value: "no", label: "Norsk" },
  { value: "pt", label: "Português" },
  { value: "ru", label: "Русский" },
  { value: "sv", label: "Svenska" },
  { value: "ud", label: "اردو" },
  { value: "zh", label: "中文" }
];

const LanguageSelect: FC<Props> = ({ title, value, onSelect }) => {
  return (
    <div className="select">
      <span>{title}</span>
      <select
        value={value ?? "English"}
        onChange={(e) => onSelect(e.target.value as Language)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
