const convertCurrency = (fromCurrency, toCurrency, ratesList) => {
  const fromRate = ratesList[fromCurrency];
  const toRate = ratesList[toCurrency];
  const value = 1 / (toRate / fromRate);
  return value;
};

export default convertCurrency;
