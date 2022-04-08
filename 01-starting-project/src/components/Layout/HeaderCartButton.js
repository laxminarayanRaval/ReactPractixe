import React from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import css from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartContx = React.useContext(CartContext);
  console.log(cartContx, "cartcontx");
  const numberOfCartItems = cartContx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const [btnAnimated, setBtnAnimated] = React.useState(false);
  const btnClasses = `${css.button} ${btnAnimated ? css.bump : ''}`;

  React.useEffect(() => {
    setBtnAnimated(true);

    const timer = setTimeout(() => {
      setBtnAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContx.items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
