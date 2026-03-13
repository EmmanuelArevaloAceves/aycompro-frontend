import { useEffect, useState } from "react";
import { getPedidos, type Pedido } from "../service/api";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPedidos();
        setPedidos(data);
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
        <h1 className="text-2xl font-semibold">Pedidos</h1>
        <p className="text-sm text-[color:var(--color-text-muted)]">
          Visualiza el estado general de órdenes y pagos.
        </p>
      </div>

      {loading && <p className="text-[color:var(--color-text-muted)]">Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4 lg:grid-cols-2">
          {pedidos.map((pedido) => (
            <article key={pedido.id} className="card-surface p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-medium">Pedido #{pedido.id}</p>
                <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-xs text-indigo-300">
                  {pedido.estado}
                </span>
              </div>
              <p className="text-sm">Cliente: {pedido.cliente}</p>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                Fecha: {pedido.fecha ?? "Sin fecha"}
              </p>
              <p className="mt-2 text-lg font-semibold">Total: ${pedido.total}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
