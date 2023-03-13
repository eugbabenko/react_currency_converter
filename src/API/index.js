// export const getCurrentCurrencyRate = async () => {
//   const response = await fetch('https://api.monobank.ua/bank/currency');
//   const data = await response.json();
//   return data;
// };

// export const getCurrentCurrencyISOCode = async () => {
//   const response = await fetch(
//     'https://pkgstore.datahub.io/core/currency-codes/codes-all_json/data/029be9faf6547aba93d64384f7444774/codes-all_json.json'
//   );
//   const data = await response.json();
//   return data;
// };

export const rates = {
  UAH: 1,
  EUR: 38.7426,
  USD: 36.5686,
  PLN: 8.2723,
  GBP: 43.8713,
  SEK: 3.4016,
};

export const privat = [
  {
    ccy: 'EUR',
    base_ccy: 'UAH',
    buy: '39.55000',
    sale: '40.55000',
  },
  {
    ccy: 'USD',
    base_ccy: 'UAH',
    buy: '37.95000',
    sale: '38.45000',
  },
];

export const bank = [
  {
    r030: 36,
    txt: 'Австралійський долар',
    rate: 24.1097,
    cc: 'AUD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 124,
    txt: 'Канадський долар',
    rate: 26.4482,
    cc: 'CAD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 156,
    txt: 'Юань Женьміньбі',
    rate: 5.2616,
    cc: 'CNY',
    exchangedate: '13.03.2023',
  },
  {
    r030: 203,
    txt: 'Чеська крона',
    rate: 1.6396,
    cc: 'CZK',
    exchangedate: '13.03.2023',
  },
  {
    r030: 208,
    txt: 'Данська крона',
    rate: 5.2055,
    cc: 'DKK',
    exchangedate: '13.03.2023',
  },
  {
    r030: 344,
    txt: 'Гонконгівський долар',
    rate: 4.6585,
    cc: 'HKD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 348,
    txt: 'Форинт',
    rate: 0.10108,
    cc: 'HUF',
    exchangedate: '13.03.2023',
  },
  {
    r030: 356,
    txt: 'Індійська рупія',
    rate: 0.44571,
    cc: 'INR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 360,
    txt: 'Рупія',
    rate: 0.0023648,
    cc: 'IDR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 376,
    txt: 'Новий ізраїльський шекель',
    rate: 10.167,
    cc: 'ILS',
    exchangedate: '13.03.2023',
  },
  {
    r030: 392,
    txt: 'Єна',
    rate: 0.26756,
    cc: 'JPY',
    exchangedate: '13.03.2023',
  },
  {
    r030: 398,
    txt: 'Теньге',
    rate: 0.080895,
    cc: 'KZT',
    exchangedate: '13.03.2023',
  },
  {
    r030: 410,
    txt: 'Вона',
    rate: 0.027606,
    cc: 'KRW',
    exchangedate: '13.03.2023',
  },
  {
    r030: 484,
    txt: 'Мексиканське песо',
    rate: 1.9868,
    cc: 'MXN',
    exchangedate: '13.03.2023',
  },
  {
    r030: 498,
    txt: 'Молдовський лей',
    rate: 1.9471,
    cc: 'MDL',
    exchangedate: '13.03.2023',
  },
  {
    r030: 554,
    txt: 'Новозеландський долар',
    rate: 22.3928,
    cc: 'NZD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 578,
    txt: 'Норвезька крона',
    rate: 3.4384,
    cc: 'NOK',
    exchangedate: '13.03.2023',
  },
  {
    r030: 643,
    txt: 'Російський рубль',
    rate: 0.48071,
    cc: 'RUB',
    exchangedate: '13.03.2023',
  },
  {
    r030: 702,
    txt: 'Сінгапурський долар',
    rate: 26.9959,
    cc: 'SGD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 710,
    txt: 'Ренд',
    rate: 1.998,
    cc: 'ZAR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 752,
    txt: 'Шведська крона',
    rate: 3.4016,
    cc: 'SEK',
    exchangedate: '13.03.2023',
  },
  {
    r030: 756,
    txt: 'Швейцарський франк',
    rate: 39.4803,
    cc: 'CHF',
    exchangedate: '13.03.2023',
  },
  {
    r030: 818,
    txt: 'Єгипетський фунт',
    rate: 1.1835,
    cc: 'EGP',
    exchangedate: '13.03.2023',
  },
  {
    r030: 826,
    txt: 'Фунт стерлінгів',
    rate: 43.8713,
    cc: 'GBP',
    exchangedate: '13.03.2023',
  },
  {
    r030: 840,
    txt: 'Долар США',
    rate: 36.5686,
    cc: 'USD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 933,
    txt: 'Білоруський рубль',
    rate: 13.2919,
    cc: 'BYN',
    exchangedate: '13.03.2023',
  },
  {
    r030: 944,
    txt: 'Азербайджанський манат',
    rate: 21.5426,
    cc: 'AZN',
    exchangedate: '13.03.2023',
  },
  {
    r030: 946,
    txt: 'Румунський лей',
    rate: 7.8842,
    cc: 'RON',
    exchangedate: '13.03.2023',
  },
  {
    r030: 949,
    txt: 'Турецька ліра',
    rate: 1.9287,
    cc: 'TRY',
    exchangedate: '13.03.2023',
  },
  {
    r030: 960,
    txt: 'СПЗ (спеціальні права запозичення)',
    rate: 48.5541,
    cc: 'XDR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 975,
    txt: 'Болгарський лев',
    rate: 19.8107,
    cc: 'BGN',
    exchangedate: '13.03.2023',
  },
  {
    r030: 978,
    txt: 'Євро',
    rate: 38.7426,
    cc: 'EUR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 985,
    txt: 'Злотий',
    rate: 8.2723,
    cc: 'PLN',
    exchangedate: '13.03.2023',
  },
  {
    r030: 12,
    txt: 'Алжирський динар',
    rate: 0.26723,
    cc: 'DZD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 50,
    txt: 'Така',
    rate: 0.3458,
    cc: 'BDT',
    exchangedate: '13.03.2023',
  },
  {
    r030: 51,
    txt: 'Вірменський драм',
    rate: 0.093925,
    cc: 'AMD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 214,
    txt: 'Домініканське песо',
    rate: 0.66051,
    cc: 'DOP',
    exchangedate: '13.03.2023',
  },
  {
    r030: 364,
    txt: 'Іранський ріал',
    rate: 0.00087068,
    cc: 'IRR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 368,
    txt: 'Іракський динар',
    rate: 0.027915,
    cc: 'IQD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 417,
    txt: 'Сом',
    rate: 0.41831,
    cc: 'KGS',
    exchangedate: '13.03.2023',
  },
  {
    r030: 422,
    txt: 'Ліванський фунт',
    rate: 0.002438,
    cc: 'LBP',
    exchangedate: '13.03.2023',
  },
  {
    r030: 434,
    txt: 'Лівійський динар',
    rate: 7.5589,
    cc: 'LYD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 458,
    txt: 'Малайзійський ринггіт',
    rate: 8.1499,
    cc: 'MYR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 504,
    txt: 'Марокканський дирхам',
    rate: 3.5203,
    cc: 'MAD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 586,
    txt: 'Пакистанська рупія',
    rate: 0.13997,
    cc: 'PKR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 682,
    txt: 'Саудівський ріял',
    rate: 9.7441,
    cc: 'SAR',
    exchangedate: '13.03.2023',
  },
  {
    r030: 704,
    txt: 'Донг',
    rate: 0.0015371,
    cc: 'VND',
    exchangedate: '13.03.2023',
  },
  {
    r030: 764,
    txt: 'Бат',
    rate: 1.03433,
    cc: 'THB',
    exchangedate: '13.03.2023',
  },
  {
    r030: 784,
    txt: 'Дирхам ОАЕ',
    rate: 9.9563,
    cc: 'AED',
    exchangedate: '13.03.2023',
  },
  {
    r030: 788,
    txt: 'Туніський динар',
    rate: 11.6409,
    cc: 'TND',
    exchangedate: '13.03.2023',
  },
  {
    r030: 860,
    txt: 'Узбецький сум',
    rate: 0.0032259,
    cc: 'UZS',
    exchangedate: '13.03.2023',
  },
  {
    r030: 901,
    txt: 'Новий тайванський долар',
    rate: 1.19701,
    cc: 'TWD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 934,
    txt: 'Туркменський новий манат',
    rate: 10.4482,
    cc: 'TMT',
    exchangedate: '13.03.2023',
  },
  {
    r030: 941,
    txt: 'Сербський динар',
    rate: 0.33086,
    cc: 'RSD',
    exchangedate: '13.03.2023',
  },
  {
    r030: 972,
    txt: 'Сомоні',
    rate: 3.35,
    cc: 'TJS',
    exchangedate: '13.03.2023',
  },
  {
    r030: 981,
    txt: 'Ларі',
    rate: 13.9965,
    cc: 'GEL',
    exchangedate: '13.03.2023',
  },
  {
    r030: 986,
    txt: 'Бразильський реал',
    rate: 7.03,
    cc: 'BRL',
    exchangedate: '13.03.2023',
  },
  {
    r030: 959,
    txt: 'Золото',
    rate: 67168.11,
    cc: 'XAU',
    exchangedate: '13.03.2023',
  },
  {
    r030: 961,
    txt: 'Срібло',
    rate: 736.23,
    cc: 'XAG',
    exchangedate: '13.03.2023',
  },
  {
    r030: 962,
    txt: 'Платина',
    rate: 34458.96,
    cc: 'XPT',
    exchangedate: '13.03.2023',
  },
  {
    r030: 964,
    txt: 'Паладій',
    rate: 50827.43,
    cc: 'XPD',
    exchangedate: '13.03.2023',
  },
];
