/*
Algorithm to calculate a leap year:
Every year that is exactly divisible by four is a leap year,
except for years that are exactly divisible by 100,
but these centurial years are leap years,
if they are exactly divisible by 400.
For example 2000 is a leap year, 2023 is not.
*/

const checkLeapYear = function (year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

const num = +prompt('Enter the year to check if it is a leap');

if (checkLeapYear(num)) {
  alert(`The year of ${num} is a leap year`);
} else {
  alert(`The year of ${num} is not a leap year`);
}
