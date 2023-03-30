import { useState, useEffect } from 'react';
import convertCurrency from '../tools/convertCurrency';

const useCalculate = (startCurrency, endCurrency, currencyRate) => {
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);

  useEffect(() => {
    setExchangeRate(convertCurrency(startCurrency, endCurrency, currencyRate));
  }, [startCurrency, endCurrency, currencyRate]);

  const [startAmount, endAmount] = amountInStartCurrency
    ? [amount, parseFloat(amount * exchangeRate).toFixed(2)]
    : [parseFloat(amount / exchangeRate).toFixed(2), amount];

  const setRate = (event, isRate) => {
    setAmount(event.target.value);
    setAmountInStartCurrency(isRate);
  };

  return { startAmount, endAmount, setRate };
};
export default useCalculate;
