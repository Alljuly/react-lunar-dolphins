// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import SubmitButton from "../form/SubmitButton";
import styles from "./Card.module.css";

function Card({ name, date, typeId, uuid }) {
  return (
    <div className={styles.cardContent}>
      <div className={styles.rows}>
        <div className={styles.typeId}></div>
        <div className={styles.cols}>
          <h3>{name}</h3>
          <p>{typeId}</p>
        </div>
      </div>
      <div>
        <Link to={`/details/${uuid}`}>
          <SubmitButton text="ver detalhes" type="button" />
        </Link>

        <p>{date}</p>
      </div>
    </div>
  );
}

export default Card;
