import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const PrivateRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (props.JWT === null) {
    //   navigate("/home");
    // }
  }, [props.JWT]);

  return <div>{props.children}</div>;
};

export default PrivateRoute;
