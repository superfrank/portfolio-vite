# React Migration Kickoff Plan (Webpack Reference ➜ Vite App)

This project will migrate `reference/portfolio-webpack` into the current Vite-based React app **incrementally**, keeping progress visible, low-risk, and easy to learn from.

## Learning-First Workflow

- Move **one small piece at a time**.
- No big-bang rewrite.
- Every coding step should be followed by a **line-by-line explanation** so implementation details are clear.
- After each step, pause to verify before proceeding.

## Goals

- Preserve the current look and feel while modernizing implementation.
- Keep and reuse **Sass**.
- Rebuild UI in modern React component structure.
- Replace legacy animation logic with **Framer Motion** progressively.
- Avoid shipping regressions during migration.

## Migration Order

### 1) Set up the Vite entry shell first (Phase 1 start)

- Confirm entry flow: `index.html` → `src/main.jsx` → `src/App.jsx`.
- Render only:
  - logo
  - your name
- Wire Sass correctly in Vite (`sass` dependency + style entry import).
- Keep scope intentionally small for fast parity checks.

### 2) Establish Sass architecture for incremental migration

- Organize partials:
  - `src/styles/abstracts` (variables, mixins, functions)
  - `src/styles/base` (reset, typography, globals)
  - `src/styles/layout` (layout-level styles)
  - `src/styles/components` (component-level partials)
- Create one Sass entry file (e.g., `src/styles/main.scss`).
- Port only the styles required by each migrated component.

### 3) Migrate sections one-by-one

Recommended order:

1. Header/Nav
2. Hero
3. About
4. Projects
5. Contact
6. Footer

For each section:

- build/port the React component
- migrate only relevant Sass
- move needed assets to Vite-friendly paths
- verify visual parity before starting the next section

### 4) Add Framer Motion after static parity

- First achieve static layout parity.
- Then reintroduce animation using Framer Motion.
- Reuse shared variants where appropriate.
- Respect reduced-motion preferences for accessibility.

### 5) Final cleanup and hardening

- Remove dead/legacy assumptions and unused files.
- Normalize imports and asset organization.
- Validate responsive behavior and spacing consistency.
- Document the final structure for maintainability.

## Source Mapping Baseline

- Legacy reference source: `reference/portfolio-webpack`
- New active app: Vite React app in `src/`

Track migration status in this document or a dedicated checklist with:

- source path (webpack)
- destination path (vite)
- status (`not started`, `in progress`, `done`)
- notes (dependencies, animation behavior, style coupling)

## Definition of Done for Phase 1

Phase 1 is complete when:

- Vite app renders a minimal top section with **logo + name**.
- Sass is correctly connected and compiling.
- Structure is ready for section-by-section migration.
- No extra sections have been migrated yet (intentional scope control).

## Current Step

Start with Phase 1 only:

- scaffold entry shell
- connect Sass
- render logo + name

Then pause and review before moving to Header/Nav.
