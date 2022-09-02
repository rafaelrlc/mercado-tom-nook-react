import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";
import fish_img1 from "../UI/images/NH-Icon-betta.webp";

const items_venda = [
  {
    key: "i1",
    name: "Bitterling",
    price: "900",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i2",
    name: "Pale Chub",
    price: "200",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i3",
    name: "Crucian Carp",
    price: "160",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i4",
    name: "Dace",
    price: "240",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i5",
    name: "Card",
    price: "300",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    id: "i6",
    name: "Koi",
    price: "4000",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i7",
    name: "Goldfish",
    price: "1300",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i8",
    name: "Pop Eyed Goldfish",
    price: "1300",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i9",
    name: "Ranchu Goldfish",
    price: "4500",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    key: "i10",
    name: "Killifish",
    price: "300",
    description: "um peixe ai",
    image: fish_img1,
  },
];

const AvaliableItems = (props) => {
  const avaliable_items = items_venda.map((item) => (
    <SeparateItem
      id={item.key}
      name={item.name}
      price={item.price}
      description={item.description}
      item={item}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      <ul>{avaliable_items}</ul>
    </Card>
  );
};

export default AvaliableItems;
