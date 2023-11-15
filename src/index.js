import { createRoot } from "react-dom/client";
import React from "react";

import { ReduxProvider } from "./store/store";
import AppRoutes from "./Routes";
import "./styles/index.scss";

const container = document.getElementById("app__container");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <AppRoutes />
    </ReduxProvider>
  </React.StrictMode>
);
