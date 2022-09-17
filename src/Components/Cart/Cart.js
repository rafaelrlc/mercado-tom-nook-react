import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

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
      {cartItems}
      <div className={classes.total}>
        {!showOrderButton ? (
          <span>Carrinho Vazio</span>
        ) : (
          <span>Valor Total:</span>
        )}
        <div className={classes.item_price}>
          <span>{cartCtx.totalAmount}</span>
          <img
            src="https://nook-central.herokuapp.com/images/bells-icon.png"
            width="50px"
            height="50px"
          />
        </div>
      </div>
      <div className={classes.actions}>
        {showOrderButton && (
          <button onClick={clearCart} className={classes.close}>
            Limpar Carrinho
          </button>
        )}
        <button onClick={props.onHideCart} className={classes.close}>
          Fechar
        </button>
        {showOrderButton && <button className={classes.button}>Comprar</button>}
      </div>
    </Modal>
  );
};

export default Cart;
