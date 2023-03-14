import './styles.scss';

function HeaderComponent({ currency }) {
  const currencyRates = Object.fromEntries(
    currency.map(({ type, rate }) => [type, rate])
  );

  return (
    <header>
      <div>
        <span className="fi fi-us" /> 1 USD = {currencyRates.USD} UAH
      </div>
      <div>
        <span className="fi fi-eu" /> 1 EUR = {currencyRates.EUR} UAH
      </div>
    </header>
  );
}

export default HeaderComponent;
