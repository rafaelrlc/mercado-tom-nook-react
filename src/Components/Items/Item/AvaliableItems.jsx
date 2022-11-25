import { useEffect, useState } from "react";
import Card from "../../UI/UI-Components/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./SeparateItem";

const AvaliableItems = (props) => {
  const [listItems, setListItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let itemObject = {};
  let itemList = [];

  const fetchItems = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://acnhapi.com/v1/${props.type}`);

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      for (var item in data) {
        // item é o index do array de objetos
        itemObject = {
          id: data[item]["id"],
          price: data[item]["price"],
          name: data[item]["name"]["name-USen"],
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
    fetchItems();
  }, [props.type]);

  const avaliable_items = listItems.map((item) => (
    <SeparateItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      {isLoading && <p className={classes.loading}>Carregando...</p>}
      {error && <h1>{error}</h1>}
      <ul>{!isLoading && !error && avaliable_items}</ul>
    </Card>
  );
};

export default AvaliableItems;
