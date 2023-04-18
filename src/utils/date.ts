import dayjs from "dayjs";

export const getYear = (date: string) => {
  const year = String(dayjs(date).get("year"));

  return year;
};
