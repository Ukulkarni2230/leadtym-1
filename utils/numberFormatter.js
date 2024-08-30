// utils/numberFormatter.js
export const formatNumber = (number) => {
  number = +number;

  if (isNaN(number)) {
    return "0";
  }

  if (number < 1000) {
    return Math.floor(number) !== number
      ? parseFloat(number.toFixed(1)).toString()
      : number.toString();
  }

  let divisor, suffix;

  if (number >= 1000 && number < 10000) {
    return parseFloat(number.toFixed(1)).toString();
  } else if (number >= 10000 && number < 1000000) {
    divisor = 1000;
    suffix = "K";
  } else if (number >= 1000000 && number < 1000000000) {
    divisor = 1000000;
    suffix = "M";
  } else if (number >= 1000000000 && number < 1000000000000) {
    divisor = 1000000000;
    suffix = "B";
  } else if (number >= 1000000000000) {
    divisor = 1000000000000;
    suffix = "T";
  }

  const formattedNumber = number / divisor;
  const roundedFormattedNumber = Math.floor(formattedNumber * 100) / 100;
  return `${roundedFormattedNumber}${suffix}`;
};
