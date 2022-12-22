import { useState } from "react";
import { key } from "../services/userApi";
import UserApi from "../services/userApi";
import AuthContext from "../store/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  let createAccount = true;
  if (props.type == "login") {
    createAccount = false;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const params = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url = `accounts:signUp?key=${key}`;

    if (createAccount === false) {
      url = `accounts:signInWithPassword?key=${key}`;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await UserApi.post(url, params, config);
      console.log(response);
      authCtx.login(response.data.idToken);
      navigate("/items");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="">{createAccount ? "Create Account" : "Login"}</label>
        <div>
          <label>E-mail:</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
