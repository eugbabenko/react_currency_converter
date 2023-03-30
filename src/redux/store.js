import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import getCurrencyReducer from './reducers/getCurrencyReducer';
import currencySelectionReducer from './reducers/currencySelectionReducer';

const rootReducer = combineReducers({
  currency: getCurrencyReducer,
  currencySelection: currencySelectionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
