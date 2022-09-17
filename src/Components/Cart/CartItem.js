import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <li className={classes.cart_item} id={props.id}>
      <div>
        <div className={classes.item}>
          {" "}
          <img src={props.image} width="45px" height="45px" />
          <h2>{props.name}</h2>
        </div>

        <div className={classes.summary}>
          <div className={classes.summary_price}>
            <span className={classes.price}>{props.price}</span>

            <img
              src="https://nook-central.herokuapp.com/images/bells-icon.png"
              width="35px"
              height="35px"
            />
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
