import styled from "styled-components";
const StyledCard = styled.div`
  border-radius: 18px;
  box-shadow: 0 1px 4px #a5ad47ff;
`;

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

export default Card;
