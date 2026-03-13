const API_BASE = "http://localhost:8000";

export async function getProductos() {
  const response = await fetch(`${API_BASE}/api/productos/listar/`);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return response.json();
}