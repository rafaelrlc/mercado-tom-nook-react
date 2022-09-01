import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";
import fish_img1 from "../UI/images/NH-Icon-betta.webp";
import fish_img2 from "../UI/images/NH-Icon-palechub.webp";
import fish_img3 from "../UI/images/NH-Icon-cruciancarp.webp";

const items_venda = [
  {
    id: "i1",
    name: "Bitterling",
    price: "900",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    id: "i2",
    name: "Pale Chub",
    price: "200",
    description: "um peixe ai",
    image: fish_img2,
  },
  {
    id: "i3",
    name: "Crucian Carp",
    price: "160",
    description: "um peixe ai",
    image: fish_img3,
  },
  {
    id: "i4",
    name: "Dace",
    price: "240",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    id: "i5",
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
    id: "i7",
    name: "Goldfish",
    price: "1300",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    id: "i8",
    name: "Pop Eyed Goldfish",
    price: "1300",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    id: "i9",
    name: "Ranchu Goldfish",
    price: "4500",
    description: "um peixe ai",
    image: fish_img1,
  },
  {
    id: "i10",
    name: "Killifish",
    price: "300",
    description: "um peixe ai",
    image: fish_img1,
  },
];

const AvaliableItems = (props) => {
  const avaliable_fish = items_venda.map((item) => (
    <SeparateItem
      key={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
      item={item}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      <ul>{avaliable_fish}</ul>
    </Card>
  );
};

export default AvaliableItems;
