import { useEffect, useState } from "react";

import styles from "./Planners.module.css";

import Card from "../cards/Card";
import SideBar from "../cards/SideBar";
import Search from "../cards/Search";

function Planner() {
  const [planner, setPlanner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/project", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPlanner(data);
      });
  }, []);

  return (
    <main className={styles.contentPage}>
      <div className={styles.content}>
        <SideBar />
        <div className={styles.cardList}>
          <Search />
          {planner.map((p) => (
            <Card
              name={p.name}
              date="28-08-2023"
              category={p.typeId}
              typeId={p.typeId}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Planner;
