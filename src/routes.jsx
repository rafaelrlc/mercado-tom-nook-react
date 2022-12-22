import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/authContext";
import Homepage from "./pages/Homepage";
import ItemType from "./pages/ItemType";
import SelectedItem from "./pages/SelectedItem";
import LoginPage from "./pages/LoginPage";

const Rotas = () => {
  const { JWT } = useContext(AuthContext);
  console.log(JWT);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
      <Route path="/home" element={<Homepage JWT={JWT}></Homepage>}></Route>
      <Route path={"/login"} element={<LoginPage></LoginPage>}></Route>
      <Route path={"/items/"} element={<ItemType></ItemType>}></Route>
      <Route
        path={`/items/:itemType`}
        element={<SelectedItem></SelectedItem>}
      ></Route>
    </Routes>
  );
};

export default Rotas;
