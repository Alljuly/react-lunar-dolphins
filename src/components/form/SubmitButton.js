function SubmitButton({ to, text }) {
  return (
    <>
      <button to={to} type="submit">
        {text}
      </button>
    </>
  );
}

export default SubmitButton;
