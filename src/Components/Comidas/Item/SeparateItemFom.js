import React, { useContext, useState } from "react";
import styled from "styled-components";
import CartContext from "../../../store/cart-context";
import "./SeparateItemForm.css";
const StyledItemForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 5px;

  & label {
    font-weight: bold;
    font-weight: bold;
    margin-right: 0.35rem;
  }
  & input {
    width: 3.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.35rem;
    margin: 0;
  }
`;

const AddButton = styled.button`
  cursor: pointer;
  padding: 0.6rem 2.4rem;
  border-radius: 0.85rem;
  border: none;
  background-color: #9edee0;
  box-shadow: 0 5.5px 0px #88bdbd;
  border: 2px solid #66b1d6;
  color: #0f4a61;
  transition: all 0.2 ease;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-weight: bold;

  &:hover {
    background-color: #98d4d6;
    box-shadow: 0 5px 0px #7cadad;
  }

  &:active {
    box-shadow: none;
    margin-top: 0.4rem;
  }
`;

const SeparateItemForm = (props) => {
  const ctx = useContext(CartContext);
  const addToCart = () => {
    ctx.addItem(props.item);
  };

  return (
    <div className="item-form-wrapper">
      <StyledItemForm>
        <label htmlFor="item-quantitye">Qtd:</label>
        <input type="number" min="1" max="5" step="1" id="item-quantity" />
      </StyledItemForm>
      <div></div>
      <AddButton onClick={addToCart}>ADD</AddButton>
    </div>
  );
};
export default SeparateItemForm;
