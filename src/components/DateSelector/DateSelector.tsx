import { FC } from "react";
import { DateRange } from "../../global/Types.ts";
import "./DateSelector.scss";

interface Props {
  dateRange: DateRange;
  onChange: ({ from, to }: DateRange) => void;
}

const DateSelector: FC<Props> = ({ dateRange, onChange }) => {
  const { from, to } = dateRange;

  return (
    <div className="date-selector">
      <div className="date-selector__container">
        <span>From</span>
        <input
          type="date"
          value={from}
          onChange={(e) => onChange({ from: e.target.value, to })}
        />
      </div>
      <div className="date-selector__container">
        <span>To</span>
        <input
          type="date"
          value={to}
          onChange={(e) => onChange({ from, to: e.target.value })}
        />
      </div>
    </div>
  );
};

export default DateSelector;
