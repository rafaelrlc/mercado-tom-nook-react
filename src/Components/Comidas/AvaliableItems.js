
import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";
import fish_img from "../UI/images/NH-Icon-betta.webp";

const items_venda = [
  {
    id: "i1",
    nome: "Bitterling",
    price: "900",
    description: "um peixe ai",
    image : fish_img
  },
  {
    id: "i2",
    nome: "Pale Chub",
    price: "200",
    description: "um peixe ai",
    image : fish_img
  },
  {
    id: "i3",
    nome: "Crucian Carp",
    price: "160",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i4",
    nome: "Dace",
    price: "240",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i5",
    nome: "Card",
    price: "300",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i6",
    nome: "Koi",
    price: "4000",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i7",
    nome: "Goldfish",
    price: "1300",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i8",
    nome: "Pop Eyed Goldfish",
    price: "1300",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i9",
    nome: "Ranchu Goldfish",
    price: "4500",
    description: "um peixe ai",    image : fish_img
  },
  {
    id: "i10",
    nome: "Killifish",
    price: "300",
    description: "um peixe ai",    
    image : fish_img
  },
];

const AvaliableItems = (props) => {
  const avaliable_fish = items_venda.map((item) => (
    <SeparateItem
      key={item.id}
      name={item.nome}
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
