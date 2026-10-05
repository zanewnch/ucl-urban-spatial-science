# UCL Urban Spatial Science MSc

2026–27 UCL CASA Urban Spatial Science MSc course overview. The site is a React single-page application with client-side routes and a shared design system; its course text and sources are maintained in `app/src/content/`.

- Published GitHub Pages site: [https://zanewnch.github.io/ucl-urban-spatial-science/](https://zanewnch.github.io/ucl-urban-spatial-science/)
- Alternate source page: https://ucl-urban-spatial-science.zanewnch.chatgpt.site/urban-spatial-science
- Routes: `/`, `/term1`, `/casa0005`, `/term2`, `/term3`, `/notes`, `/change-log`
- Build output: `site/` (including the GitHub Pages SPA fallback)

The reader path follows the selected course plan: the overview shows credits and selected modules before the year timeline; Term 1 and Term 2 begin with their selected modules; Dissertation holds the full CASA0010 detail. Notes and Change Log are linked in the secondary footer navigation. The source-backed course copy lives in [`app/src/content/`](app/src/content/).

The [CASA0005 guide](https://zanewnch.github.io/ucl-urban-spatial-science/casa0005) combines the [2026/27 Moodle outline](https://moodle.ucl.ac.uk/course/view.php?id=62319&section=1#tabs-tree-start), assessment dates and material visibility with a bilingual ten-week study guide. Its eight practical handbook chapters are also published under `/casa0005-handbook/` from the upstream repository pinned as the `vendor/CASA0005repo` submodule. The Pages workflow checks out that submodule and copies its generated `docs/` site into the deployable output; clone this repository with `git clone --recurse-submodules` or run `git submodule update --init --recursive`. The handbook is licensed CC BY-SA 4.0; author and source attribution are retained in the copied handbook pages.

Guide-specific content checks: `node scripts/validate-casa0005.mjs` (weekly workflows, anchors, source URL safety and translation coverage). The illustrative R code is not a locally executed R acceptance test.

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
