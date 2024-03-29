import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  @font-face {
    font-family: "FinkHeavy";
    src: url("../UI/FinkHeavy.ttf");
  }
  cursor: pointer;
  font: inherit;
  margin: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-bottom: 5px;
  padding: 0.25rem 1.25rem;
  font-family: "FinkHeavy";
  border-radius: 1.5rem;
  box-shadow: 0 5px 0px #d1a788;
  border: 2px solid #c59d81;
  background-color: #f8c59e;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  transition: all 0.2 ease;
  text-align: center;

  &:hover {
    transition: all 0.2 ease;
    background-color: #eeb990;
    top: 8px;
  }

  &:active {
    margin-top: 5px;
    transition: all 0.2 ease;
    background-color: #efc3a1;
    box-shadow: none;
  }

  &:last-child {
    margin-right: 10rem;
  }

  &:first-child {
    margin-left: 10rem;
  }

  &.bigger {
    padding: 3rem;
    font-size: 2rem;
    box-shadow: 0 10px 0px #d1a788;
    border: 3px solid #c59d81;
  }
  &.bigger:active {
    margin-top: 12px;
    box-shadow: none;
  }
`;

const ACButton = (props) => {
  return (
    <StyledButton
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
};

export default ACButton;
