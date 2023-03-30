import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import CurrencyComponent from './components/CurrencyComponent';
import HeaderComponent from './components/HeaderComponent';

import fetchCurrencyRate from './actions';
import convertCurrency from './convertFunction';

function App() {
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);
  const dispatch = useDispatch();
  const currencyRate = useSelector((state) => state.currency.currencyRate);
  const startCurrency = useSelector(
    (state) => state.currencySelection.startCurrency
  );
  const endCurrency = useSelector(
    (state) => state.currencySelection.endCurrency
  );
  const isLoading = useSelector((state) => state.currency.isLoading);

  useEffect(() => {
    dispatch(fetchCurrencyRate());
  }, [dispatch]);
  
  useEffect(() => {
    setExchangeRate(convertCurrency(startCurrency, endCurrency, currencyRate));
  }, [startCurrency, endCurrency, currencyRate]);

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
            onChangeCurrency={(event) =>
              dispatch({
                type: 'CHANGE_START_CURRENCY',
                payload: event.target.value,
              })
            }
            amount={startAmount}
            onChangeAmount={handleStartAmountChange}
          />
          <button
            type="submit"
            onClick={() => {
              dispatch({
                type: 'CHANGE_START_CURRENCY',
                payload: endCurrency,
              });
              dispatch({
                type: 'CHANGE_END_CURRENCY',
                payload: startCurrency,
              });
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
            onChangeCurrency={(event) =>
              dispatch({
                type: 'CHANGE_END_CURRENCY',
                payload: event.target.value,
              })
            }
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
