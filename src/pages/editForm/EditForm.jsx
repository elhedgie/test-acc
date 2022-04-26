import React from "react";
import { useState } from "react";
import style from "./editForm.module.css";

function EditForm(props) {
  const editSubmit = () => {
    props.setVisibility(!props.visibility);
  };
  return (
    <div
      className={
        props.visibility
          ? `${style.editBlock} + ' ' + ${style.shown}`
          : style.editBlock
      }
    >
      <input
        className={style.editInput}
        type="text"
        onChange={(e) => props.setEditName({ name: e.target.value })}
        value={props.editName.name}
      />
      <input
        className={style.editInput}
        type="text"
        onChange={(e) => props.setEditNumber({ number: e.target.value })}
        value={props.editNumber.number}
      />
      <button onClick={editSubmit} className={style.editButton}>
        Внести изменения
      </button>
    </div>
  );
}

export default EditForm;
