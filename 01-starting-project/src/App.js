import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = React.useState(false);

  return (
    <Fragment>
      {isCartShown && <Cart onCloseCart={e => {setIsCartShown(false)}} />}
      <Header onShowCart={e => {setIsCartShown(true)}} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
