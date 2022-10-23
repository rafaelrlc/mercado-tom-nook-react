import React, { useContext, useState } from "react";
import classes from "./SeparateItem.module.css";
import SeparateItemForm from "./SeparateItemForm";
import CartContext from "../../../store/cart-context";

const SeparateItem = (props) => {
  const [expandItem, setExpandItem] = useState(false);
  const cartCtx = useContext(CartContext);
  const addToCart = (itemAmount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: itemAmount,
      image: props.image,
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <div className={classes.item_info}>
          <img src={props.image} width="50px" height="50px" />
          <h3 onClick={() => setExpandItem(!expandItem)}>{props.name}</h3>
        </div>
        <div className={classes.price}>
          <span>{props.price}</span>
          <img
            src="https://nook-central.herokuapp.com/images/bells-icon.png"
            width="50px"
            height="50px"
          />
        </div>
      </div>
      <SeparateItemForm
        item={props.item}
        onAddToCart={addToCart}
      ></SeparateItemForm>

      {expandItem && (
        <div className={classes.description}>{props.description}</div>
      )}
    </li>
  );
};

export default SeparateItem;
