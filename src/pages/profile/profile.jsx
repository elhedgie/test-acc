import { Link } from 'react-router-dom';
import Item from '../item/item';
import style from './profile.module.css'

export default function Profile() {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link className={style.link} to={"/"}>Выход</Link>
        <Link className={style.link} to={"/profile"}>Профиль</Link>
      </nav>
      <div className={style.mainBlock}>
        <h1 className={style.headingOne}>Контакты</h1>
        <div className={style.contactBlock}>
          <input placeholder='Поиск по контактам' className={style.inputSearch} type="text" />
          <ul className={style.itemList}>
              <Item/>
              <Item/>
              <Item/>
          </ul>
        </div>
      </div>
    </div>
  );
}
