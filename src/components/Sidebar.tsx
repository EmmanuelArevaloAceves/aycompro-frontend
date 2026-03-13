import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/pos", label: "POS" },
  { to: "/productos", label: "Productos" },
  { to: "/inventario", label: "Inventario" },
  { to: "/pedidos", label: "Pedidos" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-[color:var(--color-surface)] p-4">
      <div className="mb-6">
        <div className="text-lg font-semibold">AyComPro POS</div>
        <div className="text-xs text-[color:var(--color-text-muted)]">Sistema de gestión</div>
      </div>

      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-[color:var(--color-brand)]/20 text-white"
                  : "text-[color:var(--color-text-muted)] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
