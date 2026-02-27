## 🔗 Live Demo

[View Mini Shop Online](https://mini-shop-woad.vercel.app/)

## Mini Shop SPA

Mini Shop is a single-page application (SPA) for an online store with authentication, a per-user cart, and products loaded from a public API.  
The app is built with React and Redux Toolkit on top of a custom Webpack setup, with persistent state stored in `localStorage`.

### Features

- **Authentication & Access Control**
  - Registration and login with validation and user creation via DummyJSON API.
  - Auth state (users and current user) stored in Redux and persisted via `redux-persist`.
  - Public and private routes: guests only see auth pages, the rest of the app is available to authenticated users.

- **Notifications**
  - Success toasts on registration, login, and logout.
  - Implemented with `sonner` and configured via a global `Toaster` in the root `App`.

- **Products Catalog**
  - Products fetched from DummyJSON using RTK Query.
  - Incremental loading with a custom `useProductsPagination` hook and a “Show More” button.
  - Separate loading and error states with dedicated UI (spinner and error component).

- **Personalized Cart**
  - Cart state keyed by `userId` in `cartSlice`, so each user has a separate cart.
  - Add, increment/decrement quantity, and remove products via Redux Toolkit reducers.
  - Cart state persisted with `redux-persist` and restored on reload.
  - Total price animated using `useCartChangesAnimation` + CSS keyframes.

- **UI & UX**
  - Reusable UI components (`Button`, `Text`, `Logo`, `Wrapper`, `Spinner`, header/profile components, etc.).
  - CSS Modules for scoped styles plus a small set of global styles (reset, variables, typography).
  - SVGs used both as regular images and as React components via `@svgr/webpack`.
  - Rich media and galleries implemented with `@fancyapps/ui` (Fancybox).

### Tech Stack

- **Core:** React 18+, React Router
- **State & Data:** Redux Toolkit, RTK Query, `redux-persist`
- **Forms & Validation:** `react-hook-form`, `zod`
- **UI & Styling:** CSS Modules, global styles, `clsx`, `@svgr/webpack`, `sonner`, `@fancyapps/ui`
- **Tooling & Build:** Webpack 5, Babel, ESLint + Prettier, path aliases (`@app`, `@features`, `@shared`, etc.)

### Getting Started

#### 1. Prerequisites

- Node.js **v16+** (v18+ recommended)
- npm (bundled with Node.js)

#### 2. Installation

```bash
git clone https://github.com/W0x3R/Mini-Shop.git
cd Mini-Shop
npm install
```

#### 3. Development server

```bash
npm start
```

The app will be available at `http://localhost:3000` (the port is configured in `webpack.config.js`).

#### 4. Production build

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

#### 5. Preview production build locally

```bash
npm run preview
```

This serves the `dist/` folder so you can test the production bundle.

#### 6. Linting

```bash
npm run lint        # run static checks
npm run lint:fix    # auto-fix possible issues
```

### Quality & Extra Assignment

The extra quality assignment has been completed:

- **Lighthouse** — all categories score **99–100** (Performance, Accessibility, Best Practices, SEO).
- **Validation** — no HTML/CSS validation errors.
