function SubmitButton({ handleOnClick, text, type }) {
  return (
    <>
      <button onClick={handleOnClick} type={type}>
        {text}
      </button>
    </>
  );
}

export default SubmitButton;
