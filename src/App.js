import { useEffect, useState } from 'react';

import './App.scss';

import CurrencyComponent from './components/CurrencyComponent';
import HeaderComponent from './components/HeaderComponent';

import getCurrentCurrencyRate from './API';
import convertCurrency from './convertFunction';

function App() {
  const [startCurrency, setStartCurrency] = useState();
  const [currencyRate, setCurrencyRate] = useState([]);
  const [currencyType, setCurrencyType] = useState([]);
  const [endCurrency, setEndCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);

  useEffect(() => {
    getCurrentCurrencyRate()
      .then((response) =>
        setCurrencyRate(
          response.reduce(
            (acc, curr) => {
              if (!curr.cc.startsWith('X')) {
                return { ...acc, [curr.cc]: curr.rate };
              }
              return acc;
            },
            { UAH: 1 }
          )
        )
      )
      .catch((error) => {
        alert('Error fetching currency rates:', error);
      });
  }, []);

  useEffect(() => {
    const firstCurrencyType = Object.keys(currencyRate);
    setCurrencyType(firstCurrencyType);
    setStartCurrency(firstCurrencyType[0]);
    setEndCurrency(firstCurrencyType[1]);
    setExchangeRate(
      convertCurrency(firstCurrencyType[0], firstCurrencyType[1], currencyRate)
    );
  }, [currencyRate]);

  useEffect(() => {
    setExchangeRate(convertCurrency(startCurrency, endCurrency, currencyRate));
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
      <p className="text-exchange-rates">
        (exchange rates according of the National Bank of Ukraine)
      </p>
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
      <p>Date: {new Date().toLocaleString().split(',')[0]}</p>
    </main>
  );
}

export default App;
