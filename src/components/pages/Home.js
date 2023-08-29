import Planning from "../../img/undraw_projections_re_ulc6.svg";
import styles from "./Home.module.css";

import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <main className={styles.content}>
      <section className={styles.homePage}>
        <div className={styles.welcomeText}>
          <div>
            <h1>
              Bem-vindo ao <span className={styles.spanTitle}>Planner</span>
            </h1>
            <p>Tenha mais tempo para você ao manter tudo organzizado.</p>
          </div>

          <div className={styles.contentText}>
            <ul>
              <li>
                <p>Não perca seus prazos no trabalho</p>
              </li>
              <li>
                <p>Tire um tempo para você</p>
              </li>
              <li>
                <p>E tudo o que você precisar, sem perder o controle</p>
              </li>
            </ul>
          </div>
          <div className={styles.homeButton}>
            <LinkButton
              to="/"
              text="Ver suas atividades"
              customClass="left-button"
            />
            <LinkButton
              to="/NewPlan"
              text="Criar nova atividade"
              customClass="right-button"
            />
          </div>
        </div>
        <figure>
          <img className={styles.planningImg} src={Planning} alt="Planning" />
        </figure>
      </section>
    </main>
  );
}

export default Home;
