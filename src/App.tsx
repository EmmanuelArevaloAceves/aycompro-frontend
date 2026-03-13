import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"

function Dashboard() {
  return <div>Bienvenido al POS 🔥</div>
}

function Productos() {
  return <div>Lista de productos aquí</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productos" element={<Productos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}