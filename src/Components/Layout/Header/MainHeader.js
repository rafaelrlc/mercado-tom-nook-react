import styled from "styled-components";
import { Fragment } from "react";
import CartButton from "../Cart/CartButton";
import { useNavigate } from "react-router-dom";

import tom_nook_nav from "../../UI/images/kindpng_6766832.png";

const StyledHeader = styled.header`
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
    cursor: pointer;
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

const MainHeader = (props) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <StyledHeader>
        <img
          src={tom_nook_nav}
          width="80px"
          height="80px"
          alt="tom-nook-img"
          onClick={() => navigate("/home")}
        />
        <h1>Mercadinho Tom Nook</h1>
        <CartButton onClick={props.onShowCart}>Cart</CartButton>
      </StyledHeader>
    </Fragment>
  );
};

export default MainHeader;
