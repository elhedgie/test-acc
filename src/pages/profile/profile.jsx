import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logOut } from "../../reducers/actionCreators/actionCreators";
import AddForm from "./addForm/AddForm";
import Item from "./item/Item";
import style from "./profile.module.css";

export default function Profile() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  let list = useSelector((state) => state.items);
  const log = useSelector(state => state.login.isLogged)
  useEffect(() => {
    setFilteredList(list.filter((elem) => elem.name.includes(searchValue) || elem.number.includes(searchValue) ));
  }, [searchValue, list]);

  const dispatch = useDispatch();
  const { push } = useNavigate();
  const searchFunc = (e) => {
    setSearchValue(e.target.value);
  };

  const auth = localStorage.getItem('loggedIn') ? JSON.parse(localStorage.getItem('loggedIn')): log

  return auth ? (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link
          onClick={() => {
            localStorage.removeItem('loggedIn')
            dispatch(logOut());
            push("/");
          }}
          className={style.link}
          to={"/"}
        >
          Выход
        </Link>
        <Link className={style.link} to={"/profile"}>
          Профиль
        </Link>
      </nav>
      <div className={style.mainBlock}>
        <h1 className={style.headingOne}>Контакты</h1>
        <div className={style.contactBlock}>
          <input
            onChange={(e) => searchFunc(e)}
            placeholder="Поиск по контактам"
            className={style.inputSearch}
            type="text"
            value={searchValue}
          />
          <AddForm></AddForm>
          <ul className={style.itemList}>
            {filteredList
              ? filteredList.map((item) => <Item key={item.id} item={item} />)
              : list.map((item) => <Item key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
