import React from "react";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={css["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );  
  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={css.actions}>
        <button onClick={props.onCloseCart} className={css["button--alt"]}>Close</button>
        <button className={css.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
