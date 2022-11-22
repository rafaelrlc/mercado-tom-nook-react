import Button from "../Components/UI/UI-Components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;

  &:hover {
    transition: all 0.5 ease;
  }
`;

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <Button
        onClick={() => {
          navigate("/items");
        }}
        className="bigger"
      >
        GO TO ITEMS
      </Button>
    </StyledDiv>
  );
};

export default Homepage;
