import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.JWT !== null) {
      navigate("/items");
    }
  }, []);

  if (props.JWT !== null) {
    return <CircularProgress />;
  } else {
    return <>{props.children}</>;
  }
};

export default PublicRoute;
