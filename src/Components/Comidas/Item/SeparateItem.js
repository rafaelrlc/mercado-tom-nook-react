import React from "react";
import classes from "./SeparateItem.module.css";
import SeparateItemForm from "./SeparateItemFom";

const SeparateItem = (props) => {
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{props.price}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <SeparateItemForm></SeparateItemForm>
    </li>
  );
};

export default SeparateItem;
