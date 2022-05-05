import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../../../reducers/actionCreators/actionCreators";
import style from "./addForm.module.css";

function AddForm() {
  const [nameState, setNameState] = useState("");
  const [numberState, setNumberState] = useState("");
  let dispatch = useDispatch();
  const addContact = () => {
    return () => {
      dispatch(addItem({ id: uuidv4(), name: nameState, number: numberState }))
    };
  };
  return (
    <div className={style.addContactBlock}>
      <input
        onChange={(e) => setNameState(e.target.value)}
        className={style.addInput}
        placeholder="Введите имя"
        type="text"
        value={nameState}
      />
      <input
        onChange={(e) => setNumberState(e.target.value)}
        className={style.addInput}
        placeholder="Введите номер"
        type="text"
        value={numberState}
      />
      <button
        type="button"
        onClick={dispatch(addContact)}
        className={style.addBtn}
      >
        Добавить контакт
      </button>
    </div>
  );
}

export default AddForm;
