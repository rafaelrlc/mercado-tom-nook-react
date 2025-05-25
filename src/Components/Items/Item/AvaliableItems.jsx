import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../UI/UI-Components/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./SeparateItem";
import { getItems } from "../../../services/api";

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
      const response = await getItems(props.type);
      const data = response.data;

      for (var item in data) {
        itemObject = {
          id: data[item]["number"],
          price: data[item]["sell_nook"],
          name: data[item]["name"],
          description: data[item]["catchphrases"][0],
          image: data[item]["image_url"],
        };
        itemList.push(itemObject);
      }
      setListItems(itemList);
    } catch (err) {
      setError("Something went wrong!");
      console.log(error.response);
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
      {!error && isLoading && <p className={classes.loading}>Loading...</p>}
      {error && <h1>{error}</h1>}
      <ul>{!isLoading && !error && avaliable_items}</ul>
    </Card>
  );
};

export default AvaliableItems;
