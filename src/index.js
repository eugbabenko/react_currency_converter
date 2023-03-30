import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.scss';

const initialState = {
  currencyRate: [],
  isLoading: false,
  error: null,
};

const initialStateCurrency = {
  startCurrency: 'UAH',
  endCurrency: 'USD',
};

const currencySelectionReducer = (
  state = initialStateCurrency,
  action = {}
) => {
  const { payload, type } = action;
  switch (type) {
    case 'CHANGE_START_CURRENCY':
      return {
        ...state,
        startCurrency: payload,
      };
    case 'CHANGE_END_CURRENCY':
      return {
        ...state,
        endCurrency: payload,
      };
    default:
      return state;
  }
};

const getCurrencyReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_CURRENCY_RATE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_CURRENCY_RATE_SUCCESS':
      return {
        ...state,
        currencyRate: payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_CURRENCY_RATE_FAILURE':
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currency: getCurrencyReducer,
  currencySelection: currencySelectionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
