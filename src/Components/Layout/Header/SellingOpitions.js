import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
const StyledItemBar = styled.div`
  @font-face {
    font-family: "FinkHeavy";
    src: url("../UI/FinkHeavy.ttf");
  }
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  font-size: 1.25rem;
  font-family: "FinkHeavy";
  background-color: #75a274;
  color: white;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  list-style-type: none;
`;

const SellingOpitions = (props) => {
  const navigate = useNavigate();
  let type;

  const changeItemFish = () => {
    props.changeItemType("fish");
    navigate("/items/fish");
  };

  const changeItemSea = () => {
    props.changeItemType("sea");
    navigate("/items/sea");
  };

  const changeItemBugs = () => {
    props.changeItemType("bugs");
    navigate("/items/bugs");
  };
  return (
    <StyledItemBar>
      <div>
        <Button value="Peixes" onClick={changeItemFish}>
          PEIXES
        </Button>
      </div>
      <div>
        <Button value="Sea" onClick={changeItemSea}>
          MAR
        </Button>
      </div>
      <div>
        <Button value="Bugs" onClick={changeItemBugs}>
          INSETOS
        </Button>
      </div>
    </StyledItemBar>
  );
};

export default SellingOpitions;
