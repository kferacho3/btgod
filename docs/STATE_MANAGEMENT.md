# BTGOD Zustand State Management

This project uses a **unified Zustand store** as the single source of truth for shared frontend state.

## Store Files

```txt
src/store/
├── index.ts       # Zustand store + middleware + actions
├── selectors.ts   # Selector hooks (read/write/computed)
└── types.ts       # Store types and action contracts
```

## State Domains

| Domain | Fields |
| --- | --- |
| Theme | `theme`, `hasHydrated` |
| Cart | `cartItems` |
| Shop Controls | `shopFilter`, `shopSort` |
| Lookbook | `lookbookPrompt` |

## Middleware Strategy

- `persist`: stores selected state slices in localStorage (`btgod-store`).
- `subscribeWithSelector`: enables optimized granular subscriptions.

## Selector Pattern

Use selector hooks from `src/store/selectors.ts`:

- Read-only selectors:
  - `useThemeState`
  - `useShopState`
  - `useLookbookState`
  - `useCartState`
  - `useCartItemCount` (computed)
- Action selectors:
  - `useThemeActions`
  - `useShopActions`
  - `useLookbookActions`
  - `useCartActions`

This keeps components subscribed only to the exact slices they need.

## Domain Hook Pattern

Domain hooks combine store state with derived business logic:

- `useShopProducts`: applies filter/sort logic to catalog data.
- `useCartSummary`: resolves cart lines and computes totals.
- `useThemeSync`: syncs HTML `data-theme` attribute with store theme.

Use hooks for computation/orchestration, not as independent state containers.

## Action Conventions

- Keep actions deterministic and typed.
- Enforce simple invariants in actions (e.g., cart quantity clamping).
- Write side effects in one place where practical (e.g., theme storage key).

## Extending the Store

1. Add new types to `src/store/types.ts`.
2. Add state + actions in `src/store/index.ts`.
3. Expose via focused selectors in `src/store/selectors.ts`.
4. Create/extend domain hooks if derived logic is needed.
5. Update docs when introducing new domains or patterns.

