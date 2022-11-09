import Button from "../Components/UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
`;

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <Button
        onClick={() => {
          navigate("/items");
        }}
      >
        GO TO ITEMS
      </Button>
    </StyledDiv>
  );
};

export default Homepage;
