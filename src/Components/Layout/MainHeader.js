import react from "react";
import styled from "styled-components";
import { Fragment } from "react";
import CartButton from "./CartButton";

const StyledHeader = styled.header`
  @font-face {
    font-family: "FinkHeavy";
    src: url("../UI/FinkHeavy.ttf");
  }

  top: 0;
  left: 0;
  width: 100%;
  height: 9rem;
  background-color: #88c587;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;

  & h1 {
    margin: 0;
    margin-left: 7%;
    font-family: FinkHeavy;
    font-size: 3.5rem;
    color: white;
    padding: 1.5rem;
    border-radius: 1rem;
  }

  & h1:hover {
    margin-top: 8px;
  }
`;

const MainHeader = () => {
  return (
    <Fragment>
      <StyledHeader>
        <h1>Mercadinho Tom Nook</h1>
        <CartButton>Cart</CartButton>
      </StyledHeader>
    </Fragment>
  );
};

export default MainHeader;
