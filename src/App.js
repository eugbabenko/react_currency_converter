import { useEffect, useState, useMemo } from 'react';

import './App.scss';

import CurrencyComponent from './components/CurrencyComponent';
import HeaderComponent from './components/HeaderComponent';

import { privat, rates } from './API';

function App() {
  const [startCurrency, setStartCurrency] = useState();
  const [endCurrency, setEndCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);

  const currencyRate = useMemo(() => privat, [])
  const currencyType = useMemo(() => [...Object.keys(rates)], []);

  const convertCurrency = (fromCurrency, toCurrency, ratesList) => {
    const fromRate = ratesList[fromCurrency];
    const toRate = ratesList[toCurrency];
    const value = 1 / (toRate / fromRate);
    return value;
  };

  useEffect(() => {
    setStartCurrency(currencyType[0]);
    setEndCurrency(currencyType[1]);
    setExchangeRate(convertCurrency(startCurrency, endCurrency, rates));
  }, []);

  useEffect(() => {
    setExchangeRate(convertCurrency(startCurrency, endCurrency, rates));
  }, [startCurrency, endCurrency]);
  const [startAmount, endAmount] = amountInStartCurrency
    ? [amount, parseFloat(amount * exchangeRate).toFixed(2)]
    : [parseFloat(amount / exchangeRate).toFixed(2), amount];

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInStartCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInStartCurrency(false);
  };

  return (
    <main>
      <HeaderComponent currency={currencyRate} />
      <h1>Currency Converter</h1>
      <h2>Test Task</h2>
      <div className="currency-components">
        <CurrencyComponent
          selectedCurrency={startCurrency}
          currencyType={currencyType}
          onChangeCurrency={(event) => setStartCurrency(event.target.value)}
          amount={startAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <button
          type="submit"
          onClick={() => {
            setStartCurrency(endCurrency);
            setEndCurrency(startCurrency);
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/image/switch.png`}
            alt="switch"
            style={{ height: 25 }}
          />
        </button>
        <CurrencyComponent
          selectedCurrency={endCurrency}
          currencyType={currencyType}
          onChangeCurrency={(event) => setEndCurrency(event.target.value)}
          amount={endAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
      <p>Date: {new Date().toLocaleString()}</p>
    </main>
  );
}

export default App;
