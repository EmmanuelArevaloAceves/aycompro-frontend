import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Inventario from "./pages/Inventario";
import POS from "./pages/POS";
import Pedidos from "./pages/Pedidos";
import Productos from "./pages/Productos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
