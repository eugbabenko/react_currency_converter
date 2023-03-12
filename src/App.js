import './App.css';
import HeaderComponent from './components/HeaderComponent';
import answer from './testAPIanswer';

function App() {
  return (
    <>
      <HeaderComponent currency={answer} />
    </>
  );
}

export default App;
