import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import { Shop, Cart, Error404 } from "../pages";
import App from "./App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="shop" replace />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
