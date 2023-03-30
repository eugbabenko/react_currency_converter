function Error({error}) {
  return (
    <div className="loader">
      <p>
        Something wrong with server, please update your page or connect with
        support
      </p>
      <p style={{ color: 'red' }}>{error.toString()}</p>
    </div>
  );
}

export default Error;
