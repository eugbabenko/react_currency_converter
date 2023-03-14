const convertCurrency = (fromCurrency, toCurrency, ratesList) => {
  const findCurrency = (currency, list) =>
    list.find(({ type }) => type === currency)?.rate;

  const fromRate = findCurrency(fromCurrency, ratesList);
  const toRate = findCurrency(toCurrency, ratesList);
  const value = 1 / (toRate / fromRate);
  return value;
};

export default convertCurrency;
