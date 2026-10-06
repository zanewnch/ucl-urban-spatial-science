var e=`\r
    :root {\r
      color-scheme: light;\r
      --ink: #102a43;\r
      --muted: #5f7184;\r
      --paper: #f7f4ee;\r
      --card: #fffdf9;\r
      --line: #dbe2e8;\r
      --navy: #082b49;\r
      --blue: #1e6f8f;\r
      --coral: #e9755b;\r
      --gold: #e8b24c;\r
      --mint: #d9eee7;\r
      --shadow: 0 18px 50px rgba(16, 42, 67, .10);\r
    }\r
    * { box-sizing: border-box; }\r
    body {\r
      margin: 0;\r
      color: var(--ink);\r
      background: radial-gradient(circle at 10% 0%, rgba(232,178,76,.16), transparent 28rem), linear-gradient(180deg, #fbfaf7 0%, var(--paper) 100%);\r
      font-family: Inter, "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif;\r
      line-height: 1.65;\r
    }\r
    a { color: var(--blue); }\r
    a:focus-visible { outline: 3px solid var(--coral); outline-offset: 4px; }\r
    .wrap { width: min(1000px, calc(100% - 36px)); margin: 0 auto; }\r
    .topbar { position: sticky; top: 0; z-index: 2; padding: 16px 0; border-bottom: 1px solid rgba(16,42,67,.10); background: rgba(255,253,249,.9); backdrop-filter: blur(12px); }\r
    .topbar-inner { display: flex; justify-content: space-between; align-items: center; gap: 20px; min-width: 0; }\r
    .brand { color: var(--navy); font-size: 1.05rem; font-weight: 850; text-decoration: none; }\r
    nav { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px 16px; min-width: 0; }\r
    nav a { display: inline-flex; align-items: center; min-height: 40px; color: var(--ink); font-size: .9rem; font-weight: 750; text-decoration: none; }\r
    nav a[aria-current="page"] { color: var(--coral); }\r
    main { padding: 54px 0 72px; }\r
    .eyebrow { color: var(--coral); font-size: .76rem; font-weight: 850; letter-spacing: .14em; text-transform: uppercase; }\r
    h1 { max-width: 760px; margin: 10px 0 16px; color: var(--navy); font-size: clamp(2.5rem, 7vw, 5rem); letter-spacing: -.06em; line-height: .98; }\r
    .lede { max-width: 690px; margin: 0; color: #3d5368; font-size: 1.12rem; }\r
    .summary { display: flex; flex-wrap: wrap; gap: 10px; margin: 26px 0 34px; }\r
    .pill { padding: 7px 12px; border: 1px solid var(--line); background: var(--card); color: var(--navy); font-size: .86rem; font-weight: 800; }\r
    .course-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }\r
    .course { display: flex; flex-direction: column; min-width: 0; min-height: 245px; padding: 23px; border: 1px solid var(--line); border-top: 4px solid var(--coral); background: var(--card); box-shadow: 0 6px 20px rgba(16,42,67,.04); }\r
    .course.optional { border-top-color: var(--blue); }\r
    .course-type { align-self: flex-start; padding: 4px 9px; border-radius: 999px; background: var(--mint); color: var(--navy); font-size: .74rem; font-weight: 850; }\r
    .optional .course-type { background: #e5edf2; }\r
    .code { margin: 17px 0 2px; color: var(--coral); font-size: .82rem; font-weight: 900; letter-spacing: .08em; }\r
    .course h2 { margin: 0; color: var(--navy); font-size: 1.35rem; line-height: 1.25; }\r
    .course p { margin: 10px 0 18px; color: #486074; font-size: .94rem; }\r
    .course-dossier { margin: 0 0 18px; padding: 12px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\r
    .course-dossier summary { min-height: 40px; display: flex; align-items: center; color: var(--blue); font-size: .88rem; font-weight: 850; cursor: pointer; }\r
    .course-dossier-content { padding-top: 8px; color: #40576b; font-size: .9rem; }\r
    .course-dossier-content h3 { margin: 16px 0 5px; color: var(--navy); font-size: 1rem; }\r
    .course-dossier-content p { margin: 7px 0; }\r
    .course-dossier-content ul, .course-dossier-content ol { margin: 6px 0 12px; padding-left: 21px; }\r
    .course-dossier-content li + li { margin-top: 4px; }\r
    .qm-weeks { display: grid; gap: 10px; margin: 12px 0 20px; }\r
    .qm-week { padding: 14px 16px; border: 1px solid var(--line); background: #fbfaf7; }\r
    .qm-week h4 { margin: 0 0 7px; color: var(--navy); font-size: .98rem; }\r
    .qm-week p { margin: 5px 0; }\r
    .qm-week strong { color: var(--navy); }\r
    .qm-source { margin: 10px 0 0 !important; padding-top: 8px; border-top: 1px solid var(--line); font-size: .78rem !important; }\r
    .qm-source a { display: inline-flex; align-items: center; gap: 5px; color: var(--blue); font-weight: 800; text-decoration: none; }\r
    .qm-source a:hover { text-decoration: underline; }\r
    .qm-weeks { grid-template-columns: repeat(auto-fit, minmax(min(100%, 310px), 1fr)); }\r
    .qm-week { border-radius: 12px; box-shadow: 0 3px 12px rgba(25, 45, 68, .045); }\r
    .qm-week h4 { display: flex; align-items: baseline; gap: 8px; }\r
    .qm-week h4 .week-tag { color: #7a8796; font: 700 .72rem/1.2 system-ui, sans-serif; letter-spacing: .08em; text-transform: uppercase; }\r
    .qm-week .qm-source { display: flex; flex-wrap: wrap; gap: 6px 14px; }\r
    .qm-week .qm-source a { padding: 5px 9px; border-radius: 999px; background: #edf3f7; }\r
    .qm-setup { margin: 12px 0 18px; padding: 16px; border: 1px solid var(--line); background: #fbfaf7; }\r
    .qm-setup h4 { margin: 14px 0 5px; }\r
    .qm-setup h4:first-child { margin-top: 0; }\r
    .qm-setup pre { overflow-x: auto; padding: 12px; background: #102a43; color: #fff; font-size: .84rem; }\r
    .qm-setup code { overflow-wrap: anywhere; }\r
    .qm-setup li + li { margin-top: 5px; }
    .environment-setup > strong { display: block; margin-bottom: 8px; color: var(--blue); }
    .environment-guide { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--line); }
    .environment-guide summary { color: var(--blue); font-weight: 800; cursor: pointer; }
    .environment-guide ol, .environment-guide ul { padding-left: 22px; }
    .environment-guide pre { white-space: pre-wrap; overflow-wrap: anywhere; }
    .course-dossier-content a { overflow-wrap: anywhere; }\r
    .course-dossier-note { padding: 12px 14px; border-left: 3px solid var(--gold); background: #fff7dc; color: #4d5d6a; }\r
    .course-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--line); }\r
    .credits { color: var(--muted); font-size: .82rem; font-weight: 800; white-space: nowrap; }\r
    .details { font-size: .86rem; font-weight: 850; text-decoration: none; }\r
    .note { margin-top: 22px; padding: 16px 18px; border-left: 4px solid var(--gold); background: rgba(255,253,249,.82); color: #4d5d6a; font-size: .9rem; }\r
    .learning-route { margin-top: 34px; padding: 22px; border: 1px solid var(--line); background: var(--card); }\r
    .learning-route h2 { margin: 0 0 8px; color: var(--navy); font-size: 1.35rem; }\r
    .route-note { max-width: 780px; margin: 0 0 16px; color: #486074; font-size: .92rem; }\r
    .route-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }\r
    .route-step { min-width: 0; padding: 14px; border-top: 3px solid var(--blue); background: #f3f6f6; }\r
    .route-step strong { display: block; margin-bottom: 6px; color: var(--navy); }\r
    .route-step p { margin: 0; color: #486074; font-size: .86rem; }\r
    .route-sources { margin: 13px 0 0; color: var(--muted); font-size: .8rem; }\r
    .research-detail { margin-top: 2px; }\r
    .research-body { overflow-wrap: anywhere; }\r
    .research-body > .code, .research-body > h3 { display: none; }\r
    .research-body .meta { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0; }\r
    .research-body .pill { padding: 3px 8px; font-size: .77rem; }\r
    .research-body .module-dossier-heading { margin: 18px 0 10px; font-weight: 800; }\r
    .research-body .module-dossier-heading span { display: block; color: var(--coral); font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; }\r
    .research-body .module-dossier-index { display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 6px 12px; margin: 10px 0 18px; }\r
    .research-body .module-dossier-index a { font-size: .82rem; }\r
    .research-body .module-detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\r
    .research-body .module-detail-block { min-width: 0; padding: 14px; border: 1px solid var(--line); background: #fbfaf7; }\r
    .research-body .module-detail-block.full { grid-column: 1 / -1; }\r
    .research-body h4 { margin: 0 0 7px; color: var(--navy); font-size: .94rem; }\r
    .research-body p, .research-body li { overflow-wrap: anywhere; }\r
    .research-body .module-source-line { margin-top: 14px; }\r
    .research-detail:target { scroll-margin-top: 130px; }\r
    @media (max-width: 680px) { .research-body .module-detail-grid { grid-template-columns: 1fr; } }\r
    @media (max-width: 820px) {\r
      .topbar { padding: 10px 0; }\r
      .topbar-inner { align-items: flex-start; flex-direction: column; gap: 8px; }\r
      .topbar-inner > * { width: 100%; }\r
      .brand { display: inline-block; max-width: 100%; overflow-wrap: anywhere; }\r
      nav { justify-content: flex-start; gap: 6px; }\r
      nav a { padding: 6px 10px; border: 1px solid var(--line); background: rgba(255,253,249,.78); }\r
      nav a[aria-current="page"] { border-color: var(--navy); background: var(--navy); color: #fffaf1; }\r
      main { padding-top: 40px; }\r
      .route-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
    }\r
    @media (max-width: 680px) {\r
      .course-list { grid-template-columns: 1fr; }\r
      .course { min-height: 0; }\r
      .summary { gap: 8px; }\r
      .learning-route { padding: 18px; }\r
    }\r
    @media (max-width: 480px) {\r
      .wrap { width: min(100% - 24px, 1000px); }\r
      .topbar nav { display: flex; flex-wrap: nowrap; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin; }\r
      .topbar nav a { flex: 0 0 auto; justify-content: flex-start; min-height: 44px; white-space: nowrap; }\r
      main { padding-top: 32px; }\r
      .course { padding: 19px; }\r
      .course-footer { align-items: flex-start; flex-direction: column; gap: 8px; }\r
      .details { display: inline-flex; align-items: center; min-height: 40px; }\r
      .note { padding: 14px; overflow-wrap: anywhere; }\r
      .route-grid { grid-template-columns: 1fr; }\r
    }\r
    @media (max-width: 340px) {\r
      .topbar nav { flex-wrap: nowrap; }\r
      .summary { display: grid; grid-template-columns: 1fr; }\r
      h1 { font-size: 2.35rem; }\r
    }\r
    @media (prefers-reduced-motion: no-preference) {\r
      .course { transition: transform .2s ease, box-shadow .2s ease; }\r
      .course:hover { transform: translateY(-3px); box-shadow: var(--shadow); }\r
    }

    /* CASA0007: current materials first, with secondary information collapsed. */
    .casa0007-course .qm-current { margin: 12px 0 22px; padding: 20px; border: 1px solid var(--line); border-left: 4px solid var(--blue); border-radius: 12px; background: #f5f9fb; }
    .casa0007-course .qm-cohort-label { color: var(--blue); font-size: .78rem; font-weight: 850; }
    .casa0007-course .qm-current h3 { color: var(--navy); margin: 9px 0; font-size: 1.15rem; }
    .casa0007-course .qm-current-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin: 16px 0; }
    .casa0007-course .qm-current-links a { display: block; padding: 12px; background: white; border: 1px solid var(--line); border-radius: 8px; font-weight: 800; text-decoration: none; overflow-wrap: anywhere; }
    .casa0007-course .qm-current-links small { display: block; margin-top: 6px; color: var(--muted); font-size: .72rem; font-weight: 500; }
    .casa0007-course .qm-cohort-note { font-size: .82rem; color: #536777; }
    .casa0007-course .qm-subdetails { margin: 14px 0; border-top: 1px solid var(--line); padding-top: 10px; }
    .casa0007-course .qm-subdetails summary { cursor: pointer; padding: 9px 0; min-height: 44px; color: var(--blue); font-weight: 800; }
    .casa0007-course summary { display: list-item; }
    .casa0007-course summary:focus-visible, .casa0007-course a:focus-visible { outline: 3px solid var(--blue); outline-offset: 3px; }
    .casa0007-course .qm-archive-links { display: flex; flex-wrap: wrap; gap: 10px 18px; margin: 12px 0; font-size: .82rem; }
    .casa0007-course .qm-history { background: #faf9f6; padding: 12px 16px; border-radius: 10px; }
    @media (max-width: 600px) {
      .casa0007-course .qm-current { padding: 16px; }
      .casa0007-course .qm-current-links { grid-template-columns: 1fr; }
      .casa0007-course .qm-history { padding: 12px; }
    }\r
`;export{e as t};