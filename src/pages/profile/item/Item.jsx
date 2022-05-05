import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../../reducers/index.js";
import EditForm from "../editForm/EditForm.jsx";
import Button from "../../../common/Button/Button.jsx";
import style from "./item.module.css";
import { deleteItem } from "../../../reducers/actionCreators/actionCreators.js";

function Item(props) {
  const [visibility, setVisibility] = useState(false);
  const [editName, setEditName] = useState({ name: props.item.name });

  const [editNumber, setEditNumber] = useState({ number: props.item.number });
  let dispatch = useDispatch();
  const editFunc = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
  };
  const deleteFunc = (e) => {
    e.preventDefault();
    return () => {
      let res = store
        .getState()
        .items.filter((item) => item.id !== props.item.id);
      dispatch(deleteItem(res));
    };
  };
  return (
    <li>
      <EditForm
        editNumber={editNumber}
        setEditNumber={setEditNumber}
        editName={editName}
        setEditName={setEditName}
        setVisibility={setVisibility}
        visibility={visibility}
      ></EditForm>
      <div className={style.itemBlock}>
        <div className={style.infoBlock}>
          <h2>
            {props.item.name === editName.name
              ? props.item.name
              : editName.name}
          </h2>
          <span>
            {props.item.number === editNumber.number
              ? props.item.number
              : editNumber.number}
          </span>
        </div>
        <div className={style.buttonBlock}>
          <Button type='button' onClick={(e) => editFunc(e)}>Редактировать</Button>
          <Button type='button' onclick={(e) => dispatch(deleteFunc(e))}>
            Удалить
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Item;
