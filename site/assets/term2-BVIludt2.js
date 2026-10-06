var e=`\r
    :root {\r
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
      --lavender: #e9e4f4;\r
      --shadow: 0 18px 50px rgba(16, 42, 67, .10);\r
    }\r
\r
    * { box-sizing: border-box; }\r
    html { scroll-behavior: smooth; }\r
    body {\r
      margin: 0;\r
      color: var(--ink);\r
      background:\r
        radial-gradient(circle at 10% 0%, rgba(232,178,76,.16), transparent 28rem),\r
        linear-gradient(180deg, #fbfaf7 0%, var(--paper) 100%);\r
      font-family: Inter, "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif;\r
      line-height: 1.65;\r
    }\r
\r
    a { color: var(--blue); }\r
    .wrap { width: min(1160px, calc(100% - 36px)); margin: 0 auto; }\r
\r
    .topbar {\r
      padding: 18px 0;\r
      border-bottom: 1px solid rgba(16,42,67,.10);\r
      background: rgba(255,253,249,.82);\r
      backdrop-filter: blur(12px);\r
      position: sticky;\r
      top: 0;\r
      z-index: 10;\r
    }\r
    .topbar-inner { display: flex; justify-content: space-between; align-items: center; gap: 20px; }\r
    .eyebrow { letter-spacing: .15em; text-transform: uppercase; font-size: .74rem; font-weight: 800; color: var(--coral); }\r
    .brand { font-weight: 800; letter-spacing: -.02em; }\r
    nav { display: flex; gap: 18px; flex-wrap: wrap; justify-content: flex-end; }\r
    nav a { text-decoration: none; color: var(--ink); font-size: .9rem; font-weight: 700; }\r
    nav a:hover { color: var(--coral); }\r
\r
    .hero { padding: 76px 0 54px; }\r
    .hero-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 42px; align-items: end; }\r
    h1 { font-size: clamp(2.45rem, 6vw, 5.6rem); line-height: .96; letter-spacing: -.065em; max-width: 780px; margin: 13px 0 24px; }\r
    .lede { font-size: clamp(1.05rem, 2vw, 1.28rem); max-width: 700px; color: #3d5368; }\r
    .hero-note { border-left: 4px solid var(--coral); padding: 18px 20px; background: rgba(255,253,249,.72); box-shadow: var(--shadow); }\r
    .hero-note strong { display: block; font-size: 1.15rem; margin-bottom: 4px; }\r
    .stamp { display: inline-flex; align-items: center; gap: 8px; padding: 7px 11px; border-radius: 999px; color: var(--navy); background: var(--mint); font-size: .8rem; font-weight: 800; }\r
\r
    section { padding: 28px 0 66px; }\r
    .section-head { display: flex; justify-content: space-between; gap: 24px; align-items: end; margin-bottom: 22px; }\r
    h2 { font-size: clamp(1.7rem, 3vw, 2.5rem); letter-spacing: -.045em; margin: 0; }\r
    h3 { letter-spacing: -.02em; margin-top: 0; }\r
    .section-kicker { color: var(--coral); font-weight: 800; font-size: .78rem; letter-spacing: .13em; text-transform: uppercase; }\r
    .muted { color: var(--muted); }\r
    .back-home { color: var(--blue); text-decoration: none; font-size: .82rem; font-weight: 800; white-space: nowrap; }\r
    .back-home:hover { color: var(--coral); }\r
    .index-panel { margin-top: 28px; padding: 22px 24px; background: rgba(255,253,249,.78); border: 1px solid var(--line); box-shadow: var(--shadow); }\r
    .index-panel h2 { font-size: 1.35rem; margin-bottom: 13px; }\r
    .index-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px 16px; margin: 0; padding: 0; list-style: none; }\r
    .index-list a { display: block; padding: 9px 11px; background: #eef3f6; color: var(--ink); text-decoration: none; font-weight: 750; font-size: .9rem; }\r
    .index-list a:hover { background: var(--mint); color: var(--navy); }\r
    .subhead { margin: 26px 0 12px; }\r
    .subhead h3 { margin: 0; }\r
\r
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 28px 0 0; }\r
    .stat { padding: 20px; background: var(--navy); color: #fff; min-height: 126px; }\r
    .stat:nth-child(2) { background: var(--blue); }\r
    .stat:nth-child(3) { background: var(--coral); }\r
    .stat:nth-child(4) { background: #546b86; }\r
    .stat b { display: block; font-size: 1.85rem; line-height: 1; margin-bottom: 10px; }\r
    .stat span { font-size: .9rem; opacity: .9; }\r
\r
    .timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\r
    .term { background: var(--card); border: 1px solid var(--line); padding: 24px; min-height: 220px; position: relative; overflow: hidden; }\r
    .term::after { content: attr(data-term); position: absolute; right: -8px; bottom: -22px; font-size: 6rem; font-weight: 900; color: rgba(30,111,143,.08); line-height: 1; }\r
    .term-label { display: inline-block; padding: 4px 9px; border-radius: 999px; background: var(--lavender); font-size: .76rem; font-weight: 800; }\r
    .term:nth-child(2) .term-label { background: #ffe7d9; }\r
    .term:nth-child(3) .term-label { background: var(--mint); }\r
    .term ul { padding-left: 20px; margin-bottom: 0; position: relative; z-index: 1; }\r
\r
    .callout { padding: 20px 22px; border: 1px solid #e6c77f; background: #fff7dc; margin: 18px 0 0; }\r
    .callout strong { color: #8a5b00; }\r
\r
    .module-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }\r
    .module-card { background: var(--card); border: 1px solid var(--line); padding: 21px; box-shadow: 0 6px 20px rgba(16,42,67,.04); }\r
    .module-card.core { border-top: 5px solid var(--coral); }\r
    .module-card.option { border-top: 5px solid var(--blue); }\r
    .module-card h3 { margin-bottom: 6px; font-size: 1.1rem; }\r
    .code { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: .78rem; font-weight: 800; color: var(--coral); }\r
    .meta { display: flex; gap: 7px; flex-wrap: wrap; margin: 11px 0; }\r
    .pill { padding: 3px 8px; border-radius: 999px; background: #eef3f6; color: #40576b; font-size: .74rem; font-weight: 800; }\r
    .module-card p { margin: 8px 0 0; color: #486074; font-size: .94rem; }\r
    details summary { cursor: pointer; color: var(--blue); font-weight: 800; font-size: .85rem; margin-top: 12px; }\r
    details p { font-size: .88rem; }\r
\r
    .pathway-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }\r
    .pathway { background: var(--card); border: 1px solid var(--line); padding: 24px; min-height: 260px; position: relative; }\r
    .pathway:nth-child(1) { border-top: 5px solid var(--gold); }\r
    .pathway:nth-child(2) { border-top: 5px solid var(--coral); }\r
    .pathway:nth-child(3) { border-top: 5px solid var(--blue); }\r
    .pathway:nth-child(4) { border-top: 5px solid #6f65a8; }\r
    .pathway h3 { margin-bottom: 4px; }\r
    .pathway .focus { color: var(--muted); font-size: .9rem; margin: 0 0 14px; }\r
    .pathway ol { padding-left: 22px; margin-bottom: 0; }\r
    .pathway li { margin: 6px 0; }\r
    .pathway li a { text-decoration: none; }\r
\r
    .table-wrap { overflow-x: auto; background: var(--card); border: 1px solid var(--line); }\r
    table { width: 100%; border-collapse: collapse; min-width: 730px; }\r
    table.module-map { min-width: 1080px; }\r
    th, td { padding: 15px 16px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }\r
    th { background: #edf3f5; font-size: .78rem; text-transform: uppercase; letter-spacing: .08em; color: #486074; }\r
    tr:last-child td { border-bottom: 0; }\r
    td:first-child { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; color: var(--coral); font-weight: 800; white-space: nowrap; }\r
\r
    .dependency { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; align-items: stretch; }\r
    .dep { background: var(--card); border: 1px solid var(--line); padding: 18px; position: relative; }\r
    .dep:not(:last-child)::after { content: "→"; position: absolute; right: -20px; top: 38%; color: var(--coral); font-size: 1.5rem; font-weight: 900; z-index: 2; }\r
    .dep strong { display: block; margin-bottom: 8px; }\r
    .dep small { color: var(--muted); }\r
\r
    .electives { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }\r
    .list-card { background: var(--card); border: 1px solid var(--line); padding: 22px; }\r
    .list-card ul { margin: 0; padding-left: 20px; }\r
    .list-card li { margin: 6px 0; }\r
\r
    .search-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }\r
    input[type="search"] { width: min(340px, 100%); padding: 11px 14px; border-radius: 999px; border: 1px solid #cbd6de; background: #fff; color: var(--ink); font: inherit; }\r
    .small-note { font-size: .84rem; color: var(--muted); }\r
    .source-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\r
    .source { padding: 16px 18px; background: rgba(255,253,249,.72); border: 1px solid var(--line); }\r
    .source b { display: block; margin-bottom: 4px; }\r
    footer { padding: 34px 0 60px; color: var(--muted); font-size: .86rem; }\r
\r
    @media (max-width: 820px) {\r
      .hero-grid, .electives { grid-template-columns: 1fr; }\r
      .stats { grid-template-columns: repeat(2, 1fr); }\r
      .timeline, .pathway-grid, .module-grid { grid-template-columns: 1fr; }\r
      .dependency { grid-template-columns: 1fr 1fr; }\r
      .dep:not(:last-child)::after { content: "↓"; right: 48%; top: auto; bottom: -22px; }\r
      .dep:nth-child(2)::after { content: ""; }\r
      .source-list { grid-template-columns: 1fr; }\r
      .index-list { grid-template-columns: repeat(2, 1fr); }\r
      .topbar-inner { align-items: flex-start; flex-direction: column; gap: 8px; }\r
      nav { display: flex; width: 100%; justify-content: flex-start; gap: 4px 8px; }\r
      nav a { display: inline-flex; align-items: center; min-height: 40px; padding: 6px 9px; border: 1px solid var(--line); background: rgba(255,253,249,.78); }\r
      nav a.is-active { border-color: var(--navy); background: var(--navy); color: #fffaf1; }\r
    }\r
    @media (max-width: 520px) {\r
      .wrap { width: min(100% - 24px, 1160px); }\r
      .hero { padding-top: 50px; }\r
      .stats { grid-template-columns: 1fr; }\r
      .dependency { grid-template-columns: 1fr; }\r
      .dep:not(:last-child)::after { content: "↓"; right: 48%; top: auto; bottom: -22px; }\r
      .index-list { grid-template-columns: 1fr; }\r
    }\r


\r
    :root {\r
      --ink: #112b3f;\r
      --muted: #6a7882;\r
      --paper: #f5f0e6;\r
      --card: #fffdf8;\r
      --line: #d8d3c8;\r
      --navy: #0a2d48;\r
      --blue: #2d6b83;\r
      --coral: #d66f5d;\r
      --gold: #c9973e;\r
      --mint: #dcebe3;\r
      --lavender: #e6e1ef;\r
      --shadow: 0 18px 48px rgba(17, 43, 63, .09);\r
      --ease-editorial: cubic-bezier(.22, .75, .2, 1);\r
    }\r
\r
    html { scroll-padding-top: 84px; }\r
    body {\r
      color: var(--ink);\r
      background:\r
        radial-gradient(circle at 8% 0%, rgba(201,151,62,.15), transparent 29rem),\r
        radial-gradient(circle at 94% 30%, rgba(45,107,131,.08), transparent 31rem),\r
        var(--paper);\r
      font-family: Inter, "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif;\r
    }\r
    h1, h2, h3, .brand { font-family: Georgia, "Times New Roman", "Noto Serif TC", serif; }\r
    h1, h2 { font-weight: 600; }\r
    a { position: relative; }\r
    a:not(.index-list a):not(.brand):not(.back-home)::after {\r
      content: "";\r
      position: absolute;\r
      left: 0;\r
      right: 100%;\r
      bottom: -.18em;\r
      height: 1px;\r
      background: currentColor;\r
      transition: right .28s var(--ease-editorial);\r
    }\r
    a:not(.index-list a):not(.brand):not(.back-home):hover::after { right: 0; }\r
    :focus-visible { outline: 3px solid rgba(201,151,62,.68); outline-offset: 3px; }\r
\r
    .topbar {\r
      padding: 16px 0;\r
      border-bottom: 1px solid rgba(17,43,63,.14);\r
      background: rgba(245,240,230,.88);\r
      transition: padding .35s var(--ease-editorial), box-shadow .35s ease;\r
    }\r
    .topbar.is-compact { padding: 9px 0; box-shadow: 0 10px 25px rgba(17,43,63,.08); }\r
    .topbar-inner { min-height: 38px; }\r
    .eyebrow { color: var(--coral); letter-spacing: .2em; }\r
    .brand { color: var(--navy); text-decoration: none; font-size: 1.08rem; }\r
    nav a { color: var(--ink); padding: 5px 0; transition: color .25s ease; }\r
    nav a::before, .index-list a::before {\r
      content: "";\r
      position: absolute;\r
      left: 0;\r
      bottom: 0;\r
      width: 0;\r
      height: 2px;\r
      background: var(--coral);\r
      transition: width .28s var(--ease-editorial);\r
    }\r
    nav a:hover::before, nav a.is-active::before, .index-list a.is-active::before { width: 100%; }\r
    nav a.is-active, .index-list a.is-active { color: var(--coral); }\r
\r
    .hero {\r
      position: relative;\r
      isolation: isolate;\r
      padding: 88px 0 62px;\r
      color: #fffaf1;\r
      background:\r
        linear-gradient(135deg, rgba(10,45,72,.98), rgba(17,71,87,.95)),\r
        var(--navy);\r
      overflow: hidden;\r
    }\r
    .hero::before {\r
      content: "";\r
      position: absolute;\r
      inset: 0;\r
      z-index: -1;\r
      opacity: .38;\r
      background-image:\r
        linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),\r
        linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);\r
      background-size: 44px 44px;\r
      mask-image: linear-gradient(120deg, black, transparent 72%);\r
    }\r
    .hero::after {\r
      content: "";\r
      position: absolute;\r
      width: 420px;\r
      height: 420px;\r
      right: -150px;\r
      top: -210px;\r
      border: 1px solid rgba(201,151,62,.48);\r
      border-radius: 50%;\r
      box-shadow: 0 0 0 22px rgba(201,151,62,.06), 0 0 0 44px rgba(201,151,62,.04);\r
      z-index: -1;\r
    }\r
    .hero-grid { align-items: center; }\r
    .hero-grid > * { min-width: 0; }\r
    .hero h1 { max-width: 820px; letter-spacing: -.055em; text-wrap: balance; }\r
    .lede { color: rgba(255,250,241,.82); max-width: 680px; overflow-wrap: anywhere; }\r
    .hero-note {\r
      border-left: 3px solid var(--gold);\r
      background: rgba(255,253,248,.1);\r
      box-shadow: none;\r
      backdrop-filter: blur(8px);\r
    }\r
    .hero-note p { color: rgba(255,250,241,.78); }\r
    .stamp { color: var(--navy); background: var(--gold); }\r
\r
    section { padding: 54px 0 78px; }\r
    section:nth-of-type(even) { background: rgba(255,253,248,.36); }\r
    .section-head { align-items: end; margin-bottom: 28px; }\r
    .section-head h2 { color: var(--navy); }\r
    .section-kicker { color: var(--coral); letter-spacing: .18em; }\r
    .back-home { color: var(--blue); transition: color .2s ease, transform .2s var(--ease-editorial); display: inline-block; }\r
    .back-home:hover { color: var(--coral); transform: translateX(4px); }\r
\r
    .stats { gap: 0; margin-top: 42px; border-top: 1px solid rgba(255,250,241,.3); border-bottom: 1px solid rgba(255,250,241,.3); }\r
    .stat, .stat:nth-child(2), .stat:nth-child(3), .stat:nth-child(4) {\r
      position: relative;\r
      min-height: 118px;\r
      padding: 20px 22px;\r
      background: transparent;\r
      color: #fffaf1;\r
      border-right: 1px solid rgba(255,250,241,.2);\r
    }\r
    .stat:last-child { border-right: 0; }\r
    .stat::before { content: ""; position: absolute; left: 22px; top: 0; width: 32px; height: 3px; background: var(--gold); }\r
    .stat:nth-child(2)::before { background: var(--coral); }\r
    .stat:nth-child(3)::before { background: #91c6bc; }\r
    .stat:nth-child(4)::before { background: #b7a4d5; }\r
    .stat b { font-family: Georgia, "Times New Roman", serif; font-size: 2.05rem; }\r
    .stat span { color: rgba(255,250,241,.7); }\r
\r
    .index-panel {\r
      margin-top: 30px;\r
      background: rgba(255,253,248,.08);\r
      border: 1px solid rgba(255,250,241,.25);\r
      border-top: 3px solid var(--gold);\r
      box-shadow: none;\r
      backdrop-filter: blur(8px);\r
    }\r
    .index-panel h2 { color: #fffaf1; font-size: 1.5rem; }\r
    .index-list { gap: 8px; }\r
    .index-list a {\r
      color: rgba(255,250,241,.82);\r
      background: rgba(255,255,255,.08);\r
      border: 1px solid rgba(255,255,255,.12);\r
      transition: background .25s ease, color .25s ease, transform .25s var(--ease-editorial);\r
    }\r
    .index-list a:hover, .index-list a.is-active { color: #fffaf1; background: rgba(255,255,255,.15); transform: translateY(-2px); }\r
\r
    .timeline { position: relative; gap: 0; }\r
    .timeline::before {\r
      content: "";\r
      position: absolute;\r
      left: 13%;\r
      right: 13%;\r
      top: 38px;\r
      height: 1px;\r
      background: linear-gradient(90deg, var(--coral), var(--gold), var(--blue));\r
    }\r
    .term {\r
      z-index: 1;\r
      margin: 0 8px;\r
      padding: 32px 26px 26px;\r
      background: rgba(255,253,248,.9);\r
      border: 1px solid var(--line);\r
      border-top: 4px solid var(--coral);\r
      box-shadow: 0 8px 22px rgba(17,43,63,.04);\r
      transition: transform .35s var(--ease-editorial), box-shadow .35s ease;\r
    }\r
    .term:nth-child(2) { border-top-color: var(--gold); }\r
    .term:nth-child(3) { border-top-color: var(--blue); }\r
    .term:hover { transform: translateY(-6px); box-shadow: var(--shadow); }\r
    .term::after { color: rgba(17,43,63,.06); }\r
    .term-label { background: var(--lavender); }\r
    .term:nth-child(2) .term-label { background: #f7e3bb; }\r
    .term:nth-child(3) .term-label { background: var(--mint); }\r
\r
    .callout { border: 0; border-left: 4px solid var(--gold); background: #fbf2d8; color: #4f4635; }\r
    .callout strong { color: #8a641f; }\r
\r
    .module-grid, .pathway-grid { gap: 18px; }\r
    .module-card, .pathway, .list-card, .source {\r
      background: rgba(255,253,248,.92);\r
      border: 1px solid var(--line);\r
      box-shadow: none;\r
      transition: transform .35s var(--ease-editorial), box-shadow .35s ease, border-color .25s ease;\r
    }\r
    .module-card { min-width: 0; padding: 24px; border-top: 3px solid var(--blue); }\r
    .module-card.core { border-top-color: var(--coral); }\r
    .module-card.option:hover, .module-card.core:hover, .pathway:hover, .list-card:hover {\r
      transform: translateY(-5px);\r
      border-color: rgba(45,107,131,.48);\r
      box-shadow: var(--shadow);\r
    }\r
    .pathway { min-height: 260px; padding: 28px; }\r
    .pathway:nth-child(1) { border-top: 3px solid var(--gold); }\r
    .pathway:nth-child(2) { border-top: 3px solid var(--coral); }\r
    .pathway:nth-child(3) { border-top: 3px solid var(--blue); }\r
    .pathway:nth-child(4) { border-top: 3px solid #7466a5; }\r
    .module-card h3, .pathway h3, .list-card h3 { color: var(--navy); }\r
    .featured-module { grid-column: 1 / -1; }\r
    .module-detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 26px; margin-top: 18px; }\r
    .module-detail-block { padding-top: 14px; border-top: 1px solid var(--line); }\r
    .module-detail-block.full { grid-column: 1 / -1; }\r
    .module-detail-block h4 { margin: 0 0 8px; color: var(--navy); font-size: .98rem; letter-spacing: .01em; }\r
    .module-detail-block p { margin: 0 0 8px; }\r
    .module-detail-block ul { margin: 7px 0 0; padding-left: 1.25rem; }\r
    .module-detail-block li + li { margin-top: 5px; }\r
    .module-detail-note { padding: 13px 15px; background: #f8eadf; border-left: 3px solid var(--coral); }\r
    .module-detail-note strong { color: var(--navy); }\r
    .section-source-link { margin-left: .45em; font-size: .7em; font-weight: 700; white-space: nowrap; }\r
    .module-source-line { margin-top: 17px; padding-top: 13px; border-top: 1px dashed var(--line); font-size: .84rem; color: var(--muted); }\r
    .module-dossier { margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--line); }\r
    .module-dossier-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; margin-bottom: 13px; }\r
    .module-dossier-heading span { color: var(--coral); font-size: .76rem; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; }\r
    .module-dossier-heading strong { color: var(--navy); font-size: .98rem; }\r
    .module-dossier-index { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 6px; }\r
    .module-dossier-index a { padding: 7px 9px; border: 1px solid var(--line); background: #f1f4f2; color: var(--navy); font-size: .78rem; font-weight: 800; text-decoration: none; }\r
    .module-dossier-index a:hover { background: var(--mint); color: var(--blue); }\r
    .module-dossier-section, .module-source-line { scroll-margin-top: 94px; }\r
    .module-dossier-toggle { appearance: none; -webkit-appearance: none; position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 10px; min-width: 0; margin-top: 8px; padding: 10px 14px; border: 1px solid var(--navy); background: var(--navy); color: #fffaf1; font: inherit; font-size: .84rem; font-weight: 850; cursor: pointer; transition: background .2s ease, color .2s ease, transform .2s var(--ease-editorial); }\r
    .module-dossier-toggle .toggle-label { display: block; overflow-wrap: anywhere; }\r
    .module-dossier-toggle:hover { background: var(--blue); border-color: var(--blue); transform: translateY(-2px); }\r
    .module-dossier-toggle:focus-visible { outline: 3px solid var(--gold); outline-offset: 3px; }\r
    .module-dossier-toggle .toggle-icon { display: inline-grid; place-items: center; width: 1.2em; height: 1.2em; border: 1px solid rgba(255,250,241,.6); font-size: 1rem; line-height: 1; }\r
    .module-dossier-content { margin-top: 17px; }\r
    .module-dossier-content[hidden] { display: none; }\r
    .code { color: var(--coral); letter-spacing: .04em; }\r
    .pill { background: #edf1ef; color: #3f5c68; border: 1px solid rgba(63,92,104,.12); }\r
\r
    .table-wrap { border-color: var(--line); box-shadow: 0 8px 24px rgba(17,43,63,.04); }\r
    table { background: rgba(255,253,248,.96); }\r
    table.module-map { min-width: 1120px; }\r
    th { position: sticky; top: 65px; z-index: 2; background: var(--navy); color: rgba(255,250,241,.82); border-bottom: 0; }\r
    td { transition: background .2s ease, color .2s ease; }\r
    tbody tr { transition: opacity .25s ease, background .25s ease; }\r
    tbody tr:hover { background: #f8efdb; }\r
    tbody tr:hover td:first-child { color: var(--coral); }\r
    td:first-child { color: var(--navy); }\r
    tbody tr[data-source="ucl"] { background: #eef3f0; }\r
    tbody tr[hidden], .module-card[hidden] { display: none; }\r
\r
    .filter-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 20px 0 4px; }\r
    .filter-chip {\r
      appearance: none;\r
      border: 1px solid var(--line);\r
      border-radius: 999px;\r
      padding: 8px 12px;\r
      color: var(--muted);\r
      background: rgba(255,253,248,.8);\r
      font: inherit;\r
      font-size: .78rem;\r
      font-weight: 800;\r
      cursor: pointer;\r
      transition: color .2s ease, background .2s ease, border-color .2s ease, transform .2s var(--ease-editorial);\r
    }\r
    .filter-chip:hover { transform: translateY(-2px); color: var(--navy); border-color: var(--blue); }\r
    .filter-chip.is-active { color: #fffaf1; background: var(--navy); border-color: var(--navy); }\r
    .filter-chip[data-filter="big-data"].is-active { background: var(--gold); border-color: var(--gold); color: var(--navy); }\r
    .filter-chip[data-filter="smart-cities"].is-active { background: var(--coral); border-color: var(--coral); }\r
    .filter-chip[data-filter="data-visualisation"].is-active { background: var(--blue); border-color: var(--blue); }\r
    .filter-chip[data-filter="urban-modelling"].is-active { background: #7466a5; border-color: #7466a5; }\r
    .filter-chip[data-filter="ucl"].is-active { background: #4b8176; border-color: #4b8176; }\r
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }\r
    input[type="search"] { border-color: var(--line); background: var(--card); }\r
    input[type="search"]:focus { border-color: var(--blue); box-shadow: 0 0 0 4px rgba(45,107,131,.12); outline: none; }\r
\r
    .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s var(--ease-editorial) var(--reveal-delay, 0ms), transform .7s var(--ease-editorial) var(--reveal-delay, 0ms); }\r
    .reveal.is-visible { opacity: 1; transform: translateY(0); }\r
    .hero .reveal { transform: translateY(12px); }\r
    .hero .reveal.is-visible { transform: translateY(0); }\r
    .subhead { border-left: 3px solid var(--gold); padding-left: 13px; }\r
    .source { background: rgba(255,253,248,.68); }\r
    footer { border-top: 1px solid var(--line); }\r
\r
    @media (max-width: 820px) {\r
      .hero { padding: 62px 0 44px; }\r
      .timeline::before { display: none; }\r
      .term { margin: 0; }\r
      .module-detail-grid { grid-template-columns: 1fr; }\r
      .module-detail-block.full { grid-column: auto; }\r
      th { top: 55px; }\r
      .stats { gap: 0; }\r
      .stat { border-bottom: 1px solid rgba(255,250,241,.2); }\r
      .topbar { padding: 10px 0; }\r
      .topbar-inner { align-items: flex-start; gap: 8px; }\r
      .topbar-inner > div { min-width: 0; }\r
      .brand { display: inline-block; max-width: 100%; overflow-wrap: anywhere; }\r
      .topbar nav { width: 100%; justify-content: flex-start; gap: 6px; }\r
      .topbar nav a { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 7px 10px; border: 1px solid var(--line); background: rgba(255,253,248,.78); line-height: 1.25; }\r
      .topbar nav a.is-active { border-color: var(--navy); background: var(--navy); color: #fffaf1; }\r
      .section-head { align-items: flex-start; flex-direction: column; gap: 10px; }\r
      .module-card, .pathway, .term, .list-card, .source, .stat, .dep { min-width: 0; }\r
      .module-dossier-index a { min-height: 40px; display: inline-flex; align-items: center; }\r
      .table-wrap { max-width: 100%; overscroll-behavior-x: contain; }\r
    }\r
    @media (max-width: 520px) {\r
      .hero { padding-top: 50px; }\r
      .hero h1 { font-size: clamp(2.7rem, 15vw, 4.25rem); }\r
      .hero-grid { grid-template-columns: minmax(0, 1fr); }\r
      .hero-grid > *, .hero-note, .lede { width: 100%; max-width: 100%; min-width: 0; }\r
      .hero-note, .hero-note p, .lede { overflow-wrap: anywhere; word-break: break-word; }\r
      .wrap { width: min(100% - 24px, 1160px); }\r
      section { padding: 42px 0 56px; }\r
      .topbar nav { display: flex; flex-wrap: nowrap; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin; gap: 6px; }\r
      .topbar nav a { flex: 0 0 auto; justify-content: flex-start; padding-inline: 10px; white-space: nowrap; }\r
      .index-panel { padding: 16px; }\r
      .index-list { grid-template-columns: 1fr; }\r
      .module-card, .pathway, .term, .list-card { padding: 19px; }\r
      .module-dossier-heading { align-items: flex-start; flex-direction: column; gap: 4px; }\r
      .module-dossier, .module-dossier-toggle { width: 100%; }\r
      .module-dossier-toggle { display: flex; justify-content: space-between; align-items: center; min-height: 44px; text-align: left; padding: 12px 14px; font-size: .9rem; visibility: visible; opacity: 1; }\r
      .stats { grid-template-columns: 1fr 1fr; }\r
      .stat, .stat:nth-child(2), .stat:nth-child(3), .stat:nth-child(4) { min-height: 104px; padding: 18px 14px; }\r
      .stat::before { left: 14px; }\r
      .filter-toolbar { align-items: stretch; }\r
      .filter-chip { flex: 1 1 auto; }\r
      .filter-chip { min-height: 42px; }\r
      .module-dossier-index { gap: 6px; }\r
      .module-dossier-index a { flex: 1 1 auto; justify-content: center; }\r
      .table-wrap { border-radius: 2px; }\r
      th, td { padding: 12px; }\r
      .site-shell .table-wrap:has(> table.module-map) {\r
        overflow: visible;\r
        border: 0;\r
        background: transparent;\r
        box-shadow: none;\r
      }\r
      .site-shell table.module-map {\r
        display: block;\r
        width: 100%;\r
        min-width: 0;\r
        border-collapse: separate;\r
      }\r
      .site-shell table.module-map thead { display: none; }\r
      .site-shell table.module-map tbody {\r
        display: grid;\r
        gap: 12px;\r
      }\r
      .site-shell table.module-map tbody tr {\r
        display: block;\r
        overflow-wrap: anywhere;\r
        border: 1px solid var(--line);\r
        border-top: 4px solid var(--blue);\r
        border-radius: 12px;\r
        background: var(--card);\r
        box-shadow: var(--shadow);\r
      }\r
      .site-shell table.module-map tbody td {\r
        display: grid;\r
        grid-template-columns: 108px minmax(0, 1fr);\r
        gap: 10px;\r
        padding: 10px 14px;\r
        border-bottom: 1px solid var(--line);\r
        white-space: normal;\r
      }\r
      .site-shell table.module-map tbody td:first-child {\r
        display: block;\r
        padding: 15px 14px 12px;\r
        font-family: inherit;\r
        white-space: normal;\r
      }\r
      .site-shell table.module-map tbody td:last-child { border-bottom: 0; }\r
      .site-shell table.module-map tbody td:nth-child(2)::before { content: "來源／類型"; }\r
      .site-shell table.module-map tbody td:nth-child(3)::before { content: "Term"; }\r
      .site-shell table.module-map tbody td:nth-child(4)::before { content: "Credits"; }\r
      .site-shell table.module-map tbody td:nth-child(5)::before { content: "Pathway"; }\r
      .site-shell table.module-map tbody td:nth-child(6)::before { content: "Pathway 名稱"; }\r
      .site-shell table.module-map tbody td:not(:first-child)::before {\r
        color: var(--muted);\r
        font-size: .8rem;\r
        font-weight: 800;\r
      }\r
    }\r
    @media (max-width: 360px) {\r
      .topbar nav { flex-wrap: nowrap; }\r
      .stats { grid-template-columns: 1fr; }\r
      .stat, .stat:nth-child(2), .stat:nth-child(3), .stat:nth-child(4) { min-height: 0; }\r
      .summary { gap: 7px; }\r
      .stamp, .pill { max-width: 100%; overflow-wrap: anywhere; }\r
    }\r
    @media (prefers-reduced-motion: reduce) {\r
      *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }\r
      .reveal, .reveal.is-visible, .hero .reveal, .hero .reveal.is-visible { opacity: 1; transform: none; }\r
    }
`;export{e as t};