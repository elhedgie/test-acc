import { Link } from "react-router-dom";
import Button from "../button/button";
import style from "./login.module.css";
export default function Login() {
  return (
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
          <input className={style.input} type="text" />
          <input className={style.input} type="password" />
          <Button>Войти</Button>
        </form>
      </div>
    </div>
  );
}
