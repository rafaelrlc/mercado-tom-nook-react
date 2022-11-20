import styled from "styled-components";
import { useParams } from "react-router-dom";

const Banner = styled.div`
  width: 50%;
  background-color: #148fa4;
  border: 3px solid #87c2df;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-family: "FinkHeavy";
  margin: auto;
  margin-top: 1.5rem;
  border-radius: 1.25rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: #14899e;
  }

  & h3 {
    margin: 0;
    margin-top: 0.5rem;
  }
`;

const listItems = [
  {
    name: "Peixes",
    type: "fish",
  },
  {
    name: "Insetos",
    type: "bugs",
  },
  {
    name: "Sea",
    type: "sea",
  },
]; // colocar uma chamada API para pegar esses dados (futuramente)

const ItemBar = (props) => {
  const params = useParams(); // pode usar o params para setar o itembar também
  let itemShow = "Items";
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].type === props.type) {
      itemShow = listItems[i].name;
    }
  }
  return (
    <Banner>
      <h3>{itemShow}</h3>
    </Banner>
  );
};

export default ItemBar;
