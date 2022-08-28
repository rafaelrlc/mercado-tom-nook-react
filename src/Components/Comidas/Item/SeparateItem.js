import React from "react";
import classes from "./SeparateItem.module.css";
import SeparateItemForm from "./SeparateItemFom";
import bells_img from "../../UI//images/bells-icon.png";
import fish_img from "../../UI/images/NH-Icon-betta.webp";
const SeparateItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <div className={classes.item_info}>
          <img src={fish_img} width="50px" height="50px" />
          <h3>{props.name}</h3>
          <div className={classes.description}></div>
        </div>

        <div className={classes.price}>
          <span>{props.price}</span>
          <img src={bells_img} width="50px" height="50px" />
        </div>
      </div>
      <SeparateItemForm item={props.item}></SeparateItemForm>
    </li>
  );
};

export default SeparateItem;
