import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
i;

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<} />
        <Route path="/:repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
