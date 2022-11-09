import { Routes, Route, Navigate } from "react-router-dom";
import MainHeader from "./Components/Layout/Header/MainHeader";
import Items from "./Components/Items/Items";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import ItemBar from "./Components/Layout/Header/ItemBar";
import CartProvider from "./store/CartProvider";
import SellingOpitions from "./Components/Layout/Header/SellingOpitions";
import Homepage from "./pages/homepage";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [itemBarType, setItemBarType] = useState("fish");
  const [sellingItems, setSellingItems] = useState(true);
  const [villagers, setVillagers] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      <header>
        {cartShow && <Cart onHideCart={hideCartHandler}></Cart>}
        <MainHeader onShowCart={showCartHandler}></MainHeader>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route
          path={"/items/"}
          element={
            <main>
              <SellingOpitions></SellingOpitions>
              <ItemBar type={itemBarType}></ItemBar>
            </main>
          }
        ></Route>
        <Route
          path={`/items/:itemType`}
          element={<Items type={itemBarType}></Items>}
        ></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
