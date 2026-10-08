# UCL Urban Spatial Science MSc

2026–27 UCL CASA Urban Spatial Science MSc course overview. The site is a React single-page application with client-side routes and a shared design system; its course text and sources are maintained in `app/src/content/`.

- Published GitHub Pages site: [https://zanewnch.github.io/ucl-urban-spatial-science/](https://zanewnch.github.io/ucl-urban-spatial-science/)
- Alternate source page: https://ucl-urban-spatial-science.zanewnch.chatgpt.site/urban-spatial-science
- Overview routes: `/`, `/term1`, `/term2`, `/term3`, `/notes`, `/notes/casa0005`, `/change-log`
- Permanent course routes: `/casa0001`, `/casa0005`, `/casa0007`, `/casa0013`, `/casa0002`, `/casa0011`, `/casa0025`, `/casa0034`, `/casa0006`, `/casa0008`, `/casa0023`, `/casa0028`, `/casa0029`, `/casa0033`, `/casa0010`
- Build output: `site/` (including the GitHub Pages SPA fallback)

The reader path follows the selected course plan: the overview shows credits and selected modules before the year timeline; term pages contain introduction-only course cards and links to permanent course pages. The shared navigation separates Home from a Courses dropdown listing the selected Term 1 and Term 2 courses, Dissertation, and the remaining courses under Other, linking to all 15 courses. Every course uses a dedicated detail-page stylesheet and the same redesigned template: a compact navy introduction header, Current / Previous cohorts material tabs, then a collapsed Course information section containing basic and official information. Current materials are the default; `?materials=history` shares the previous-cohort view. Previous-cohort references retain their actual years and open directly without an outer accordion. The shared material component supports browser history, legacy anchors and keyboard navigation. `shared-ui.css` owns the common page shell and reading controls across overview, term, notes and change-log pages; page styles handle their specific layouts. Legacy content wrappers are normalized at render time; original sources, downloads and anchor IDs are retained. Tables and code blocks scroll within their own containers. Missing current materials are explicitly marked as unconfirmed. Notes and Change Log are linked in the secondary footer navigation. Shared summaries and material status live in [`app/src/data/courses.json`](app/src/data/courses.json); detailed course sections live in [`app/src/content/courses/`](app/src/content/courses/). Legacy term-page course anchors redirect to the corresponding permanent page and section.

The [CASA0005 guide](https://zanewnch.github.io/ucl-urban-spatial-science/casa0005) combines the [2026/27 Moodle outline](https://moodle.ucl.ac.uk/course/view.php?id=62319&section=1#tabs-tree-start), assessment dates and material visibility with a bilingual ten-week study guide. Its eight practical handbook chapters are published under `/casa0005-handbook/` from the CASA0005 source snapshot stored as ordinary files in [`vendor/CASA0005repo/`](vendor/CASA0005repo/). The snapshot comes from the [upstream repository](https://github.com/andrewmaclachlan/CASA0005repo) at commit `c855a108e6969e7d2a490b6aa176f63b83fbf087`. It omits nested Git metadata, source ignore-matched files (including the root `allisonhorst_images/` copies), and local build caches (`CASA0005_cache/` and `rosm.cache/`); the published copies under `docs/` are retained. The Pages workflow copies that `docs/` site into the deployable output. The handbook is licensed CC BY-SA 4.0; author and source attribution are retained in the copied handbook pages.

## Importing course repositories

For future course-material imports, record the upstream repository URL and exact commit, then add a clean snapshot under `vendor/<repository>/` as normal parent-repository content. Omit nested `.git` metadata, files excluded by the source repository's ignore rules, and local build caches; retain the upstream README, license, and attribution. Add concise study notes to the vendored README with links to the original material, and document the source, pinned version, and any deliberate exclusions here. When importing snapshots, explicitly stage the intended files if the vendored `.gitignore` would otherwise hide them. Update site-copy scripts and deployment configuration to read directly from the parent checkout without submodule initialization.

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
