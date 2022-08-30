import CartIcon from "./CardIcon";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import React, { useContext, useState } from "react";

const StyledCartButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #f8c59e;
  color: white;
  padding: 0.65rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1.5rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: 10%;
  box-shadow: 0 8px 0px #d1a788;
  border: 2px solid #c59d81;
  transition: all 0.2 ease;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-bottom: 3px;

  &:hover {
    transition: all 0.2 ease;
    background-color: #eeb990;
    padding: 0.5rem 2.8rem;
    top: 8px;
  }

  &:active {
    margin-top: 8px;
    transition: all 0.2 ease;
    background-color: #efc3a1;
    box-shadow: none;
  }

  .icon {
    margin-top: 2px;
    width: 2.75rem;
    height: 2.75rem;
    margin-right: 0.5rem;
  }

  .badge {
    background-color: #e8b48d;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    margin-left: 0.75rem;
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:hover .badge {
    background-color: #dfac84;
  }

  &:active .badge {
    background-color: #e5b794;
  }
  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [counter, setcounter] = useState(0);

  const numCartItens1 = cartCtx.itemsStored.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);
 
  return (
    <StyledCartButton onClick={props.onClick}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span></span>
      <span className="badge">{numCartItens1}</span>
    </StyledCartButton>
  );
};

export default CartButton;
