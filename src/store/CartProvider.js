import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const updatedItems = state.items.filter((obj) => obj.id != action.id);
    //console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: state.totalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    cartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItem = (id) => {
    cartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    itemsStored: cartState.items,
    totalAmount: cartState.totalAmount,
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
