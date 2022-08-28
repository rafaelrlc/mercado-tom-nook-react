import MainHeader from "./Components/Layout/MainHeader";
import Items from "./Components/Comidas/Items";
import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import ItemBar from "./Components/Layout/ItemBar";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onHideCart={hideCartHandler}></Cart>}
      <MainHeader onShowCart={showCartHandler}></MainHeader>
      <main>
        <ItemBar type={"Peixes"}></ItemBar>
        <Items></Items>
      </main>
    </CartProvider>
  );
}

export default App;
