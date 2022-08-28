import styled from "styled-components";
const StyledCard = styled.div`
  border-radius: 18px;
`;

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

export default Card;
