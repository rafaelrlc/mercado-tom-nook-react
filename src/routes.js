import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemType from "./pages/ItemType";
import SelectedItem from "./pages/SelectedItem";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
      <Route path="/home" element={<Homepage></Homepage>}></Route>
      <Route path={"/items/"} element={<ItemType></ItemType>}></Route>
      <Route
        path={`/items/:itemType`}
        element={<SelectedItem></SelectedItem>}
      ></Route>
    </Routes>
  );
};

export default Rotas;
