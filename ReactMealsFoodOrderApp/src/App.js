import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = React.useState(false);

  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={e => {setIsCartShown(false)}} />}
      <Header onShowCart={e => {setIsCartShown(true)}} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
