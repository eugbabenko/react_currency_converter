import { useEffect, useState } from 'react';
import './App.scss';
import CurrencyComponent from './components/CurrencyComponent';
import HeaderComponent from './components/HeaderComponent';
import {
  getCurrentCurrencyRate,
  getCurrentCurrencyISOCode,
  privat,
} from './API';

const App = () => {
  const [currencyRate, setCurrencyRate] = useState(privat);
  const rates = {
    UAH: 1,
    EUR: 38.7426,
    USD: 36.5686,
    PLN: 8.2723,
    GBP: 43.8713,
    SEK: 3.4016,
  };
  const [currencyType, setCurrencyType] = useState([...Object.keys(rates)]);
  const [startCurrency, setStartCurrency] = useState();
  const [endCurrency, setEndCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);

  const [startAmount, endAmount] = amountInStartCurrency
    ? [amount, parseFloat(amount * exchangeRate).toFixed(5)]
    : [parseFloat(amount / exchangeRate).toFixed(5), amount];

  const convertCurrency = (fromCurrency, toCurrency, rates) => {
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    const value = 1 / (toRate / fromRate);
    return value;
  };

  useEffect(() => {
    const firstCurrency = currencyType[0];
    setStartCurrency(firstCurrency);
    setEndCurrency(currencyType[1]);
    setExchangeRate(convertCurrency(startCurrency, endCurrency, rates));
  }, []);

  useEffect(() => {
    setExchangeRate(convertCurrency(startCurrency, endCurrency, rates));
  }, [startCurrency, endCurrency]);

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
      <div className='currency-components'>
        <CurrencyComponent
          selectedCurrency={startCurrency}
          currencyType={currencyType}
          onChangeCurrency={(event) => setStartCurrency(event.target.value)}
          amount={startAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <button
          onClick={() => {
            setStartCurrency(endCurrency);
            setEndCurrency(startCurrency);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/image/switch.png'}
            alt='switch'
            style={{height: 25}}
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
};

export default App;
