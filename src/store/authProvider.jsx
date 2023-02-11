import { useState, useReducer } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isUserLogged = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    console.log("foi");
    setToken(null);
    localStorage.removeItem("token");
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
