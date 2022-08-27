import react from "react";
import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";

const items_venda = [
  {
    id: "i1",
    nome: "Bitterling",
    price: "900",
    description: "um peixe ai",
  },
  {
    id: "i2",
    nome: "Pale Chub",
    price: "200",
    description: "um peixe ai",
  },
  {
    id: "i3",
    nome: "Crucian Carp",
    price: "160",
    description: "um peixe ai",
  },
  {
    id: "i4",
    nome: "Dace",
    price: "240",
    description: "um peixe ai",
  },
  {
    id: "i5",
    nome: "Card",
    price: "300",
    description: "um peixe ai",
  },
  {
    id: "i6",
    nome: "Koi",
    price: "4000",
    description: "um peixe ai",
  },
  {
    id: "i7",
    nome: "Goldfish",
    price: "1300",
    description: "um peixe ai",
  },
  {
    id: "i8",
    nome: "Pop Eyed Goldfish",
    price: "1300",
    description: "um peixe ai",
  },
  {
    id: "i9",
    nome: "Ranchu Goldfish",
    price: "4500",
    description: "um peixe ai",
  },
  {
    id: "i10",
    nome: "Killifish",
    price: "300",
    description: "um peixe ai",
  },
];

const SellingItens = (props) => {
  const avaliable_fish = items_venda.map((item) => (
    <SeparateItem
      key={item.id}
      name={item.nome}
      price={item.price}
      description={item.description}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      <ul>{avaliable_fish}</ul>
    </Card>
  );
};

export default SellingItens;
