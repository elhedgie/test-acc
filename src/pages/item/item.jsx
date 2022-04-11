import React from "react";
import Button from "../button/button";
import style from './item.module.css'

function Item(props) {
  return (
    <li>
      <div className={style.itemBlock}>
        <h2>Пуз Пузинов</h2>
        <span>89262747551</span>
        <div className={style.buttonBlock}>
          <Button>Редактировать</Button>
          <Button>Удалить</Button>
        </div>
      </div>
    </li>
  );
}

export default Item;
