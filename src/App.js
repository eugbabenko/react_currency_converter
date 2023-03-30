import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import CurrencyComponent from './components/Currency';
import HeaderComponent from './components/Header';
import Error from './components/Error';
import ReverseButton from './components/ReverseButton';

import fetchCurrencyRate from './store/actions';
import { CHANGE_END_CURRENCY, CHANGE_START_CURRENCY, REVERSE_CURRENCY_SELECTION } from './store/constants';

const convertCurrency = (fromCurrency, toCurrency, ratesList) => {
  const findCurrency = (currency, list) =>
    list.find(({ type }) => type === currency)?.rate;

  const fromRate = findCurrency(fromCurrency, ratesList);
  const toRate = findCurrency(toCurrency, ratesList);
  const value = 1 / (toRate / fromRate);
  return value;
};

function App() {
  const dispatch = useDispatch();
  const { currencyRate, isLoading, error } = useSelector(
    (state) => state.currency
  );
  const { startCurrency, endCurrency } = useSelector(
    (state) => state.currencySelection
  );
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInStartCurrency, setAmountInStartCurrency] = useState(true);

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
  

  if (error) {
    return <Error error={error} />;
  }

  return isLoading ? (
    <div className="loader">
      <p>Loading</p>
    </div>
  ) : (
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
                type: CHANGE_START_CURRENCY,
                payload: event.target.value,
              })
            }
            amount={startAmount}
            onChangeAmount={handleStartAmountChange}
          />
          <ReverseButton
            onClickHandle={() =>
              dispatch({ type: REVERSE_CURRENCY_SELECTION })
            }
          />
          <CurrencyComponent
            selectedCurrency={endCurrency}
            currencyRate={currencyRate}
            onChangeCurrency={(event) =>
              dispatch({
                type: CHANGE_END_CURRENCY,
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
