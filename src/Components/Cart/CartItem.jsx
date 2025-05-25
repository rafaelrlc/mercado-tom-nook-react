import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <div className={classes.cart_item} id={props.id}>
      <div>
        <div className={classes.item}>
          {" "}
          <img src={props.image} alt="item-img" width="45px" height="45px" />
          <h2>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
        </div>

        <div className={classes.summary}>
          <div className={classes.summary_price}>
            <span className={classes.price}>{props.price}</span>

            <img
              src="https://dodo.ac/np/images/thumb/a/a2/100_Bells_NH_Inv_Icon.png/120px-100_Bells_NH_Inv_Icon.png"
              alt="bells-img-icon"
              width="40px"
              height="40px"
            />
          </div>

          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
