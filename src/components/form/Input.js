import style from "./Input.module.css";

function Input({ type, name, text, placeholder, handleOnChange, value }) {
  return (
    <>
      <label htmlFor={name} className={style.labelField}>
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={style.inputField}
        onChange={handleOnChange}
        value={value}
        // required
      />
    </>
  );
}

export default Input;
