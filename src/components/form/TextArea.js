function TextArea({ name, text, placeholder, handleOnChange }) {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <textarea
        name={name}
        id={name}
        rows={3}
        cols={80}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </>
  );
}

export default TextArea;
