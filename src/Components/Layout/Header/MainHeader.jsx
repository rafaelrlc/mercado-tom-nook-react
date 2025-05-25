import styled from "styled-components";
import { Fragment } from "react";
import CartButton from "../Cart/CartButton";
import { useNavigate } from "react-router-dom";
import tom_nook_nav from "../../UI/images/kindpng_6766832.png";
import AuthContext from "../../../store/authContext";
import { useContext } from "react";

const StyledHeader = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 9rem;
  background-color: #75a274;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;

  & img {
    width: 80px;
    height: 80px;
    transition: all 0.3s ease;
  }

  & img:hover {
    transform: translateY(-0.75rem);
    cursor: pointer;
  }

  & h1 {
    margin: 0;
    font-family: "FinkHeavy";
    font-size: 3.5rem;
    color: white;
    padding: 1.5rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
  }

  & h1:hover {
    transform: translateY(-0.5rem);
  }

  @media (max-width: 768px) {
    height: 7rem;
    padding: 0 1rem;

    & img {
      width: 60px;
      height: 60px;
    }

    & h1 {
      font-size: 2.5rem;
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    height: 6rem;
    padding: 0 0.5rem;

    & img {
      width: 50px;
      height: 50px;
    }

    & h1 {
      font-size: 1.8rem;
      padding: 0.5rem;
    }
  }
`;

const MainHeader = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <StyledHeader>
        <img
          src={tom_nook_nav}
          width="80px"
          height="80px"
          alt="tom-nook-img"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1>Tom Nook's Market</h1>
        <CartButton onClick={props.onShowCart}>Cart</CartButton>
      </StyledHeader>
    </Fragment>
  );
};

export default MainHeader;
