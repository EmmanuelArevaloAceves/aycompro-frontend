import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/pos": "POS",
  "/productos": "Productos",
  "/inventario": "Inventario",
  "/pedidos": "Pedidos",
};

export default function Topbar() {
  const location = useLocation();
  const pageTitle = useMemo(() => titles[location.pathname] ?? "AyComPro POS", [location.pathname]);

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-[color:var(--color-surface)]/70 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-[color:var(--color-text-muted)]">Panel administrativo</p>
          <h1 className="text-lg font-semibold">{pageTitle}</h1>
        </div>

        <div className="text-right text-sm">
          <p className="text-emerald-400">Backend: conectado</p>
          <p className="text-[color:var(--color-text-muted)]">{new Date().toLocaleString()}</p>
        </div>
      </div>
    </header>
  );
}
