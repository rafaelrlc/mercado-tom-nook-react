import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import fish_img from "../UI/images/NH-Icon-betta.webp";
import bells_img from "../UI/images/bells-icon.png";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const showOrderButton = cartCtx.itemsStored.length > 0;

  const addCartItem = (item) => {
    cartCtx.addItem(item);
  };

  const removeCartItem = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes.cart_items}>
      {cartCtx.itemsStored.map((item) => (
        <CartItem
          key={item.id}
          name={item.nome}
          amount={item.amount}
          price={item.price}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Valor Total:</span>
        <div className={classes.item_price}>
          <span>{cartCtx.totalAmount}</span>
          <img src={bells_img} width="50px" height="50px" />
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.close}>
          Close
        </button>
        {showOrderButton && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
