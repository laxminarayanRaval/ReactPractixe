import React from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import css from "./Cart.module.css";

function Cart(props) {
  const CartContx = React.useContext(CartContext);

  const totalAmount = `$${CartContx.totalAmount.toFixed(2)}`;
  const hasItems = CartContx.items.length > 0;

  const cartItemAddHandler = (item) => {
    CartContx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    CartContx.removeItem(id);
  };

  const cartItems = (
    <ul className={css["cart-items"]}>
      {
        /* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => ( */
        CartContx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))
      }
    </ul>
  );
  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={css.actions}>
        <button onClick={props.onCloseCart} className={css["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={css.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
