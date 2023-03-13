import './styles.scss';

const CurrencyComponent = (props) => {
  const {
    currencyType,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div className='currency-component'>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyType.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input type='numeric' value={amount} onChange={onChangeAmount} />
    </div>
  );
};

export default CurrencyComponent;
