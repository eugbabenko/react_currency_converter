import { BASE_URL, getCurrentCurrencyRate } from './API';


const fetchCurrencyRate = () => async (dispatch) => {
    dispatch({ type: 'FETCH_CURRENCY_RATE_REQUEST' });
    try {
      const response = await getCurrentCurrencyRate(BASE_URL);
      const updatedCurrencyRate = response.reduce(
        (acc, curr) => {
          if (!curr.cc.startsWith('X')) {
            acc.push({ type: curr.cc, rate: curr.rate, name: curr.txt });
          }
          return acc;
        },
        [{ type: 'UAH', rate: 1, name: 'Українська гривня' }]
      );
      dispatch({
        type: 'FETCH_CURRENCY_RATE_SUCCESS',
        payload: updatedCurrencyRate,
      });
    } catch (error) {
      dispatch({ type: 'FETCH_CURRENCY_RATE_FAILURE', payload: error });
    }
  };

export default fetchCurrencyRate;
