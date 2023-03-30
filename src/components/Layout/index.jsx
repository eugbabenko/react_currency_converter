function Layout({ children }) {
  const actualDate = new Date().toLocaleString().split(',')[0];

  return (
    <>
      <main>
        <h1>Currency Converter</h1>
        <p className="text-exchange-rates">
          (exchange rates according of the National Bank of Ukraine)
        </p>
        <h2>Test Task</h2>
        <div className="currency-components">{children}</div>
      </main>
      <footer>
        <p>Date: {actualDate}</p>
      </footer>
    </>
  );
}

export default Layout;
