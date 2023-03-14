import { useMemo } from 'react';

import './styles.scss';

function CurrencyComponent(props) {
  const {
    currencyRate,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div className="currency-component">
      <p className="currency-name">
        {useMemo(
          () =>
            currencyRate.find(({ type }) => type === selectedCurrency)?.name,
          [selectedCurrency]
        )}
      </p>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyRate.map(({ type }) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input type="number" value={amount} onChange={onChangeAmount} />
    </div>
  );
}

export default CurrencyComponent;
