import { useEffect, useState } from "react";
import { getProductos, type Producto } from "../service/api";

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error inesperado");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Productos</h1>
        <p className="text-sm text-[color:var(--color-text-muted)]">
          Catálogo sincronizado con el backend.
        </p>
      </div>

      {loading && <p className="text-[color:var(--color-text-muted)]">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="card-surface overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-black/20 text-[color:var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-left">Categoría</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{producto.id}</td>
                  <td className="px-4 py-3">{producto.nombre}</td>
                  <td className="px-4 py-3">{producto.categoria ?? "-"}</td>
                  <td className="px-4 py-3">{producto.stock ?? "-"}</td>
                  <td className="px-4 py-3">${producto.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
