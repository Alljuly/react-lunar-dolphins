import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}>
          <AiFillInstagram className={styles.iconFooter} />
        </li>
        <li className={styles.item}>
          <Link to="https://github.com/Alljuly">
            <FaGithub className={styles.iconFooter} />
          </Link>
        </li>
      </ul>

      <span className={styles.currentDate}>&copy; 2023</span>
    </footer>
  );
}

export default Footer;
