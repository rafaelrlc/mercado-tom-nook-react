import MainHeader from "./Components/Layout/MainHeader";
import Items from "./Components/Comidas/Items";
import { Fragment, useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import ItemBar from "./Components/Layout/ItemBar";
import CartProvider from "./store/CartProvider";
import SellingOpitions from "./Components/Layout/SellingOpitions";

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

  const changeItem = (type) => {
    setItemBarType(type);
  };

  const changeVillagers = () => {
    setSellingItems(false);
    setVillagers(true);
  };

  const changeSellingItems = () => {
    setSellingItems(true);
    setVillagers(false);
  };

  // criar um context no lugar da main para colocar as funcoes de cadeia de prop ==> const expandItemInfo = () => {};
  return (
    <CartProvider>
      {cartShow && <Cart onHideCart={hideCartHandler}></Cart>}
      <MainHeader
        onShowCart={showCartHandler}
        onVillagers={changeVillagers}
        onSellingItems={changeSellingItems}
      ></MainHeader>
      {sellingItems && !villagers && (
        <div className="item_store">
          <SellingOpitions
            itemType={itemBarType}
            changeItemType={changeItem}
          ></SellingOpitions>

          <main>
            <ItemBar type={itemBarType}></ItemBar>
            <Items type={itemBarType}></Items>
          </main>
        </div>
      )}
    </CartProvider>
  );
}

export default App;
