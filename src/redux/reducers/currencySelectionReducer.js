import { CURRENCY_SELECTION_REDUCER } from '../../constants';

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
    case CURRENCY_SELECTION_REDUCER.CHANGE_START_CURRENCY:
      return {
        ...state,
        startCurrency: payload,
      };
    case CURRENCY_SELECTION_REDUCER.CHANGE_END_CURRENCY:
      return {
        ...state,
        endCurrency: payload,
      };
    case CURRENCY_SELECTION_REDUCER.REVERSE_CURRENCY_SELECTION:
      return {
        startCurrency: state.endCurrency,
        endCurrency: state.startCurrency,
      };
    default:
      return state;
  }
};

export default currencySelectionReducer;
