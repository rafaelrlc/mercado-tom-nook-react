import { Fragment } from "react";
import Items from "../Components/Items/Items";
import SellingOpitions from "../Components/Layout/Header/SellingOpitions";
import ItemBar from "../Components/Layout/Header/ItemBar";
import { useParams } from "react-router-dom";
const SpecificItem = (props) => {
  let itemTypeUrl = useParams();
  console.log(itemTypeUrl.itemType);
  return (
    <Fragment>
      <SellingOpitions changeItemType={props.changeItemType}></SellingOpitions>
      <ItemBar type={props.type}></ItemBar>
      <Items></Items>
    </Fragment>
  );
};

export default SpecificItem;
