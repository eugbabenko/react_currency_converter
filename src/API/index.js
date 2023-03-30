import { BASE_API_URL } from "../constants";

const getCurrentCurrencyRate = async () => {
  const response = await fetch(BASE_API_URL);
  const data = await response.json();
  return data;
};

export default getCurrentCurrencyRate;
