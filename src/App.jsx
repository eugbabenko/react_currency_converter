import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import Error from './components/Error';
import Loader from './components/Loader';
import Layout from './components/Layout';
import HeaderComponent from './components/Header';
import CurrencyComponent from './components/Currency';
import ReverseButton from './components/ReverseButton';

import useCalculate from './hooks/useCalculate';

import fetchCurrencyRate from './redux/actions';
import { CURRENCY_SELECTION_REDUCER } from './constants';

function App() {
  const dispatch = useDispatch();
  const { currencyRate, isLoading, error } = useSelector(
    (state) => state.currency
  );
  const { startCurrency, endCurrency } = useSelector(
    (state) => state.currencySelection
  );
  const { startAmount, endAmount, setRate } = useCalculate(
    startCurrency,
    endCurrency,
    currencyRate
  );

  useEffect(() => {
    dispatch(fetchCurrencyRate());
  }, [dispatch]);

  const handleStartAmountChange = useCallback((event) => {
    setRate(event, true);
  }, []);

  const handleEndAmountChange = useCallback((event) => {
    setRate(event, false);
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  return isLoading ? (
    <Loader className="loader" />
  ) : (
    <>
      <HeaderComponent currency={currencyRate} />
      <Layout>
        <CurrencyComponent
          selectedCurrency={startCurrency}
          currencyRate={currencyRate}
          onChangeCurrency={(event) =>
            dispatch({
              type: CURRENCY_SELECTION_REDUCER.CHANGE_START_CURRENCY,
              payload: event.target.value,
            })
          }
          amount={startAmount}
          onChangeAmount={handleStartAmountChange}
        />
        <ReverseButton
          onClickHandle={() =>
            dispatch({
              type: CURRENCY_SELECTION_REDUCER.REVERSE_CURRENCY_SELECTION,
            })
          }
        />
        <CurrencyComponent
          selectedCurrency={endCurrency}
          currencyRate={currencyRate}
          onChangeCurrency={(event) =>
            dispatch({
              type: CURRENCY_SELECTION_REDUCER.CHANGE_END_CURRENCY,
              payload: event.target.value,
            })
          }
          amount={endAmount}
          onChangeAmount={handleEndAmountChange}
        />
      </Layout>
    </>
  );
}

export default App;
