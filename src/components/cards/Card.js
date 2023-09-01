// import { useNavigate } from "react-router-dom";
import SubmitButton from "../form/SubmitButton";
import styles from "./Card.module.css";

function Card({ name, date, typeId, handleClick, uuid }) {
  //const navigate = useNavigate()

  function handleDetails(e) {
    handleClick(uuid);
  }

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
        <SubmitButton
          handleOnClick={handleDetails}
          text="ver detalhes"
          type="button"
        />
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Card;
