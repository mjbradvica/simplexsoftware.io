import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "./app/App.routes";
import { homeRoutes } from "./features/home/Home.routes";

const root = ReactDOM.createRoot(
  document.querySelector("#root") ?? new Element(),
);

const router = createBrowserRouter([appRoutes([homeRoutes()])]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
