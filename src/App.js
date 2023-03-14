import { useEffect, useState, useCallback } from 'react';

import './App.scss';

import CurrencyComponent from './components/CurrencyComponent';
import HeaderComponent from './components/HeaderComponent';

import { getCurrentCurrencyRate, BASE_URL } from './API';
import convertCurrency from './convertFunction';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [startCurrency, setStartCurrency] = useState();
  const [currencyRate, setCurrencyRate] = useState([]);
  const [endCurrency, setEndCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCurrentCurrencyRate(BASE_URL)
      .then((response) => {
        const updatedCurrencyRate = response.reduce(
          (acc, curr) => {
            if (!curr.cc.startsWith('X')) {
              acc.push({ type: curr.cc, rate: curr.rate, name: curr.txt });
            }
            return acc;
          },
          [{ type: 'UAH', rate: 1, name: 'Українська гривня' }]
        );
        setCurrencyRate(updatedCurrencyRate);
        setStartCurrency(updatedCurrencyRate[0].type);
        setEndCurrency(
          updatedCurrencyRate.find((currency) => currency.type === 'USD').type
        );
        setIsLoading(false);
      })
      .catch((error) => {
        alert('Error fetching currency rates:', error);
      });
  }, []);

  useEffect(() => {
    setExchangeRate(convertCurrency(startCurrency, endCurrency, currencyRate));
  }, [startCurrency, endCurrency]);

  const [startAmount, endAmount] = amountInStartCurrency
    ? [amount, parseFloat(amount * exchangeRate).toFixed(2)]
    : [parseFloat(amount / exchangeRate).toFixed(2), amount];

  const handleStartAmountChange = useCallback((e) => {
    setAmount(e.target.value);
    setAmountInStartCurrency(true);
  }, []);

  const handleEndAmountChange = useCallback((e) => {
    setAmount(e.target.value);
    setAmountInStartCurrency(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent currency={currencyRate} />
      <main>
        <h1>Currency Converter</h1>
        <p className="text-exchange-rates">
          (exchange rates according of the National Bank of Ukraine)
        </p>
        <h2>Test Task</h2>
        <div className="currency-components">
          <CurrencyComponent
            selectedCurrency={startCurrency}
            currencyRate={currencyRate}
            onChangeCurrency={(event) => setStartCurrency(event.target.value)}
            amount={startAmount}
            onChangeAmount={handleStartAmountChange}
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
            currencyRate={currencyRate}
            onChangeCurrency={(event) => setEndCurrency(event.target.value)}
            amount={endAmount}
            onChangeAmount={handleEndAmountChange}
          />
        </div>
      </main>
      <footer>
        <p>Date: {new Date().toLocaleString().split(',')[0]}</p>
      </footer>
    </>
  );
}

export default App;
