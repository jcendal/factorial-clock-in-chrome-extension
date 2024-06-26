export type ClockInOptions = {
  month: number;
  year: number;
  intervals: ClockInOptionsInterval[];
  minutes_per_day: number;
};

export type ClockInOptionsInterval = {
  clock_in: string;
  clock_out: string;
};
