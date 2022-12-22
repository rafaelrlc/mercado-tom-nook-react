import { useState } from "react";
import { key } from "../services/userApi";
import UserApi from "../services/userApi";
import AuthContext from "../store/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const params = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url = `accounts:signUp?key=${key}`;

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
      console.log(error.response.data.error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
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
  );
};

export default LoginPage;
