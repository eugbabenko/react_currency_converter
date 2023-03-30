function ReverseButton({ onClickHandle }) {
  return (
    <button type="submit" onClick={onClickHandle}>
      <img
        src={`${process.env.PUBLIC_URL}/image/switch.png`}
        alt="switch"
        style={{ height: 25 }}
      />
    </button>
  );
}

export default ReverseButton;
