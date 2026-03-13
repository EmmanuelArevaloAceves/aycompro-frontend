import { Link } from "react-router-dom";

const cards = [
  { title: "POS", description: "Ventas rápidas y emisión de ticket", to: "/pos" },
  {
    title: "Productos",
    description: "Altas, bajas, edición y visualización de catálogo",
    to: "/productos",
  },
  {
    title: "Inventario",
    description: "Stock disponible, mínimos y movimientos",
    to: "/inventario",
  },
  { title: "Pedidos", description: "Seguimiento de órdenes y estado", to: "/pedidos" },
];

export default function Dashboard() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-[color:var(--color-text-muted)]">
          Bienvenido a AyComPro POS.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.to} to={card.to} className="card-surface block p-4 transition hover:-translate-y-0.5">
            <p className="text-lg font-semibold">{card.title}</p>
            <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
