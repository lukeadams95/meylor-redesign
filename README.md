# Meylor Chiropractic & Acupuncture — website redesign

Production build of the Claude Design prototype (`Meylor Chiropractic Home.dc.html`) for
Meylor Chiropractic & Acupuncture in Lenexa, KS. Every page in the prototype is here, with the
same markup, inline styles, copy and images, served at real URLs instead of `#/` hash routes.

## Stack

- Vite + React 18 + TypeScript
- React Router 6 (`BrowserRouter`; every route keeps its trailing slash, e.g. `/services/golf/`)
- react-helmet-async for per-page `<title>` and meta description

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

## Hosting

The site is a single-page app, so every path has to fall back to `index.html`. Fallbacks are included
for Netlify (`public/_redirects`) and Vercel (`vercel.json`). On any other host, set up the same rewrite.

## Project layout

```
src/
  pages/                  One component per page (53 pages, plus Blog.tsx for the blog index and articles)
  routes.generated.ts     URL → page component (code-split per page)
  components/layout/      Top bar, header, CTA banner, footer, exit-intent popup
    *.markup.tsx          Markup for those parts, taken from the design
    Header.tsx            Header behavior: dropdowns, mobile menu, active link, Google rating badge
    ExitIntentPopup.tsx   Desktop-only, once per visit, closes with X / backdrop / Esc
    Layout.tsx            Page frame + client-side navigation for plain <a href="/…"> links
    PageShell.tsx         Scroll-to-top / Back-button scroll restore, scroll-reveal animations
  components/blog/        Blog data loading and Markdown rendering
  hooks/                  Custom video players, team photo lightbox, ReviewWave booking widget
  data/home.ts            Homepage lists (services, conditions, steps, FAQ, areas)
  styles/global.css       Global CSS and responsive rules from the design
  styles/hover.css        :hover rules from the design
public/
  uploads/                Images and videos used by the site (only the files that are referenced)
  blog-posts.json         89 blog posts; posts dated in the future stay hidden until their date
```

Page markup was converted from the design file by script, so each page's JSX matches the
prototype element for element. It is ordinary TSX now, so edit it directly.

## Not wired up yet

These come from the design as-is:

- **Forms** (homepage, Contact, Free Consultation) only display. Submitting does nothing, and
  nothing is sent anywhere.
- **No 404 page.** As in the prototype, an unknown address shows the homepage.
- The homepage "Areas We Serve" pills link to `/areas/<city>/`, which is how they are in the design.
  The city pages themselves live at `/<city>/` (for example `/lenexa/`).
