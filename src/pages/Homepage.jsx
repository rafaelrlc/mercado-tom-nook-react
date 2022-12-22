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

const Homepage = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (props.JTW === null) {
      navigate("/items");
    } else {
      navigate("/login");
    }
  };

  return (
    <StyledDiv>
      <Button onClick={onClickHandler} className="bigger">
        GO TO ITEMS
      </Button>
    </StyledDiv>
  );
};

export default Homepage;
