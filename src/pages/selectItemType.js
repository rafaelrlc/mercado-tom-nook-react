import { useNavigate, useSearchParams } from "react-router-dom";
import ItemBar from "../Components/Layout/Header/ItemBar";
import styled from "styled-components";
import Button from "../Components/UI/Button";
import { useState, useEffect } from "react";
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-top: 8rem;
`;

const Item = styled.div`
  text-align: center;
  color: rgb(75, 56, 8);
  border-radius: 30px;
  padding: 3rem;
  font-size: 1.35rem;
  font-family: "FinkHeavy";

  &:hover {
    background-color: #f2e0cc;
    cursor: pointer;
  }
`;

const listItems = [
  {
    name: "PEIXES",
    type: "fish",
    image: "https://acnhapi.com/v1/icons/fish/6",
  },
  {
    name: "INSETOS",
    type: "bugs",
    image: "https://acnhapi.com/v1/icons/bugs/9",
  },
  {
    name: "MAR",
    type: "sea",
    image: "https://acnhapi.com/v1/icons/sea/8",
  },
]; // colocar uma chamada API para pegar esses dados (futuramente)

const ItemType = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listItem, setListItems] = useState([]);

  const itemsDisplay = listItems.map((item) => (
    <Item
      onClick={() => {
        props.changeItemType(item.type);
        navigate(`/items/${item.type}`);
      }}
    >
      <img src={item.image}></img>
      <p>{item.name}</p>
    </Item>
  ));
  return (
    <div>
      <ItemBar></ItemBar>
      <ItemContainer>{itemsDisplay}</ItemContainer>
    </div>
  );
};

export default ItemType;
