import { FC } from "react";
import {
  getInitialSearchDate,
  getTodayDate,
} from "../../global/functions/getInitialDate.ts";
import "./DateSelector.scss";

interface Props {
  onFrom: (from: string) => void;
  onTo: (to: string) => void;
}

const DateSelector: FC<Props> = ({ onFrom, onTo }) => {
  const defaultFromDate = getInitialSearchDate();
  const defaultToDate = getTodayDate();

  const fromHandler = (from: string) => {
    onFrom(from);
  };

  const toHandler = (to: string) => {
    onTo(to);
  };

  return (
    <div className="date-selector">
      <div className="date-selector__container">
        <span>From</span>
        <input
          type="date"
          defaultValue={defaultFromDate}
          onChange={(e) => fromHandler(e.currentTarget.value)}
        />
      </div>
      <div className="date-selector__container">
        <span>To</span>
        <input
          type="date"
          defaultValue={defaultToDate}
          onChange={(e) => toHandler(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default DateSelector;
