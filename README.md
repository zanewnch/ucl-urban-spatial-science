# UCL Urban Spatial Science MSc

2026–27 UCL CASA Urban Spatial Science MSc course overview. The site is a React single-page application with client-side routes and a shared design system; its course text and sources are maintained in `app/src/content/`.

- Published site: https://zanewnch.github.io/ucl-urban-spatial-science/
- Alternate source page: https://ucl-urban-spatial-science.zanewnch.chatgpt.site/urban-spatial-science
- Routes: `/`, `/term1`, `/term2`, `/term3`, `/notes`, `/change-log`
- Build output: `site/` (including the GitHub Pages SPA fallback)

The reader path follows the selected course plan: the overview shows credits and selected modules before the year timeline; Term 1 and Term 2 begin with their selected modules; Dissertation holds the full CASA0010 detail. Notes and Change Log are linked in the secondary footer navigation. The source-backed course copy lives in [`app/src/content/`](app/src/content/).

## Local development

Requires Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Vite starts the local development server. To create and preview the production build:

```sh
npm run build
npm run preview
```

GitHub Actions builds the React app when changes are pushed to `main`, then publishes `site/` to GitHub Pages.
