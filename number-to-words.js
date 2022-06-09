// Number to words

const call = ["hundred", "thausand"];
const units = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seeven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const numberToWords = (n) => {
  if (n < 19) {
    return units[n];
  }

  if (n < 100) {
    const getDigitTens = n % 10;
    const getDevideTens = n / 10 - 2;
    const xUnit = units[getDigitTens];
    return `${tens[parseInt(getDevideTens)]} ${getDigitTens > 0 ? xUnit : ""}`;
  }

  if (n < 1000) {
    const getDigitTens = n % 100;
    const getDevideTens = n / 100;
    const getCall = call[0];
    const xUnit = units[parseInt(getDevideTens)];
    if (getDigitTens === 0) {
      return `${xUnit} ${getCall}`;
    }
    return `${xUnit} ${getCall} and ${numberToWords(getDigitTens)}`;
  }

  if (n < 10000) {
    const getDigitTens = n % 1000;
    const getDevideTens = n / 1000;
    const getCall = call[1];
    const xUnit = units[parseInt(getDevideTens)];
    if (getDigitTens === 0) {
      return `${xUnit} ${getCall}`;
    }
    return `${xUnit} ${getCall} and ${numberToWords(getDigitTens).replace(
      "and",
      ""
    )}`;
  }

  return "Too Much";
};
const n = 75;
// Twenet one
console.log(numberToWords(n));
