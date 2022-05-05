import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { checker } from "../../checker";
import idGenerator from "../../idGenerator";
import fetchUsers from "../fetch";
import style from "./login.module.css";
import Button from "../../common/Button/Button";
import { logInFailed, logInSuccessful } from "../../reducers/actionCreators/actionCreators";

export default function Login() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch((dispatch)=> {return fetchUsers(dispatch)});
  }, []);
  const auth = useSelector((state) => state.login.isLogged);
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  function logIn(e) {
    e.preventDefault();
    return () => {
      fetch(`http://localhost:3001/users?login=${loginState}&password=${passwordState}`)
        .then(res=>res.json())
        .then(res=> checker(res))
    }
  }

  function checker(result) {
    if(result.length!==0) {
      localStorage.setItem('loggedIn', true)
      dispatch(logInSuccessful({login: loginState, pasword: passwordState, isLogged: false }))
    } else {
      dispatch(logInFailed())
    }
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
          <Button type='submit' onClick={(e) => dispatch(logIn(e))}>Войти</Button>
        </form>
      </div>
    </div>
  );
}
