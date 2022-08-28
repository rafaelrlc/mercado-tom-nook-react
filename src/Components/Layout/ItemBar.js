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
  font-size: 2.5rem;
  font-family: "FinkHeavy";
  margin: auto;
  margin-top: 1.5rem;
  border-radius: 1.25rem;
  padding: 0.25rem 1rem;
`;

const ItemBar = (props) => {
  return <Banner>{props.type}</Banner>;
};

export default ItemBar;
