import './styles.scss';

function HeaderComponent({ currency }) {
  const currencyRates = Object.fromEntries(
    currency.map(({ type, rate }) => [type, rate])
  );

  return (
    <header>
      <div>1 USD = {currencyRates.USD} UAH </div>
      <div>1 EUR = {currencyRates.EUR} UAH </div>
    </header>
  );
}

export default HeaderComponent;
