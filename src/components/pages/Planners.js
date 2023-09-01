import { useEffect, useState } from "react";

import styles from "./Planners.module.css";

import Card from "../cards/Card";
import SideBar from "../cards/SideBar";
import Search from "../cards/Search";
import { useNavigate } from "react-router-dom";

function Planner() {
  const [planner, setPlanner] = useState([]);
  const navigate = useNavigate();

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

  function handleClick(uuid) {
    console.log("id: ", uuid);
    navigate("/details");
  }

  return (
    <main className={styles.contentPage}>
      <div className={styles.content}>
        <SideBar />
        <div className={styles.cardList}>
          <Search />
          {planner.map((p) => (
            <Card
              key={p.id}
              name={p.name}
              date="28-08-2023"
              typeId={p.typeId}
              uuid={p.id}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Planner;
