import './styles.scss';

function HeaderComponent({ currency }) {
  const { EUR, USD } = currency;

  return (
    <header>
      <div>1 USD = {USD} UAH </div>
      <div>1 EUR = {EUR} UAH </div>
    </header>
  );
}

export default HeaderComponent;
