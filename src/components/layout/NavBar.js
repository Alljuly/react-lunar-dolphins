import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

import { GoPin } from "react-icons/go";

import catLogo from "../../img/favicon.ico.png";

import Container from "./Container";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Container>
        <Link to="/">
          <img src={catLogo} alt="catLogo" width={100} />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Company</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link to="/NewPlan">
              <GoPin className={styles.goPin} />
              New Plan
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
