import styled from "styled-components";

const Banner = styled.div`
  @font-face {
    font-family: "FinkHeavy";
    src: url("../UI/FinkHeavy.ttf");
  }

  width: 50%;
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

  & h3 {
    margin: 0;
    margin-top: 0.5rem;
  }
`;

const ItemBar = (props) => {
  return (
    <Banner>
      <h3>{props.type}</h3>
    </Banner>
  );
};

export default ItemBar;
