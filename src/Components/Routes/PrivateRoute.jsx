import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.JWT === null) {
      navigate("/home");
    }
  }, [props.JWT]);

  if (props.JWT === null) {
    return (
      <div className="">
        <h1>PUT A SPINNER HERE</h1>
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
};

export default PrivateRoute;
