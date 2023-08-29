import { useNavigate } from "react-router-dom";
import PlannerForm from "../form/Form";

import style from "./NewPlan.module.css";

function NewPlan() {
  const navigate = useNavigate();

  function createPlann(planner) {
    planner.cost = 0;
    planner.services = [];

    fetch("http://localhost:5000/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planner),
    })
      .then((resp) => resp.json)
      .then((data) => {
        navigate("/company");
      });
  }
  return (
    <>
      <main className={style.contentPage}>
        <h1>Adicione uma nova tarefa</h1>
        <PlannerForm handleSubmit={createPlann} />
      </main>
    </>
  );
}

export default NewPlan;
