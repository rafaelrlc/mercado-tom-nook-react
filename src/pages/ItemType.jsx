/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import ItemBar from "../Components/Layout/Header/ItemBar";
import styled from "styled-components";

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
    image: "https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png",
  },
  {
    name: "INSETOS",
    type: "bugs",
    image: "https://dodo.ac/np/images/3/37/Grasshopper_NH_Icon.png",
  },
  {
    name: "MAR",
    type: "sea",
    image: "https://dodo.ac/np/images/5/58/Octopus_NH_Icon.png",
  },
]; // colocar uma chamada API para pegar esses dados (futuramente)

const ItemType = (props) => {
  const navigate = useNavigate();
  const itemsDisplay = listItems.map((item) => (
    <Item
      onClick={() => {
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
