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
  @font-face {
    font-family: "FinkHeavy";
    src: url("../Components/UI/fonts/FinkHeavy.ttf");
  }

  text-align: center;
  color: rgb(75, 56, 8);
  border-radius: 10px;
  padding: 3rem;
  font-size: 1.35rem;
  font-family: "FinkHeavy";

  &:hover {
    background-color: #eeeee4;
  }
`;

const ItemType = (props) => {
  const navigate = useNavigate();

  const redirectToFish = () => {
    props.changeItemType("fish");
    navigate("/items/fish");
  };
  const redirectToBugs = () => {
    props.changeItemType("bugs");
    navigate("/items/bugs");
  };
  const redirectToSea = () => {
    props.changeItemType("sea");
    navigate("/items/sea");
  };

  return (
    <div>
      <ItemBar></ItemBar>
      <ItemContainer>
        <Item onClick={redirectToFish}>
          <img src="https://acnhapi.com/v1/icons/fish/6"></img>
          <p>Peixes</p>
        </Item>

        <Item onClick={redirectToBugs}>
          <img src="https://acnhapi.com/v1/icons/bugs/9"></img>
          <p>Bugs</p>
        </Item>

        <Item onClick={redirectToSea}>
          <img src="https://acnhapi.com/v1/icons/sea/8"></img>
          <p>Mar</p>
        </Item>
      </ItemContainer>
    </div>
  );
};

export default ItemType;
