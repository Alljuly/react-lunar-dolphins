import SubmitButton from "../form/SubmitButton";
import styles from "./Card.module.css";

function Card({ name, date, category, typeId }) {
  return (
    <div className={styles.cardContent}>
      <div className={styles.rows}>
        <div className={styles.typeId}></div>
        <div className={styles.cols}>
          <h3>{name}</h3>
          {console.log(name, date, category, typeId)}
          <p>{typeId}</p>
        </div>
      </div>
      <div>
        <SubmitButton text="ver detalhes" />
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Card;
