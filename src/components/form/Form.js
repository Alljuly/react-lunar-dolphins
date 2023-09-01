import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

import style from "./Form.module.css";
import SubmitButton from "./SubmitButton";

import { useEffect, useState } from "react";

function Form({ handleSubmit, plannerData }) {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [plann, setPlann] = useState(plannerData || {});

  useEffect(() => {
    fetch("http://localhost:5000/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(plann);
  };

  function handleChange(e) {
    setPlann({ ...plann, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setSelectedCategory({
      id: e.target.value,
      name: e.target.innerText,
    });
    setPlann({ ...plann, [e.target.name]: e.target.value });
  }

  /* {
    ...category,
    category: {
      id: e.target.value,
      name: e.target.label,
    },
  }
*/
  return (
    <form onSubmit={submit}>
      <div className={style.formField}>
        <Input
          text="Seu projeto"
          type="text"
          name="name"
          placeholder="Informe o nome do seu projeto"
          handleOnChange={handleChange}
          value={plann.name ? plann.name : ""}
        />
      </div>
      <div className={style.formField}>
        <Input
          text="Orçamento"
          type="number"
          name="budget"
          placeholder="Informe o orçamento caso seja necessário"
          handleOnChange={handleChange}
          value={plann.budget ? plann.budget : ""}
        />
      </div>
      <div className={style.formField}>
        <TextArea
          text="Descrição"
          name="description"
          placeholder="Detalhe o que precisa ser feito"
          handleOnChange={handleChange}
        />
      </div>
      <div className={style.formField}>
        <Select
          name="typeId"
          text="Selecione o tipo da atividade"
          options={category}
          handleOnChange={handleSelect}
          value={
            selectedCategory?.id ?? (plann.category ? plann.category?.id : " ")
          }
          required
        />
      </div>
      <div className={`${style.formField}${style.dateType}`}>
        <Input
          text="Prazo para conclusão"
          type="date"
          name="budget"
          placeholder="Informe o orçamento caso seja necessário"
        />
        {/* <Input
          text="Sem prazo"
          type="radio"
          name="date"
          placeholder="Informe o orçamento caso seja necessário"
        />
        <Input
          text=""
          type="radio"
          name="date"
          placeholder="Informe o orçamento caso seja necessário"
        /> */}
      </div>
      <SubmitButton text="próximo" type="submit" />
    </form>
  );
}

export default Form;
