import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <ul>
        <li>como concluidas</li>
        <li>pendentes</li>
        <li>por tipo</li>
        <li>etc</li>
      </ul>
    </div>
  );
}

export default SideBar;
