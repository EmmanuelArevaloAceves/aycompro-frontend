export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock?: number;
  categoria?: string;
}

export interface Pedido {
  id: number;
  cliente: string;
  total: number;
  estado: string;
  fecha?: string;
}

export interface InventarioItem {
  id: number;
  producto: string;
  stock: number;
  minimo: number;
  ubicacion?: string;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`);

  if (!response.ok) {
    throw new Error(`No se pudo cargar ${endpoint}`);
  }

  return response.json() as Promise<T>;
}

export function getProductos() {
  return request<Producto[]>("/api/productos/listar/");
}

export function getPedidos() {
  return request<Pedido[]>("/api/pedidos/listar/");
}

export function getInventario() {
  return request<InventarioItem[]>("/api/inventario/listar/");
}
