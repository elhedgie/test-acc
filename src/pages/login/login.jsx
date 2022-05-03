import { useMemo, useState } from "react";
import { useStore } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { checker } from "../../checker";
import idGenerator from "../../idGenerator";
import LoginButton from "../loginButton/LoginButton.jsx";
import fetchUsers from "../fetch";
import style from "./login.module.css";
export default function Login() {
  const store = useStore();
  let getState = store.getState();
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(fetchUsers());
  }, []);
  let auth;
  auth = useSelector((state) => state.login.isLogged);
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  function logIn(e) {
    e.preventDefault();
    return () => {
      fetch("http://localhost:3001/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(
          idGenerator({
            login: loginState,
            password: passwordState,
            isLogged: true,
          })
        ),
      })
        .then((res) => res.json())
        .then((res) => checker(res, getState, dispatch))
        .catch(() => dispatch({ type: "AUTH_FAIL"}));
    };
  }
  return auth ? (
    <Navigate to="/profile" />
  ) : (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link className={style.link} to={"/"}>
          Вход
        </Link>
        <Link className={style.link} to={"/profile"}>
          Профиль
        </Link>
      </nav>
      <div className={style.mainBlock}>
        <h1 className={style.headingOne}>Вход</h1>
        <form className={style.form} action="">
          <input
            onChange={(e) => setLoginState(e.target.value)}
            className={style.input}
            value={loginState}
            type="text"
          />
          <input
            onChange={(e) => setPasswordState(e.target.value)}
            className={style.input}
            value={passwordState}
            type="password"
          />
          <LoginButton func={(e) => dispatch(logIn(e))}>Войти</LoginButton>
        </form>
      </div>
    </div>
  );
}
