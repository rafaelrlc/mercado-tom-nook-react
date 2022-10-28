import styled from "styled-components";

const Banner = styled.div`
  @font-face {
    font-family: "FinkHeavy";
    src: url("../UI/FinkHeavy.ttf");
  }

  width: 60%;
  background-color: #148fa4;
  border: 3px solid #87c2df;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-family: "FinkHeavy";
  margin: auto;
  margin-top: 1.5rem;
  border-radius: 1.25rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: #14899e;
  }

  & h3 {
    margin: 0;
    margin-top: 0.5rem;
  }
`;

const ItemBar = (props) => {
  let itemShow;
  if (props.type === "fish") {
    itemShow = "Peixes";
  } else if (props.type === "bugs") {
    itemShow = "Insetos";
  } else if (props.type === "sea") {
    itemShow = "Mar";
  }
  return (
    <Banner>
      <h3>{itemShow}</h3>
    </Banner>
  );
};

export default ItemBar;
