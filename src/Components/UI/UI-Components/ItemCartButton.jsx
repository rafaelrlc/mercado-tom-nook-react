import styled from "styled-components";

const ItemCartButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #45a2d1;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  box-shadow: 0 5px 0px #8ab3b3;
  transition: all 0.2 ease;

  &.confirm {
    background-color: #8bc2c4;
    color: white;
  }

  &.close {
    color: #000000;
    background-color: #ffffff;
  }

  &.close:hover {
    background-color: #8bc2c4;
    color: white;
  }

  &:active {
    box-shadow: none;
    margin-top: 2px;
  }
`;

export default ItemCartButton;
