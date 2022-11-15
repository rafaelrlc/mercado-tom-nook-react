import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
const StyledItemBar = styled.div`
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

  return (
    <StyledItemBar>
      <div>
        <Button
          onClick={() => {
            props.changeItemType("fish");
            navigate("/items/fish");
          }}
        >
          PEIXES
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            props.changeItemType("sea");
            navigate("/items/sea");
          }}
        >
          MAR
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            props.changeItemType("bugs");
            navigate("/items/bugs");
          }}
        >
          INSETOS
        </Button>
      </div>
    </StyledItemBar>
  );
};

export default SellingOpitions;
