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

  return (
    <Fragment>
      <CartProvider>
        <header>
          {cartShow && <Cart onHideCart={() => setCartShow(false)}></Cart>}
          <MainHeader onShowCart={() => setCartShow(true)}></MainHeader>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
          <Route path="/home" element={<Homepage></Homepage>}></Route>
          <Route
            path={"/items/"}
            element={
              <ItemType
                changeItemType={(type) => setItemBarType(type)}
              ></ItemType>
            }
          ></Route>
          <Route
            path={`/items/:itemType`}
            element={
              <SpecificItem
                changeItemType={(type) => setItemBarType(type)}
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
