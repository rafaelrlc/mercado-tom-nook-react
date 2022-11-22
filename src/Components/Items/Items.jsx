import React from "react";
import AvaliableItems from "./Item/AvaliableItems";
import { useParams } from "react-router-dom";

const Items = (props) => {
  const params = useParams();
  return <AvaliableItems type={params.itemType}></AvaliableItems>;
};

export default Items;
