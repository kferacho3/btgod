# BTGOD Frontend Architecture

This project follows a feature-first architecture with a unified state layer.

## Goals

- Keep route files in `src/app` as composition-only entry points.
- Keep components small and cohesive (target: under 500 lines per file).
- Centralize shared state in one Zustand store and consume it via selectors.
- Isolate business logic in hooks and keep visual components presentation-focused.

## Folder Layout

```txt
src/
├── app/                       # Next.js App Router routes (composition layer)
├── components/                # Reusable cross-feature UI/layout components
├── features/                  # Feature modules by domain
│   ├── home/
│   ├── shop/
│   ├── cart/
│   └── lookbook/
├── hooks/                     # Domain hooks (store + derived logic)
├── lib/                       # Shared constants, content models, pure helpers
└── store/                     # Unified Zustand state (types, store, selectors)
```

## Layer Responsibilities

### 1) Route Layer (`src/app`)

- Owns route boundaries and static metadata.
- Composes feature and shared components.
- Avoids deep business/state logic.

### 2) Feature Layer (`src/features`)

- Owns domain-specific UI and interaction flows.
- Can consume selectors and domain hooks.
- Should not define global app state directly.

### 3) Shared UI Layer (`src/components`)

- Reusable components used by multiple features.
- Examples: header, footer, cards, section headings, theme initializer.

### 4) State Layer (`src/store`)

- Single source of truth for app-wide UI and cart state.
- Typed state/actions in `types.ts`.
- Store setup in `index.ts`.
- Read/write access through `selectors.ts`.

### 5) Domain Hook Layer (`src/hooks`)

- Encapsulates derived data and orchestration logic.
- Examples:
  - `useShopProducts` for filtered/sorted catalog output.
  - `useCartSummary` for computed cart totals.
  - `useThemeSync` for HTML theme attribute sync.

## Architectural Conventions

- Prefer composition over monolithic pages.
- Keep files focused on one responsibility.
- Prefer pure helpers and typed models over ad-hoc inline logic.
- For global concerns (theme/cart/filter/sort/prompt), use the unified store.
- Use selectors rather than reading raw store state repeatedly in components.

## Adding New Features

1. Create a feature module in `src/features/<domain>/`.
2. Add or update store state only if it is shared/global.
3. Expose UI through small components and domain hooks.
4. Keep route files thin and compose feature components in `src/app`.

