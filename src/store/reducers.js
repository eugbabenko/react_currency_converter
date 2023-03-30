import { combineReducers } from 'redux';

import {
  CHANGE_END_CURRENCY,
  CHANGE_START_CURRENCY,
  REVERSE_CURRENCY_SELECTION,
  FETCH_CURRENCY_RATE_FAILURE,
  FETCH_CURRENCY_RATE_REQUEST,
  FETCH_CURRENCY_RATE_SUCCESS,
} from './constants';
import { initialStateCurrency, initialStateCurrencyRate } from './initialState';

const currencySelectionReducer = (
  state = initialStateCurrency,
  action = {}
) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_START_CURRENCY:
      return {
        ...state,
        startCurrency: payload,
      };
    case CHANGE_END_CURRENCY:
      return {
        ...state,
        endCurrency: payload,
      };
    case REVERSE_CURRENCY_SELECTION:
      return {
        startCurrency: state.endCurrency,
        endCurrency: state.startCurrency,
      };
    default:
      return state;
  }
};

const getCurrencyReducer = (state = initialStateCurrencyRate, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CURRENCY_RATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CURRENCY_RATE_SUCCESS:
      return {
        ...state,
        currencyRate: payload,
        isLoading: false,
        error: null,
      };
    case FETCH_CURRENCY_RATE_FAILURE:
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

export default rootReducer;
