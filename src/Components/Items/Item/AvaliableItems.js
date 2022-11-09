import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./SeparateItem";

const AvaliableItems = (props) => {
  const [listItems, setListItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let itemObject = {};
  let itemList = [];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const fetchItems = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://acnhapi.com/v1/${props.type}`);

      if (!response.ok) {
        throw new Error("Request failed!");
      }
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
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }

    setIsLoading(false);
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
      loading={isLoading}
      error={error}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      <ul>{avaliable_items}</ul>
    </Card>
  );
};

export default AvaliableItems;
