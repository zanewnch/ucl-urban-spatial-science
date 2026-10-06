import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pages from './data/pages.json';
import courses from './data/courses.json';
import courseAliases from './data/course-aliases.json';
import courseTranslations from './data/translations/courses.json';
import courseStyles from './styles/courses.css?raw';
import { courseCardHtml } from './course-content.js';

const routeByHtml = {
  'index.html': '/',
  'term1.html': '/term1',
  'casa0005.html': '/casa0005',
  'term2.html': '/term2',
  'term3.html': '/term3',
  'notes.html': '/notes',
  'change-log.html': '/change-log',
};

function routeForHref(href, pathname) {
  if (!href) return null;
  if (href.startsWith('#')) return `${pathname}${href}`;
  const localHref = href.replace(/^\.\//, '');
  const match = localHref.match(/^(index|term1|casa\d{4}|term2|term3|notes|change-log)\.html(.*)$/);
  if (match) return `${routeByHtml[`${match[1]}.html`] || `/${match[1]}`}${match[2]}`;
  if (href.startsWith('/')) return href;
  return null;
}

function parsePageHtml(html, pathname) {
  const options = {};
  options.replace = (node, index) => {
      const course = courses[pathname.slice(1)];
      if (course && node.type === 'tag') {
        const props = attributesToProps(node.attribs || {});
        const classes = (node.attribs?.class || '').split(/\s+/);
        const plainText = item => item.type === 'text' ? item.data : (item.children || []).map(plainText).join('');
        const preserveId = node.attribs?.id ? { id: node.attribs.id } : {};
        if (classes.includes('code') && plainText(node).trim().toLowerCase() === course.code) {
          return <span key={index} {...preserveId} />;
        }
        if (/^h[2-3]$/.test(node.name)) {
          const title = node.children.filter(child => child.name !== 'a').map(plainText).join('').trim();
          if (title === course.title || title.startsWith(`${course.code.toUpperCase()} · 完整課程詳解`)) {
            return <div key={index} {...preserveId} className="course-source-row">{domToReact(node.children.filter(child => child.name === 'a'), options)}</div>;
          }
        }
        if (node.name === 'article' && (classes.includes('course') || classes.includes('module-card'))) {
          return <div key={index} {...props} className="course-content-panel">{domToReact(node.children, options)}</div>;
        }
        if (node.name === 'details' && classes.includes('course-dossier')) {
          return <div key={index} {...preserveId} className="course-content-panel">{domToReact(node.children.filter(child => child.name !== 'summary'), options)}</div>;
        }
        if (classes.includes('module-dossier-heading')) {
          return <div key={index} {...preserveId} className="course-content-heading">{domToReact(node.children.filter(child => child.name === 'strong'), options)}</div>;
        }
        if (node.name === 'table') {
          return <div key={index} className="course-table-scroll" tabIndex={0} role="region" aria-label="可水平捲動的表格"><table {...props}>{domToReact(node.children, options)}</table></div>;
        }
      }

      if (node.name === 'course-card') return parsePageHtml(courseCardHtml(node.attribs.code, node.attribs), pathname);
      if (node.type !== 'tag' || node.name !== 'a' || !node.attribs?.href) return undefined;
      if (node.attribs.href.startsWith('/ucl-urban-spatial-science/casa0005-handbook/')) return undefined;
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

function CourseMenu({ pathname }) {
  const menu = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);
  useEffect(() => {
    const outside = event => {
      if (!menu.current?.contains(event.target)) menu.current.open = false;
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, []);
  return (
    <details className="course-menu" ref={menu} onKeyDown={event => {
      if (event.key === 'Escape') {
        menu.current.open = false;
        trigger.current.focus();
      }
    }} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
    }}>
      <summary ref={trigger} aria-controls="course-menu-links" className={courses[pathname.slice(1)] ? 'is-current-course' : undefined}>課程總覽</summary>
      <div className="course-menu-panel" id="course-menu-links">
        {[
          { label: 'Term 1', items: Object.values(courses).filter(course => course.term === 'term1' && course.selected) },
          { label: 'Term 2', items: Object.values(courses).filter(course => course.term === 'term2' && course.selected) },
          { label: 'Dissertation', items: Object.values(courses).filter(course => course.term === 'term3') },
          { label: 'Other', items: Object.values(courses).filter(course => !course.selected && course.term !== 'term3') },
        ].map(group => (
          <section key={group.label} aria-label={group.label}>
            <h2>{group.label}</h2>
            {group.items.map(course => (
              <Link key={course.code} to={`/${course.code}`} aria-current={pathname === `/${course.code}` ? 'page' : undefined}
                onClick={() => { menu.current.open = false; trigger.current.focus(); }}>
                <span>{course.code.toUpperCase()}</span> {course.title}
              </Link>
            ))}
          </section>
        ))}
      </div>
    </details>
  );
}

function Header({ config, pathname, pageTranslations }) {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <div className="brand-group">
          {config.eyebrow && <span className="eyebrow">{parse(config.eyebrow)}</span>}
          <Link className="brand" to="/">Urban Spatial Science MSc</Link>
        </div>
        <nav className="primary-nav" aria-label="主要導覽">
          <Link to="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
          <CourseMenu pathname={pathname} />
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
  const normalizedTranslations = useMemo(() => Object.fromEntries(
    Object.entries(pageTranslations).map(([key, value]) => [key.replace(/\s+/g, ' ').trim(), value]),
  ), [pageTranslations]);
  const translated = value => pageTranslations[value]
    ?? normalizedTranslations[value.replace(/\s+/g, ' ').trim()];

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
        element.__zhAttributes ??= {};
        const value = element.__zhAttributes[name] ?? element.getAttribute(name);
        if (value && translated(value) !== undefined) {
          element.__zhAttributes[name] = value;
          attributes.push([element, name, value]);
        }
      }
    });

    const english = language === 'en';
    textNodes.forEach((node) => {
      if (node.parentElement?.id === 'resultCount') return;
      const original = node.__zh ?? node.nodeValue;
      node.__zh = original;
      if (translated(original) !== undefined) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = english ? `${leading}${translated(original).trim()}${trailing}` : original;
      }
    });
    attributes.forEach(([element, name, original]) => {
      element.setAttribute(name, english ? translated(original) : original);
    });
    const count = document.getElementById('resultCount');
    if (count?.dataset.visibleRows !== undefined) {
      count.textContent = english
        ? `${count.dataset.visibleRows} results · ${count.dataset.visibleCards} course cards`
        : `${count.dataset.visibleRows} 筆分類結果 · ${count.dataset.visibleCards} 門內容卡`;
    }
    document.title = english ? (pageTranslations[title] ?? title) : title;
    document.documentElement.lang = english ? 'en' : 'zh-Hant';
    localStorage.setItem('ucl-urban-spatial-science-language', language);
    return undefined;
  }, [language, pageTranslations, normalizedTranslations, title]);

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
    const alias = courseAliases[`${page}#${decodedHash}`];
    if (alias && !courses[page]) {
      navigate(alias, { replace: true });
      return;
    }
    const courseMatch = decodedHash.match(/^(casa\d{4})(?:-|$)/);
    if (courseMatch && courses[courseMatch[1]] && !courses[page]) {
      navigate(`/${courseMatch[1]}${decodedHash === courseMatch[1] ? '' : location.hash}`, { replace: true });
      return;
    }
    if (page === 'index') {
      if (decodedHash === 'core') {
        navigate('/term1#course-details', { replace: true });
        return;
      }
      if (['dependencies', 'pathways', 'options'].includes(decodedHash)) {
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
        if (courses[page]) {
          if (target?.tagName === 'DETAILS') target.open = true;
          for (let parent = target?.parentElement; parent; parent = parent.parentElement) {
            if (parent.tagName === 'DETAILS') parent.open = true;
          }
        }
        if (page === 'term2' || page === 'term3') {
          const content = target?.closest('.module-dossier-content');
          if (content?.hidden) content.previousElementSibling?.click();
        }
        target?.scrollIntoView();
      });
    } else if (courses[page]) {
      window.scrollTo(0, 0);
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
    const navLinks = [...document.querySelectorAll('main nav a[href*="#"], .index-list a[href*="#"]')];
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
      count.dataset.visibleRows = String(visibleRows);
      count.dataset.visibleCards = String(visibleCards);
      count.textContent = document.documentElement.lang === 'en'
        ? `${visibleRows} results · ${visibleCards} course cards`
        : `${visibleRows} 筆分類結果 · ${visibleCards} 門內容卡`;
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
  pageTranslations = useMemo(() => ({ ...pageTranslations, ...courseTranslations }), [pageTranslations]);
  const config = pages[page];
  const location = useLocation();
  const navigate = useNavigate();
  usePageStyles(page, pageStyles + courseStyles);
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
