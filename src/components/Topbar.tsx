export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-sm text-neutral-300">
          Estado: <span className="text-emerald-400">Online</span>
        </div>

        <div className="text-sm text-neutral-400">
          {new Date().toLocaleString()}
        </div>
      </div>
    </header>
  );
}