import React from "react";

const AuthContext = React.createContext({
  JWT: "" | null,
  isUserLogged: false | true,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
