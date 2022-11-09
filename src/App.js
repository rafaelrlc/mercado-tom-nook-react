import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, useState } from "react";
import MainHeader from "./Components/Layout/Header/MainHeader";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Homepage from "./pages/homepage";
import ItemType from "./pages/selectItemType";
import SpecificItem from "./pages/specificItem";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [itemBarType, setItemBarType] = useState("");

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  const changeItemType = (type) => {
    setItemBarType(type);
  };

  return (
    <Fragment>
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
            element={<ItemType changeItemType={changeItemType}></ItemType>}
          ></Route>
          <Route
            path={`/items/:itemType`}
            element={
              <SpecificItem
                changeItemType={changeItemType}
                type={itemBarType}
              ></SpecificItem>
            }
          ></Route>
        </Routes>
      </CartProvider>
    </Fragment>
  );
}

export default App;
