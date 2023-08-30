import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

import { GoPin } from "react-icons/go";

import catLogo from "../../img/favicon.ico.png";

import Container from "./Container";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div>
          <Link to="/">
            <img src={catLogo} alt="catLogo" width={100} />
          </Link>
        </div>
        <div>
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
              <Link to="/planners">Projects</Link>
            </li>
            <li className={styles.item}>
              <Link to="/newPlan">
                <GoPin className={styles.goPin} />
                New Plan
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
