import React, { useRef, useState } from "react";
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
  color: ${(props) => props.invalid_border};
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

  &.invalid_amount {
    border: 2px solid red;
  }
`;

const SeparateItemForm = (props) => {
  const [amountIsValid, setAmountValidity] = useState(true);

  const inputAmount = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmount.current.value;
    const enteredAmountNum = +enteredAmount;
    console.log(enteredAmountNum);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountValidity(false);
      // mostrar erro
      return;
    }
    setAmountValidity(true);
    props.onAddToCart(enteredAmountNum);
  };

  const clearInvalid = () => {};

  return (
    <form className="item-form-wrapper" onSubmit={submitHandler}>
      <StyledItemForm>
        <label htmlFor="item-quantitye">Qtd:</label>
        <input
          type="number"
          min="1"
          max="5"
          step="1"
          id="item-quantity"
          defaultValue="1"
          ref={inputAmount}
        />
      </StyledItemForm>
      <div></div>
      <AddButton
        type="submit"
        invalid_border={!amountIsValid ? "red" : "#0f4a61"}
        onBlur={clearInvalid}
      >
        ADD
      </AddButton>
    </form>
  );
};
export default SeparateItemForm;
