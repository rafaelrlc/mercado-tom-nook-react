import classes from "./Checkout.module.css";
import ItemCartButton from "../UI/ItemCartButton";

const CheckoutCart = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.user_form}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
      </div>

      <div className={classes.actions}>
        <ItemCartButton
          type="button"
          onClick={props.onCancel}
          className="close"
        >
          Cancelar
        </ItemCartButton>
        <ItemCartButton className="confirm">Confirmar</ItemCartButton>
      </div>
    </form>
  );
};

export default CheckoutCart;
