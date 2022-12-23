import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.JTW !== null) {
      navigate("/items");
    }
  }, []);

  if (JWT !== null) {
    return <h1>oi</h1>;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoute;
