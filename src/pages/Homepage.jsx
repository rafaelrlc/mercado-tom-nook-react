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
    console.log(props.JWT);
    if (props.JWT === null) {
      navigate("/login");
    }
    if (props.JWT !== null) {
      console.log("teste");
      navigate("/items");
    }
  };

  return (
    <StyledDiv>
      <ACButton onClick={onClickHandler} className="bigger">
        GO TO ITEMS
      </ACButton>
    </StyledDiv>
  );
};

export default Homepage;
