import React from "react";
import CartIcon from "../Cart/CartIcon";
import css from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={css.button} onClick={props.onShow}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
