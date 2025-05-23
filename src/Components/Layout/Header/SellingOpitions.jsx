import React from "react";
import styled from "styled-components";
import ACButton from "../../UI/UI-Components/Button";
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
        <ACButton
          onClick={() => {
            navigate("/items/fish");
          }}
        >
          FISH
        </ACButton>
      </div>
      <div>
        <ACButton
          onClick={() => {
            navigate("/items/sea");
          }}
        >
          SEA
        </ACButton>
      </div>
      <div>
        <ACButton
          onClick={() => {
            navigate("/items/bugs");
          }}
        >
          BUGS
        </ACButton>
      </div>
    </StyledItemBar>
  );
};

export default SellingOpitions;
