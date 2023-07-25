import ACButton from "../Components/UI/UI-Components/Button";
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
    navigate("/items");
  };

  return (
    <StyledDiv>
      <ACButton onClick={onClickHandler} className="bigger">
        Sing In
      </ACButton>
    </StyledDiv>
  );
};

export default Homepage;
