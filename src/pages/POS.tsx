export default function POS() {
  return (
    <section className="grid gap-4 lg:grid-cols-[2fr,1fr]">
      <article className="card-surface p-4">
        <h1 className="text-2xl font-semibold">Punto de venta</h1>
        <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
          Aquí puedes conectar buscador, lector de código y lista de artículos.
        </p>

        <div className="mt-4 space-y-3">
          <input
            className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-[color:var(--color-brand)]"
            placeholder="Buscar producto por nombre o código..."
            type="text"
          />
          <div className="rounded-lg border border-dashed border-white/20 p-6 text-center text-sm text-[color:var(--color-text-muted)]">
            Grid de productos (pendiente de conectar a carrito / escáner)
          </div>
        </div>
      </article>

      <aside className="card-surface p-4">
        <h2 className="text-lg font-semibold">Ticket actual</h2>
        <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
          Resumen de productos, descuentos e impuestos.
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>IVA</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between border-t border-white/10 pt-2 font-semibold">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
