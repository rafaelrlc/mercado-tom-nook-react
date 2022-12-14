import React, { useReducer } from "react";
import CartContext from "./cart-context";

const findIndex = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === value) {
      return i;
    }
  }
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const repeatedItemIndex = findIndex(state.items, action.item.id);

    const repeatedCartItem = state.items[repeatedItemIndex];

    let updatedItems;
    let updatedItem;

    if (repeatedCartItem) {
      updatedItem = {
        ...repeatedCartItem,
        amount: repeatedCartItem.amount + action.item.amount,
      }; // reescreve o repeatedCartItem apenas mudando seu amount

      updatedItems = state.items;
      updatedItems[repeatedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const removeIndex = findIndex(state.items, action.id);

    const updatedTotalAmount =
      state.totalAmount - state.items[removeIndex].price;
    let updatedItems = state.items;

    if (state.items[removeIndex].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...updatedItems[removeIndex],
        amount: state.items[removeIndex].amount - 1,
      };
      updatedItems[removeIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else {
    //clear cart
    state.items = [];
    state.totalAmount = 0;

    return {
      items: state.items,
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

  const clearCartItem = () => {
    cartAction({
      type: "CLEAR_CART",
    });
  };

  const cartContext = {
    itemsStored: cartState.items, // puxou do CONTEXT
    totalAmount: cartState.totalAmount, // puxou do CONTEXT
    addItem: addItem,
    removeItem: removeItem,
    clearCartItem: clearCartItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
