import { useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token);

  const isUserLogged = !!token;

  const loginHandler = (token) => {
    console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    console.log("foi");
    setToken(null);
    localStorage.removeItem("token");
  };

  const test = () => {
    console.log("uyeruey");
  };
  const contextValue = {
    JWT: token,
    isUserLogged: isUserLogged,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
