import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/authContext";
import Homepage from "./pages/Homepage";
import ItemType from "./pages/ItemType";
import SelectedItem from "./pages/SelectedItem";
import LoginPage2 from "./pages/LoginPage2";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./Components/Routes/PrivateRoute";
const Rotas = () => {
  const { JWT } = useContext(AuthContext);
  console.log(JWT);

  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/home"}></Navigate>}></Route>
      <Route path={"/home"} element={<Homepage JWT={JWT}></Homepage>}></Route>
      <Route
        path={"/login"}
        element={<LoginPage2 type="login"></LoginPage2>}
      ></Route>
      <Route
        path={"/create"}
        element={<LoginPage2 type="create"></LoginPage2>}
      ></Route>
      <Route
        path={"/items/"}
        element={
          <PrivateRoute JWT={JWT}>
            <ItemType></ItemType>
          </PrivateRoute>
        }
      ></Route>
      <Route
        path={`/items/:itemType`}
        element={
          <PrivateRoute JWT={JWT}>
            <SelectedItem></SelectedItem>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Rotas;
