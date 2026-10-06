import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CourseMaterials({ current, history, currentIds, historyIds }) {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = decodeURIComponent(location.hash.slice(1));
  const selected = historyIds.includes(hash) ? 'history' : currentIds.includes(hash) ? 'current'
    : new URLSearchParams(location.search).get('materials') === 'history' ? 'history' : 'current';
  const [focused, setFocused] = useState(selected);
  const buttons = useRef({});
  useEffect(() => { setFocused(selected); }, [selected]);

  const select = value => {
    const search = new URLSearchParams(location.search);
    if (value === 'history') search.set('materials', 'history');
    else search.delete('materials');
    navigate({ pathname: location.pathname, search: search.toString(), hash: '' });
  };
  const moveFocus = (event, value) => {
    let next;
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) next = value === 'current' ? 'history' : 'current';
    if (event.key === 'Home') next = 'current';
    if (event.key === 'End') next = 'history';
    if (!next) return;
    event.preventDefault();
    setFocused(next);
    buttons.current[next].focus();
  };

  return <div className="course-materials" onClick={event => {
    if (event.target.closest('[data-show-history]')) select('history');
  }}>
    <div role="tablist" aria-label="教材年度" className="materials-tabs">
      {['current', 'history'].map(value => <button key={value} type="button" role="tab"
        id={`tab-${value}`} aria-controls={`panel-${value}`} aria-selected={selected === value}
        tabIndex={focused === value ? 0 : -1} ref={element => { buttons.current[value] = element; }}
        onFocus={() => setFocused(value)} onKeyDown={event => moveFocus(event, value)} onClick={() => select(value)}>
        {value === 'current' ? '本屆教材' : '歷屆教材'}
      </button>)}
    </div>
    <div id="panel-current" role="tabpanel" aria-labelledby="tab-current" hidden={selected !== 'current'} tabIndex={0}>{current}</div>
    <div id="panel-history" role="tabpanel" aria-labelledby="tab-history" hidden={selected !== 'history'} tabIndex={0}>{history}</div>
  </div>;
}
