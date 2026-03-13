import { useEffect, useMemo, useState } from "react";
import { getInventario, type InventarioItem } from "../service/api";

export default function Inventario() {
  const [items, setItems] = useState<InventarioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getInventario();
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error inesperado");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const lowStock = useMemo(
    () => items.filter((item) => item.stock <= item.minimo).length,
    [items],
  );

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Inventario</h1>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            Control de existencias en tiempo real.
          </p>
        </div>
        {!loading && !error && (
          <div className="rounded-lg bg-amber-500/15 px-3 py-2 text-sm text-amber-300">
            Productos en mínimo: {lowStock}
          </div>
        )}
      </div>

      {loading && <p className="text-[color:var(--color-text-muted)]">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="card-surface overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-black/20 text-[color:var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 text-left">Producto</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Mínimo</th>
                <th className="px-4 py-3 text-left">Ubicación</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{item.producto}</td>
                  <td className="px-4 py-3">{item.stock}</td>
                  <td className="px-4 py-3">{item.minimo}</td>
                  <td className="px-4 py-3">{item.ubicacion ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
