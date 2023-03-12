import './styles.scss';

const HeaderComponent = ({ currency }) => {
  const { EUR, USD, PLN } = currency.rates;
  return (
    <header>
      <div>1 USD = {USD} UAH </div>
      <div>1 EUR = {EUR} UAH </div>
      <div>1 PLN = {PLN} UAH </div>
    </header>
  );
};

export default HeaderComponent;
