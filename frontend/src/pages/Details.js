import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/project/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Erro na requisição");
        }
        return resp.json();
      })
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, [id]);

  return (
    <>
      <h1>construir a pagina</h1>

      <div>
        <p>{details.name}</p>
        <p>{details.description}</p>
        <p>{details.budget}</p>
      </div>
    </>
  );
}

export default Details;
