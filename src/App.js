import MainHeader from "./Components/Layout/MainHeader";
import Items from "./Components/Comidas/Items";
import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartShow, setCartShow] = useState(false);
  return (
    <Fragment>
      {cartShow && <Cart></Cart>}
      <MainHeader></MainHeader>
      <main>
        <Items></Items>
      </main>
    </Fragment>
  );
}

export default App;
