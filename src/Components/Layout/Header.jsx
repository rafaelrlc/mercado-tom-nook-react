import { useState } from "react";
import MainHeader from "./Header/MainHeader";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cartShow, setCartShow] = useState(false);

  return (
    <header>
      {cartShow && <Cart onHideCart={() => setCartShow(false)}></Cart>}
      <MainHeader onShowCart={() => setCartShow(true)}></MainHeader>
    </header>
  );
};

export default Header;
