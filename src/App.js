import { useState } from "react";
import MainHeader from "./Components/Layout/Header/MainHeader";
import CartProvider from "./store/CartProvider";
import Cart from "./Components/Cart/Cart";
import Rotas from "./routes";

function App() {
  const [cartShow, setCartShow] = useState(false);

  return (
    <CartProvider>
      <header>
        {cartShow && <Cart onHideCart={() => setCartShow(false)}></Cart>}
        <MainHeader onShowCart={() => setCartShow(true)}></MainHeader>
      </header>
      <Rotas></Rotas>
    </CartProvider>
  );
}

export default App;
