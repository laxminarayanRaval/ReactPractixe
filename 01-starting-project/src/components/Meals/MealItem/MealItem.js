import React from "react";
import css from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={css.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={css.desc}>{props.desc}</div>
        <div className={css.price}>{price}</div>
      </div>
      <div><MealItemForm /></div>
    </li>
  );
}

export default MealItem;
