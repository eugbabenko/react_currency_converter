import { useMemo } from 'react';

import './styles.scss';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'flag-icons/css/flag-icons.min.css';

function CurrencyComponent(props) {
  const {
    currencyRate,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  const flag = useMemo(
    () => selectedCurrency.slice(0, 2).toLowerCase(),
    [selectedCurrency]
  );

  return (
    <div className="currency-component">
      <p className="currency-name">
        <span className={`fi fi-${flag}`} />{' '}
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
