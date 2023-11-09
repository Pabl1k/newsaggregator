export interface IdName<T = string> {
  id: T;
  name: string;
}

export interface RequestParams {
  fromDate: string;
  toDate: string;
}

export interface DateRange {
  from: string;
  to: string;
}

export interface Filters {
  keyword: string | null;
  dateRange: DateRange;
  category: string | null;
  source: string | null;
}
