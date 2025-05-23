import classes from "./Cart.module.css";
import Modal from "../UI/UI-Components/Modal";
import ItemCartButton from "../UI/UI-Components/ItemCartButton";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutCart from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkoutShow, setCheckoutShow] = useState(false);

  const showOrderButton = cartCtx.itemsStored.length > 0;

  const addCartItem = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: 1,
    });
  };

  const removeCartItem = (id) => {
    cartCtx.removeItem(id);
  };

  const clearCart = () => {
    cartCtx.clearCartItem();
  };

  const goCheckout = () => {
    setCheckoutShow(true);
  };

  const cartItems = (
    <div className={classes.cart_items}>
      {cartCtx.itemsStored.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={removeCartItem.bind(null, item.id)}
          onAdd={addCartItem.bind(null, item)}
        ></CartItem>
      ))}
    </div>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      {checkoutShow && (
        <CheckoutCart
          onCancel={() => setCheckoutShow(false)}
        ></CheckoutCart>
      )}
      <div className={classes.total}>
        {!showOrderButton ? (
          <span>Empty Cart</span>
        ) : (
          <span>Total Amount:</span>
        )}
        <div className={classes.item_price}>
          <span>{cartCtx.totalAmount}</span>
          <img
            src="https://dodo.ac/np/images/thumb/1/1e/99k_Bells_NH_Inv_Icon.png/120px-99k_Bells_NH_Inv_Icon.png"
            width="50px"
            height="50px"
            alt="item"
          />
        </div>
      </div>

      {!checkoutShow && (
        <div className={classes.actions}>
          {showOrderButton && (
            <ItemCartButton onClick={clearCart} className="close">
              Limpar Carrinho
            </ItemCartButton>
          )}
          <ItemCartButton onClick={props.onHideCart} className="close">
            Close
          </ItemCartButton>
          {showOrderButton && (
            <ItemCartButton onClick={goCheckout} className="confirm">
              Buy
            </ItemCartButton>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
