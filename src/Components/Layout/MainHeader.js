import styled from "styled-components";
import { Fragment } from "react";
import CartButton from "./CartButton";

import tom_nook_nav from "../UI/images/kindpng_6766832.png";
import { useContext } from "react";
import { useRef } from "react";
const StyledHeader = styled.header`
  @font-face {
    font-family: "FinkHeavy";
    src: url("../UI/FinkHeavy.ttf");
  }

  top: 0;
  left: 0;
  width: 100%;
  height: 9rem;
  background-color: #75a274;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  & img {
    margin-left: 2%;
  }

  & img:hover {
    margin-top: 0.75rem;
  }
  & h1 {
    margin: 0;
    margin-left: 2%;
    margin-top: 0.75rem;
    font-family: "FinkHeavy";
    font-size: 3.5rem;
    color: white;
    padding: 1.5rem;
    border-radius: 1rem;
  }

  & h1:hover {
    margin-top: 1.25rem;
  }

  div {
    color: red;
    width: 30px;
    height: 30px;
  }
`;
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

  & h3 {
    margin: 0;
    margin-top: 6px;
    cursor: pointer;
  }

  & h3:last-child {
    margin-right: 10rem;
  }

  & h3:first-child {
    margin-left: 10rem;
  }
`;
const MainHeader = (props) => {
  let type;
  const changeItemFish = () => {
    type = "Peixes";
    props.changeItemType(type);
  };

  const changeItemFossil = () => {
    type = "Fossil";
    props.changeItemType(type);
  };

  const changeItemBugs = () => {
    type = "Bugs";
    props.changeItemType(type);
  };
  return (
    <Fragment>
      <StyledHeader>
        <img src={tom_nook_nav} width="80px" height="80px" />
        <h1>Mercadinho Tom Nook</h1>
        <CartButton onClick={props.onShowCart}>Cart</CartButton>
      </StyledHeader>
      <StyledItemBar>
        <div>
          <h3 value="Peixes" onClick={changeItemFish}>
            PEIXES
          </h3>
        </div>
        <div>
          <h3 value="Fossil" onClick={changeItemFossil}>
            FOSSIL
          </h3>
        </div>
        <div>
          <h3 value="Bugs" onClick={changeItemBugs}>
            BUGS
          </h3>
        </div>
      </StyledItemBar>
    </Fragment>
  );
};

export default MainHeader;
