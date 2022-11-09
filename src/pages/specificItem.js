import { Fragment } from "react";
import Items from "../Components/Items/Items";
import SellingOpitions from "../Components/Layout/Header/SellingOpitions";
import ItemBar from "../Components/Layout/Header/ItemBar";
const SpecificItem = (props) => {
  return (
    <Fragment>
      <SellingOpitions changeItemType={props.changeItemType}></SellingOpitions>
      <ItemBar type={props.type}></ItemBar>
      <Items></Items>
    </Fragment>
  );
};

export default SpecificItem;
