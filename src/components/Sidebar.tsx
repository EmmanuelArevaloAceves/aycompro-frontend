import { NavLink } from "react-router-dom";

const linkBase =
  "block rounded-lg px-3 py-2 text-sm transition hover:bg-neutral-800";
const linkActive = "bg-neutral-800 text-white";
const linkInactive = "text-neutral-300";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-neutral-800 bg-neutral-900/40 p-4">
      <div className="mb-6">
        <div className="text-lg font-semibold">AyComPro POS</div>
        <div className="text-xs text-neutral-400">Panel Administrativo</div>
      </div>

      <nav className="space-y-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/pos"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          POS
        </NavLink>

        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/inventario"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          Inventario
        </NavLink>

        <NavLink
          to="/pedidos"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          Pedidos
        </NavLink>
      </nav>
    </aside>
  );
}