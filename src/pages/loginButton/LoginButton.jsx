import React from "react";
import style from "./loginButton.module.css";
function LoginButton(props) {
  return (
    <button onClick={props.func} type="submit" className={style.button}>
      {props.children}
    </button>
  );
}

export default LoginButton;
