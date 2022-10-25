import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";

const AvaliableItems = (props) => {
  const [listItems, setListItems] = useState([]);
  let itemObject = {};
  let itemList = [];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const fetchItems = async () => {
    const response = await fetch(`http://acnhapi.com/v1/${props.type}`);
    const data = await response.json();
    console.log(data);

    for (var item in data) {
      itemObject = {
        id: data[item]["id"],
        price: data[item]["price"],
        name: capitalizeFirstLetter(data[item]["name"]["name-USen"]),
        description: data[item]["museum-phrase"],
        image: data[item]["icon_uri"],
      };
      itemList.push(itemObject);
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
