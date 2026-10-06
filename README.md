# UCL Urban Spatial Science MSc

2026–27 UCL CASA Urban Spatial Science MSc course overview. The site is a React single-page application with client-side routes and a shared design system; its course text and sources are maintained in `app/src/content/`.

- Published GitHub Pages site: [https://zanewnch.github.io/ucl-urban-spatial-science/](https://zanewnch.github.io/ucl-urban-spatial-science/)
- Alternate source page: https://ucl-urban-spatial-science.zanewnch.chatgpt.site/urban-spatial-science
- Overview routes: `/`, `/term1`, `/term2`, `/term3`, `/notes`, `/notes/casa0005`, `/change-log`
- Permanent course routes: `/casa0001`, `/casa0005`, `/casa0007`, `/casa0013`, `/casa0002`, `/casa0011`, `/casa0025`, `/casa0034`, `/casa0006`, `/casa0008`, `/casa0023`, `/casa0028`, `/casa0029`, `/casa0033`, `/casa0010`
- Build output: `site/` (including the GitHub Pages SPA fallback)

The reader path follows the selected course plan: the overview shows credits and selected modules before the year timeline; term pages contain introduction-only course cards and links to permanent course pages. The shared navigation separates Home from a Courses dropdown listing the selected Term 1 and Term 2 courses, Dissertation, and the remaining courses under Other, linking to all 15 courses. Every course uses a dedicated detail-page stylesheet and the same redesigned template: a navy introduction header, responsive chapter navigation, basic-information cards, current materials and course content, official information, then collapsed previous-cohort or editorial references. Legacy content wrappers are normalized at render time; original sources, downloads and anchor IDs are retained. Tables and code blocks scroll within their own containers. Missing current materials are explicitly marked as unconfirmed. Notes and Change Log are linked in the secondary footer navigation. Shared summaries and material status live in [`app/src/data/courses.json`](app/src/data/courses.json); detailed course sections live in [`app/src/content/courses/`](app/src/content/courses/). Legacy term-page course anchors redirect to the corresponding permanent page and section.

The [CASA0005 guide](https://zanewnch.github.io/ucl-urban-spatial-science/casa0005) combines the [2026/27 Moodle outline](https://moodle.ucl.ac.uk/course/view.php?id=62319&section=1#tabs-tree-start), assessment dates and material visibility with a bilingual ten-week study guide. Its eight practical handbook chapters are also published under `/casa0005-handbook/` from the upstream repository pinned as the `vendor/CASA0005repo` submodule. The Pages workflow checks out that submodule and copies its generated `docs/` site into the deployable output; clone this repository with `git clone --recurse-submodules` or run `git submodule update --init --recursive`. The handbook is licensed CC BY-SA 4.0; author and source attribution are retained in the copied handbook pages.

Course content checks: `node scripts/validate-courses.mjs` (15 course pages, uniform cards, legacy anchors, translations and cohort boundaries), plus `node scripts/validate-casa0005.mjs` (weekly workflows, anchors, source URL safety and translation coverage). The illustrative R code is not a locally executed R acceptance test.

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
