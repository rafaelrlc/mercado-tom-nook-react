import classes from "./CartItem.module.css";
import bells_img from "../UI/images/bells-icon.png";
const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]} id={props.id}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <div className={classes.summary_price}>
            <span className={classes.price}>{props.price}</span>

            <img src={bells_img} width="35px" height="35px" />
          </div>

          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
