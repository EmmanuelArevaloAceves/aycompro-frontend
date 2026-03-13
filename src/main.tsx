import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS";
import Productos from "./pages/Productos";
import Inventario from "./pages/Inventario";
import Pedidos from "./pages/Pedidos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "pos", element: <POS /> },
      { path: "productos", element: <Productos /> },
      { path: "inventario", element: <Inventario /> },
      { path: "pedidos", element: <Pedidos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);