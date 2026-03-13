import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 p-6 border-r border-zinc-800">
        <h2 className="text-xl font-bold mb-6">AyComPro POS</h2>
        <nav className="space-y-3 text-sm">
          <a href="/" className="block hover:text-blue-400">POS</a>
          <a href="/productos" className="block hover:text-blue-400">Productos</a>
          <a href="/inventario" className="block hover:text-blue-400">Inventario</a>
          <a href="/pedidos" className="block hover:text-blue-400">Pedidos</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="h-16 border-b border-zinc-800 flex items-center px-6">
          <h1 className="text-lg font-semibold">Panel Administrativo</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  )
}