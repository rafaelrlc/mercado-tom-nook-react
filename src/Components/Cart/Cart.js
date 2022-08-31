import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import fish_img from "../UI/images/NH-Icon-betta.webp";
import bells_img from "../UI/images/bells-icon.png";

import styled from "styled-components";

const StyledCartItems = styled.li`
display: flex;
align-items:center;
`



const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = //provisorio
    (
      <ul className={classes.cart_items}>
        {cartCtx.itemsStored.map((item) => (
          <StyledCartItems>
            {<img src={fish_img} width="50px" height="50px" />}{item.nome} {item.price} 
          </StyledCartItems>
        ))}
      </ul>
    );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Valor Total</span>
        <div className={classes.item_price}>        
          <span>{cartCtx.totalAmount}</span>
          <img src={bells_img} width="50px" height="50px" />
        </div>

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
