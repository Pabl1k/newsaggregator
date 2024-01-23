import { FC } from "react";
import "./DateSelector.scss";
import { DateFormat } from "../../api/types/general.ts";

interface DateRange {
  from?: DateFormat;
  to?: DateFormat;
}

interface Props {
  dateRange: DateRange;
  onFromChange: (from: DateFormat) => void;
  onToChange: (to: DateFormat) => void;
}

const DateSelector: FC<Props> = ({ dateRange, onFromChange, onToChange }) => {
  return (
    <div className="date-selector">
      <div className="date-selector__container">
        <span>From</span>
        <input
          type="date"
          className="date-selector__from"
          value={dateRange.from}
          onChange={(e) => onFromChange(e.currentTarget.value as DateFormat)}
        />
      </div>
      <div className="date-selector__container">
        <span>To</span>
        <input
          type="date"
          className="date-selector__to"
          value={dateRange.to}
          onChange={(e) => onToChange(e.currentTarget.value as DateFormat)}
        />
      </div>
    </div>
  );
};

export default DateSelector;
