"use strict";
const regex = /^\d+$/;

export const dateCheck = {
  dateDay: (day) => day > 0 && day < 32,
  dateMonth: (month) => month > 0 && month < 13,
  dateYear: (year) => year > 0,

  valDay: (day) => regex.test(day),
  valMonth: (month) => regex.test(month),
  valYear: (year) => regex.test(year),
};

export function condition(day, month, year, currentDate, selectedDate) {
  return dateCheck.dateDay(day) &&
    dateCheck.dateMonth(month) &&
    dateCheck.dateYear(year) &&
    dateCheck.valDay(day) &&
    dateCheck.valMonth(month) &&
    dateCheck.valYear(year) &&
    selectedDate > currentDate
};
