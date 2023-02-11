import { Fragment } from "react";
import Items from "../Components/Items/Items";
import SellingOpitions from "../Components/Layout/Header/SellingOpitions";
import ItemBar from "../Components/Layout/Header/ItemBar";
import { useParams } from "react-router-dom";

const SelectedItem = (props) => {
  let params = useParams();
  return (
    <Fragment>
      <SellingOpitions></SellingOpitions>
      <ItemBar type={params.itemType}></ItemBar>
      <Items></Items>
    </Fragment>
  );
};

export default SelectedItem;
