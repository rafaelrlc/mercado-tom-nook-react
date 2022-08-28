import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItem = (item) => {
    cartContext.itemsStored.push(item);
    console.log(cartContext.itemsStored.length);
  };

  const removeItem = (id) => {};

  const cartContext = {
    itemsStored: [],
    totalAmount: 0,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
