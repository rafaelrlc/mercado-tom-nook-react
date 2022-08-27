import React from "react";
import styled from "styled-components";
import "./SeparateItemForm.css";
const StyledItemForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 2px;

  & label {
    font-weight: bold;
    font-weight: bold;
    margin-right: 1rem;
  }
  & input {
    width: 3.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.35rem;
  }
`;

const AddButton = styled.button`
  cursor: pointer;
  padding: 0.6rem 2.7rem;
  border-radius: 0.75rem;
  border: none;
  background-color: #a1e6e8;
  box-shadow: 0 5.5px 0px #88bdbd;
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

const SeparateItemForm = () => {
  return (
    <div className="item-form-wrapper">
      <StyledItemForm>
        <label htmlFor="item-quantitye">Amount</label>
        <input type="number" min="1" max="5" step="1" id="item-quantity" />
      </StyledItemForm>
      <div></div>
      <AddButton>ADD</AddButton>
    </div>
  );
};
export default SeparateItemForm;
