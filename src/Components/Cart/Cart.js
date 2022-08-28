import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cart_items}>
      {[{ id: "c1", nome: "Pale Chub", price: 12.99 }].map((item) => (
        <li>{item.nome}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Valor Total</span>
        <span>35.60</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.close}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
