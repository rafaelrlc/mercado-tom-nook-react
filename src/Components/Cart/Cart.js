import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutCart from "./CheckoutCart";
import ItemCartButton from "../UI/ItemCartButton";

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
    <ul className={classes.cart_items}>
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
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {!checkoutShow && cartItems}
      {checkoutShow && (
        <CheckoutCart onCancel={() => setCheckoutShow(false)}></CheckoutCart>
      )}
      <div className={classes.total}>
        {!showOrderButton ? (
          <span>Carrinho Vazio</span>
        ) : (
          <span>Valor Total:</span>
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
            Fechar
          </ItemCartButton>
          {showOrderButton && (
            <ItemCartButton onClick={goCheckout} className="confirm">
              Comprar
            </ItemCartButton>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
