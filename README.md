# Frank Hulley-Jones, Portfolio

Personal portfolio site built with React and Vite.

## Stack

- React 19
- React Router 7
- Vite 8
- Sass (with `sass-mq` breakpoint helper)
- ESLint flat config

**Node requirement:** `24.11.0` (see `.nvmrc`)

## Commands

```bash
npm run dev      # local dev server
npm run lint     # lint check
npm run build    # production build
Routes
Path	Page
/	Home
/internet	Internet article
/nomow	No Mow article
/texas	Texas article
/cairosounds	Cairo Sounds article
Project Structure

src/
  pages/
    home/           # Home page and components
    articles/       # Article page shell, config, and per-article files
      components/   # Shared article blocks (Text, Media, Quote, etc.)
      pages/        # Per-article composition files
  components/
    layout/         # Footer, ContactLinks
  styles/
    modules/        # Tokens, mixins, typography, colors
    pages/          # Page-level styles
    components/     # Component-level styles
  assets/           # Images and video per article
```
