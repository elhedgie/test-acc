import React from "react";
import style from "./profileButton.module.css";
function ProfileButton(props) {
  return (
    <button onClick={props.func} type="button" className={style.button}>
      {props.children}
    </button>
  );
}

export default ProfileButton;
