# AyComPro Frontend

Panel administrativo en React + Vite para consumir `aycompro_pos_backend`.

## Ejecutar proyecto

```bash
npm install
npm run dev
```

## Configuración de API

Puedes apuntar a otro backend con una variable de entorno:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

Endpoints usados actualmente:

- `/api/productos/listar/`
- `/api/inventario/listar/`
- `/api/pedidos/listar/`

## Rutas del frontend

- `/` Dashboard
- `/pos` Punto de venta
- `/productos` Catálogo
- `/inventario` Stock
- `/pedidos` Órdenes

## Dónde ajustar estilos (colorimetría, formas, etc.)

1. **Tema global**: `src/styles/theme.css`
   - Colores base (`--color-bg`, `--color-surface`, `--color-brand`, etc.)
   - Radio de bordes (`--radius-base`)
2. **Estilos base y componentes reutilizables**: `src/index.css`
   - Fondo y tipografía global
   - Clase utilitaria `.card-surface`
3. **Layout general**:
   - `src/layout/AppLayout.tsx`
   - `src/components/Sidebar.tsx`
   - `src/components/Topbar.tsx`
4. **Estilo específico por vista**:
   - `src/pages/*.tsx`

Con ese orden puedes personalizar todo el look sin tocar lógica de negocio.
