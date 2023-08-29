import { Link } from "react-router-dom";

import style from "./LinkButton.module.css";

function LinkButton(props) {
  return (
    <Link to={props.to}>
      <button className={`${style.defaultButton} ${style[props.customClass]}`}>
        {props.text}
      </button>
    </Link>
  );
}

export default LinkButton;
