import styled from "styled-components";

const Banner = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: #148fa4;
  border: 3px solid #87c2df;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-family: "FinkHeavy";
  margin: auto;
  margin-top: 1.5rem;
  border-radius: 1.25rem;
  padding: 0.25rem 1rem;

  @media (min-width: 768px) {
    width: 70%;
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    width: 50%;
    font-size: 2rem;
  }

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
    name: "Fish",
    type: "fish",
  },
  {
    name: "Bugs",
    type: "bugs",
  },
  {
    name: "Sea",
    type: "sea",
  },
]; // colocar uma chamada API para pegar esses dados (futuramente)

const ItemBar = (props) => {
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
