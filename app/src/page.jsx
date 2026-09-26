import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pages from './data/pages.json';

const routeByHtml = {
  'index.html': '/',
  'term1.html': '/term1',
  'term2.html': '/term2',
  'term3.html': '/term3',
  'notes.html': '/notes',
  'change-log.html': '/change-log',
};

function routeForHref(href, pathname) {
  if (!href) return null;
  if (href.startsWith('#')) return `${pathname}${href}`;
  const localHref = href.replace(/^\.\//, '');
  const match = localHref.match(/^(index|term1|term2|term3|notes|change-log)\.html(.*)$/);
  if (match) return `${routeByHtml[`${match[1]}.html`]}${match[2]}`;
  if (href.startsWith('/')) return href;
  return null;
}

function parsePageHtml(html, pathname) {
  const options = {};
  options.replace = (node, index) => {
      if (node.type !== 'tag' || node.name !== 'a' || !node.attribs?.href) return undefined;
      const to = routeForHref(node.attribs.href, pathname);
      if (!to) return undefined;
      const props = attributesToProps(node.attribs);
      delete props.href;
      return (
        <Link key={`${node.attribs.href}-${index}`} {...props} to={to}>
          {domToReact(node.children, options)}
        </Link>
      );
  };
  return parse(html, options);
}

function Header({ config, pathname, pageTranslations }) {
  const eyebrow = config.eyebrow
    ? <span className="eyebrow">{parse(config.eyebrow)}</span>
    : null;
  const brandTo = routeForHref(config.brandHref, pathname) ?? config.brandHref;
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <div className="brand-group">
          {eyebrow}
          <Link className="brand" to={brandTo}>{parse(config.brandLabel)}</Link>
        </div>
        <nav aria-label="主要導覽">
          {config.nav.map((item, index) => {
            const to = routeForHref(item.href, pathname) ?? item.href;
            return (
              <Link
                key={`${item.href}-${index}`}
                to={to}
                aria-current={item.current ? 'page' : undefined}
              >
                {parse(item.label)}
              </Link>
            );
          })}
          <LanguageToggle title={config.title} pageTranslations={pageTranslations} />
        </nav>
      </div>
    </header>
  );
}

function Footer({ config }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>{config.hasFooter ? parse(config.footerHtml) : 'Urban Spatial Science MSc · 2026–27'}</div>
        <nav className="secondary-nav" aria-label="補充資訊">
          <Link to="/notes">筆記區</Link>
          <Link to="/change-log">Change Log</Link>
          <Link to="/#welcome">Welcome Week</Link>
          <Link to="/#sources">資料來源</Link>
        </nav>
      </div>
    </footer>
  );
}

function LanguageToggle({ title, pageTranslations }) {
  const [language, setLanguage] = useState(() => (
    localStorage.getItem('ucl-urban-spatial-science-language') === 'en' ? 'en' : 'zh'
  ));

  useEffect(() => {
    if (Object.keys(pageTranslations).length === 0) return undefined;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script,style,.language-toggle')
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const attributes = [];
    document.querySelectorAll('[aria-label],[placeholder],[title]').forEach((element) => {
      for (const name of ['aria-label', 'placeholder', 'title']) {
        const value = element.getAttribute(name);
        if (value && pageTranslations[value] !== undefined) attributes.push([element, name, value]);
      }
    });

    const english = language === 'en';
    textNodes.forEach((node) => {
      const original = node.__zh ?? node.nodeValue;
      node.__zh = original;
      if (pageTranslations[original] !== undefined) {
        node.nodeValue = english ? pageTranslations[original] : original;
      }
    });
    attributes.forEach(([element, name, original]) => {
      element.setAttribute(name, english ? pageTranslations[original] : original);
    });
    document.title = english ? (pageTranslations[title] ?? title) : title;
    document.documentElement.lang = english ? 'en' : 'zh-Hant';
    localStorage.setItem('ucl-urban-spatial-science-language', language);
    return undefined;
  }, [language, pageTranslations, title]);

  if (Object.keys(pageTranslations).length === 0) return null;
  return (
    <button
      className="language-toggle"
      type="button"
      aria-label="Switch page language"
      aria-pressed={language === 'en'}
      onClick={() => setLanguage((current) => current === 'en' ? 'zh' : 'en')}
    >
      {language === 'en' ? '中文' : 'English'}
    </button>
  );
}

function usePageStyles(page, pageStyles) {
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.dataset.pageStyles = page;
    style.textContent = pageStyles;
    const designSystem = document.getElementById('design-system');
    document.head.insertBefore(style, designSystem ?? null);
    document.body.classList.add('site-body');
    return () => {
      style.remove();
      document.body.classList.remove('site-body');
    };
  }, [page, pageStyles]);
}

function useHashNavigation(page, navigate, location) {
  useEffect(() => {
    const decodedHash = decodeURIComponent(location.hash.slice(1));
    if ((page === 'index' || page === 'term2') && /^casa0010(?:-|$)/.test(decodedHash)) {
      navigate(`/term3${location.hash}`, { replace: true });
      return;
    }
    if (page === 'index') {
      if (/^casa(?:0001|0005|0007|0013)(?:-|$)/.test(decodedHash) || decodedHash === 'core') {
        navigate(`/term1${decodedHash === 'core' ? '#course-details' : location.hash}`, { replace: true });
        return;
      }
      if (/^casa(?:0002|0006|0008|0011|0023|0025|0028|0029|0034)(?:-|$)/.test(decodedHash)
          || ['dependencies', 'pathways', 'options'].includes(decodedHash)) {
        navigate(`/term2${location.hash}`, { replace: true });
        return;
      }
    }

    if (page === 'term1') {
      const target = document.getElementById(decodedHash);
      const dossier = target?.closest('details.research-detail');
      if (dossier) dossier.open = true;
    }
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(decodedHash);
        if (page === 'term2' || page === 'term3') {
          const content = target?.closest('.module-dossier-content');
          if (content?.hidden) content.previousElementSibling?.click();
        }
        target?.scrollIntoView();
      });
    }
  }, [page, location.hash, navigate]);
}

function useIndexInteractions(page, location) {
  useEffect(() => {
    if (!['index', 'term2'].includes(page)) return undefined;
    const topbar = document.querySelector('.topbar');
    const syncTopbar = () => topbar?.classList.toggle('is-compact', window.scrollY > 18);
    window.addEventListener('scroll', syncTopbar, { passive: true });
    syncTopbar();

    const sectionIds = page === 'index'
      ? ['structure', 'term1', 'term2', 'welcome', 'sources']
      : ['dissertation', 'dependencies', 'pathways', 'options'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const navLinks = [...document.querySelectorAll('nav a, .index-list a')];
    const setActiveSection = (id) => {
      navLinks.forEach((link) => {
        let matches = false;
        try { matches = new URL(link.href).hash === `#${id}`; } catch { /* Ignore non-URL links. */ }
        link.classList.toggle('is-active', matches);
        if (matches) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };

    let sectionObserver;
    if ('IntersectionObserver' in window) {
      sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
      }, { rootMargin: '-18% 0px -62% 0px', threshold: 0 });
      sections.forEach((section) => sectionObserver.observe(section));
    }

    const revealTargets = [...document.querySelectorAll(
      '.hero-grid > *, .stats .stat, .index-panel, section:not(.hero) .section-head, section:not(.hero) .term, section:not(.hero) .pathway, section:not(.hero) .module-card, section:not(.hero) .table-wrap, section:not(.hero) .dependency, section:not(.hero) .source-list, section:not(.hero) .callout, section:not(.hero) .list-card'
    )];
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
    });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let revealObserver;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
    } else {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealTargets.forEach((element) => revealObserver.observe(element));
    }

    return () => {
      window.removeEventListener('scroll', syncTopbar);
      sectionObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, [page, location.pathname]);
}

function useTerm2Filters(page) {
  useEffect(() => {
    if (page !== 'term2') return undefined;
    const input = document.querySelector('#moduleSearch');
    const cards = [...document.querySelectorAll('#optionalModules .module-card')];
    const rows = [...document.querySelectorAll('#moduleTableBody tr')];
    const count = document.querySelector('#resultCount');
    const empty = document.querySelector('#noResults');
    if (!input || !count || !empty) return undefined;

    const matchesItem = (item, query, activeFilter) => {
      const searchText = (item.dataset.module || item.dataset.search || '').toLowerCase();
      const source = item.dataset.source || 'casa';
      const pathways = (item.dataset.pathways || '').split(/\s+/).filter(Boolean);
      const filterMatches = activeFilter === 'all' || activeFilter === source || pathways.includes(activeFilter);
      return filterMatches && (!query || searchText.includes(query));
    };
    const filterModules = () => {
      const query = input.value.trim().toLowerCase();
      const activeFilter = document.querySelector('.filter-toolbar .filter-chip.is-active')?.dataset.filter || 'all';
      let visibleCards = 0;
      let visibleRows = 0;
      cards.forEach((card) => { card.hidden = !matchesItem(card, query, activeFilter); if (!card.hidden) visibleCards++; });
      rows.forEach((row) => { row.hidden = !matchesItem(row, query, activeFilter); if (!row.hidden) visibleRows++; });
      count.textContent = `${visibleRows} 筆分類結果 · ${visibleCards} 門內容卡`;
      empty.hidden = visibleRows !== 0 || visibleCards !== 0;
    };
    const toolbar = document.querySelector('.filter-toolbar');
    const onFilterClick = (event) => {
      const button = event.target.closest('.filter-chip');
      if (!button || !toolbar.contains(button)) return;
      toolbar.querySelectorAll('.filter-chip').forEach((chip) => {
        const selected = chip === button;
        chip.classList.toggle('is-active', selected);
        chip.setAttribute('aria-pressed', String(selected));
      });
      filterModules();
    };
    input.addEventListener('input', filterModules);
    toolbar?.addEventListener('click', onFilterClick);
    filterModules();

    return () => {
      input.removeEventListener('input', filterModules);
      toolbar?.removeEventListener('click', onFilterClick);
    };
  }, [page]);
}

function useModuleDossierToggles(page, pageTranslations) {
  useEffect(() => {
    if (!['term2', 'term3'].includes(page)) return undefined;
    const onDossierClick = (event) => {
      const toggle = event.target.closest('.module-dossier-toggle');
      if (!toggle) return;
      const content = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!content) return;
      const expanded = content.hidden;
      content.hidden = !expanded;
      toggle.setAttribute('aria-expanded', String(expanded));
      const label = toggle.querySelector('.toggle-label');
      const icon = toggle.querySelector('.toggle-icon');
      if (label) {
        const copy = expanded ? '收合完整課程內容' : '全部顯示';
        label.textContent = document.documentElement.lang === 'en'
          ? (pageTranslations[copy] ?? copy)
          : copy;
        if (label.firstChild) label.firstChild.__zh = copy;
      }
      if (icon) icon.textContent = expanded ? '−' : '+';
    };
    document.addEventListener('click', onDossierClick);
    return () => document.removeEventListener('click', onDossierClick);
  }, [page, pageTranslations]);
}

function Page({ page, content, pageStyles, pageTranslations }) {
  const config = pages[page];
  const location = useLocation();
  const navigate = useNavigate();
  usePageStyles(page, pageStyles);
  useHashNavigation(page, navigate, location);
  useIndexInteractions(page, location);
  useTerm2Filters(page);
  useModuleDossierToggles(page, pageTranslations);

  useEffect(() => {
    const english = localStorage.getItem('ucl-urban-spatial-science-language') === 'en';
    document.title = english ? (pageTranslations[config.title] ?? config.title) : config.title;
  }, [config.title, page, pageTranslations]);

  const renderedContent = useMemo(
    () => parsePageHtml(content, location.pathname),
    [content, location.pathname],
  );

  return (
    <div className="site-shell" data-page={page}>
      <Header config={config} pathname={location.pathname} pageTranslations={pageTranslations} />
      {renderedContent}
      <Footer config={config} />
    </div>
  );
}

export default Page;
