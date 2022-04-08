import React from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import css from "./MealItem.module.css";


function MealItem(props) {
  const cartContx = React.useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    cartContx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.desc}>{props.desc}</div>
        <div className={css.price}>{price}</div>
      </div>
      <div><MealItemForm onAddToCart={onAddToCartHandler} /></div>
    </li>
  );
}

export default MealItem;
