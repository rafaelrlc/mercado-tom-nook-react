import { useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token);

  const isUserLogged = !!token;

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    JWT: token,
    isUserLogged: isUserLogged,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
