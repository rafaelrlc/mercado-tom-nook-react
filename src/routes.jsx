import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/authContext";
import Homepage from "./pages/Homepage";
import ItemType from "./pages/ItemType";
import SelectedItem from "./pages/SelectedItem";
import LoginPage from "./pages/LoginPage";

import PrivateRoute from "./Components/Routes/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute";

const Rotas = () => {
  const { JWT } = useContext(AuthContext);

  return (
    <Routes>
      <Route path={"*"} element={<Navigate to={"/home"}></Navigate>}></Route>
      <Route path={"/"} element={<Navigate to={"/home"}></Navigate>}></Route>
      <Route
        path={"/home"}
        element={
          <PublicRoute JWT={JWT}>
            <Homepage></Homepage>
          </PublicRoute>
        }
      ></Route>
      <Route
        path={"/login"}
        element={
          <PublicRoute JWT={JWT}>
            <LoginPage type="login"></LoginPage>
          </PublicRoute>
        }
      ></Route>
      <Route
        path={"/create"}
        element={
          <PublicRoute JWT={JWT}>
            <LoginPage type="create"></LoginPage>
          </PublicRoute>
        }
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
