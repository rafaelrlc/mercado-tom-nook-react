import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

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
  let type;
  const changeItemFish = () => {
    type = "fish";
    props.changeItemType(type);
  };

  const changeItemSea = () => {
    type = "sea";
    props.changeItemType(type);
  };

  const changeItemBugs = () => {
    type = "bugs";
    props.changeItemType(type);
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
          Mar
        </Button>
      </div>
      <div>
        <Button value="Bugs" onClick={changeItemBugs}>
          BUGS
        </Button>
      </div>
    </StyledItemBar>
  );
};

export default SellingOpitions;
