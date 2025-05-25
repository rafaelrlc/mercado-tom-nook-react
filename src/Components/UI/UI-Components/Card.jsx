import styled from "styled-components";
const StyledCard = styled.div`
  border-radius: 18px;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  margin: 1rem auto;

`;

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

export default Card;
