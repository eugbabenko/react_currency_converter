export const BASE_URL =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getCurrentCurrencyRate = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

