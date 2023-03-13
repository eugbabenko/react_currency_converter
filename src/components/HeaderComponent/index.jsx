import './styles.scss';

function HeaderComponent({ currency }) {
  const [ EUR, USD ] = currency;
 
  return (
    <header>
      <div>1 USD = {USD.buy} UAH </div>
      <div>1 EUR = {EUR.buy} UAH </div>
    </header>
  );
}

export default HeaderComponent;
