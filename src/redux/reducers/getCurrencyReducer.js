import { GET_CURRENCY_REDUCER } from '../../constants';

const initialStateCurrencyRate = {
  currencyRate: [],
  isLoading: false,
  error: null,
};

const getCurrencyReducer = (state = initialStateCurrencyRate, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENCY_REDUCER.FETCH_CURRENCY_RATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CURRENCY_REDUCER.FETCH_CURRENCY_RATE_SUCCESS:
      return {
        ...state,
        currencyRate: payload,
        isLoading: false,
        error: null,
      };
    case GET_CURRENCY_REDUCER.FETCH_CURRENCY_RATE_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getCurrencyReducer;
