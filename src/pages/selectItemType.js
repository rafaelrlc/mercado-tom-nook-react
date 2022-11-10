import { useNavigate, Link } from "react-router-dom";

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
  border-radius: 30px;
  padding: 3rem;
  font-size: 1.5rem;
  font-family: "FinkHeavy";

  &:hover {
    background-color: #f1f1e9;
    cursor: pointer;
  }
`;

const ItemType = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <ItemBar></ItemBar>
      <ItemContainer>
        <Item
          onClick={() => {
            props.changeItemType("fish");
            navigate("/items/fish");
          }}
        >
          <img src="https://acnhapi.com/v1/icons/fish/6"></img>
          <p>Peixes</p>
        </Item>

        <Item
          onClick={() => {
            props.changeItemType("bugs");
            navigate("/items/bugs");
          }}
        >
          <img src="https://acnhapi.com/v1/icons/bugs/9"></img>
          <p>Insetos</p>
        </Item>

        <Item
          onClick={() => {
            props.changeItemType("sea");
            navigate("/items/sea");
          }}
        >
          <img src="https://acnhapi.com/v1/icons/sea/8"></img>
          <p>Mar</p>
        </Item>
      </ItemContainer>
    </div>
  );
};

export default ItemType;
