const BASE_API_URL =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const getCurrentCurrencyRate = async () => {
  const response = await fetch(BASE_API_URL);
  const data = await response.json();
  return data;
};

export default getCurrentCurrencyRate;
