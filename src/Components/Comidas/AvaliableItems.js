import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";

const AvaliableItems = (props) => {
  const [listItems, setListItems] = useState([]);
  let itemObject = {};
  let itemList = [];

  const fetchItems = async () => {
    const response = await fetch(`http://acnhapi.com/v1/${props.type}`);
    const data = await response.json();

    for (var item in data) {
      if (data.hasOwnProperty(item)) {
        itemObject = {
          id: data[item]["id"],
          price: data[item]["price"],
          name: data[item]["name"]["name-USen"].toUpperCase(),
          description: data[item]["museum-phrase"],
          image: data[item]["icon_uri"],
        };
        itemList.push(itemObject);
      }
    }
    setListItems(itemList);
  };

  useEffect(() => {
    console.log("useffect");
    fetchItems();
  }, [props.type]);

  const avaliable_items = listItems.map((item) => (
    <SeparateItem
      id={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      <ul>{avaliable_items}</ul>
    </Card>
  );
};

export default AvaliableItems;
