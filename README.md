# BTGOD Frontend

BTGOD is a premium ecommerce frontend concept for **Be The Greatest Or Die**.
This project is focused on frontend architecture and visual direction first, with backend integrations planned next (auth, cart persistence, checkout, order management).

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Zustand (unified client state store)

## Brand Direction

- Minimal street luxury design language
- Color system built around black, white, gold, and silver
- Day/night theming with persistent preference (`localStorage`)
- Multi-page ecommerce frontend with reusable UI primitives

## Frontend Routes

- `/` home + brand hero
- `/shop` product grid
- `/shop/[slug]` product detail
- `/collections` collection index
- `/lookbook` lookbook lab
- `/cart` cart management preview
- `/account` account roadmap
- `/account/sign-in` sign-in UI

## Engineering Standards

- Feature-first code organization under `src/features`
- Unified Zustand store with typed selectors and actions
- Domain hooks for derived logic and orchestration
- Route files focused on composition instead of heavy logic
- Target file size under ~500 lines

## Internal Docs

- `docs/ARCHITECTURE.md`
- `docs/STATE_MANAGEMENT.md`

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - start development server
- `npm run lint` - run ESLint
- `npm run build` - build production bundle

## Next Phase (Backend)

- Account authentication
- Real cart/session management
- Product inventory + admin CMS
- Payments + order lifecycle
