import React, { useState, useEffect, useRef } from 'react';
import { days, flights, apps, heroPhoto } from './data';
import DayTimeline from './components/DayTimeline';
import MapView from './components/MapView';
import Checklist from './components/Checklist';
import Budget from './components/Budget';
import RainyDay from './components/RainyDay';
import KoreanPhrases from './components/KoreanPhrases';
import Weather from './components/Weather';
import PackingList from './components/PackingList';

const NAV_ITEMS = [
  { id: 'itinerary', label: '行程' },
  { id: 'map', label: '地图' },
  { id: 'budget', label: '预算' },
  { id: 'weather', label: '天气' },
  { id: 'rainy', label: '雨天' },
  { id: 'checklist', label: '清单' },
  { id: 'packing', label: '行李' },
  { id: 'korean', label: '韩语' },
  { id: 'transport', label: '交通' },
  { id: 'apps', label: 'App' },
];

/* Tiny inline SVG icons — no emoji */
const SvgPlane = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
);

export default function App() {
  const [activeNav, setActiveNav] = useState('itinerary');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) setActiveNav(id);
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* ── Hero ── */}
      <div className="hero">
        <img className="hero__img" src={heroPhoto} alt="济州岛" />
        <div className="hero__overlay">
          <h1 className="hero__title">济州岛</h1>
          <p className="hero__subtitle">JEJU ISLAND · 제주도</p>
          <div className="hero__dates">
            <span className="hero__date-badge">3天2晚</span>
            <span className="hero__date-badge">2026.7.31 — 8.2</span>
          </div>
        </div>
      </div>

      {/* ── Flight Cards ── */}
      <div className="flights">
        {flights.map((f) => (
          <div className="flight-card" key={f.direction}>
            <div className="flight-card__dir">
              <SvgPlane /> {f.direction}
            </div>
            <div className="flight-card__route">{f.route}</div>
            <div className="flight-card__time">
              {f.departure}
              {f.arrival && (
                <span style={{ fontSize: 14, color: '#7A6B5D' }}> → {f.arrival}</span>
              )}
            </div>
            <div className="flight-card__date">{f.date}</div>
          </div>
        ))}
      </div>

      {/* ── Overview ── */}
      <div className="container">
        <div className="overview-badges">
          <span className="badge badge--blue">不换酒店</span>
          <span className="badge badge--green">东线 + 西线</span>
          <span className="badge badge--pink">情侣旅行</span>
          <span className="badge badge--yellow">节奏舒适</span>
        </div>
      </div>

      {/* ── Sticky Nav ── */}
      <nav className="sticky-nav">
        <div className="sticky-nav__inner">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              className={`nav-btn ${activeNav === n.id ? 'nav-btn--active' : ''}`}
              onClick={() => scrollTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Itinerary ── */}
      <div
        className="container mt-l"
        data-section="itinerary"
        ref={(el) => { sectionRefs.current['itinerary'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(232,168,124,0.2)" letter="T" />
          <h2 className="section-header__text">每日行程</h2>
        </div>
        {days.map((day) => (
          <DayTimeline key={day.day} day={day} />
        ))}
      </div>

      {/* ── Map ── */}
      <div
        className="container"
        data-section="map"
        ref={(el) => { sectionRefs.current['map'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(78,174,208,0.15)" letter="M" />
          <h2 className="section-header__text">景点地图</h2>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
          <LegendDot color="#E8A87C" label="Day 1 济州市" />
          <LegendDot color="#4EAED0" label="Day 2 东线" />
          <LegendDot color="#A8D5BA" label="Day 3 西线" />
        </div>
        <MapView />
      </div>

      {/* ── Budget ── */}
      <div
        className="container mt-l"
        data-section="budget"
        ref={(el) => { sectionRefs.current['budget'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(232,168,124,0.15)" letter="B" />
          <h2 className="section-header__text">预算参考</h2>
        </div>
        <Budget />
      </div>

      {/* ── Weather ── */}
      <div
        className="container mt-l"
        data-section="weather"
        ref={(el) => { sectionRefs.current['weather'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(255,155,80,0.15)" letter="W" />
          <h2 className="section-header__text">天气 & 穿搭</h2>
        </div>
        <Weather />
      </div>

      {/* ── Rainy Day ── */}
      <div
        className="container mt-l"
        data-section="rainy"
        ref={(el) => { sectionRefs.current['rainy'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(168,200,232,0.2)" letter="R" />
          <h2 className="section-header__text">雨天备用方案</h2>
        </div>
        <RainyDay />
      </div>

      {/* ── Checklist ── */}
      <div
        className="container mt-l"
        data-section="checklist"
        ref={(el) => { sectionRefs.current['checklist'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(107,158,120,0.15)" letter="C" />
          <h2 className="section-header__text">出行清单</h2>
        </div>
        <Checklist />
      </div>

      {/* ── Packing ── */}
      <div
        className="container mt-l"
        data-section="packing"
        ref={(el) => { sectionRefs.current['packing'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(168,213,186,0.2)" letter="P" />
          <h2 className="section-header__text">行李打包</h2>
        </div>
        <PackingList />
      </div>

      {/* ── Korean ── */}
      <div
        className="container mt-l"
        data-section="korean"
        ref={(el) => { sectionRefs.current['korean'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(255,228,160,0.2)" letter="K" />
          <h2 className="section-header__text">韩语速查</h2>
        </div>
        <KoreanPhrases />
      </div>

      {/* ── Transport ── */}
      <div
        className="container mt-l"
        data-section="transport"
        ref={(el) => { sectionRefs.current['transport'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(168,200,232,0.2)" letter="R" />
          <h2 className="section-header__text">交通方案</h2>
        </div>
        <TransportCards />
      </div>

      {/* ── Apps ── */}
      <div
        className="container mt-l"
        data-section="apps"
        ref={(el) => { sectionRefs.current['apps'] = el; }}
      >
        <div className="section-header">
          <SectionIcon color="rgba(200,184,232,0.2)" letter="A" />
          <h2 className="section-header__text">必备 App</h2>
        </div>
        <div className="app-grid">
          {apps.map((app) => (
            <div className="app-card" key={app.name}>
              <div className="app-card__icon app-card__icon--letter">{app.initial}</div>
              <div className="app-card__name">{app.name}</div>
              <div className="app-card__purpose">{app.purpose}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <p>济州岛 3天2晚旅行计划 · 2026 夏</p>
        <p className="mt-s">
          Photos provided by{' '}
          <a href="https://www.pexels.com" target="_blank" rel="noopener">
            Pexels
          </a>
        </p>
      </footer>
    </div>
  );
}

/* ── Small inline components ── */

function SectionIcon({ color, letter }: { color: string; letter: string }) {
  return (
    <div
      className="section-header__icon"
      style={{
        background: color,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: 18,
        color: '#3D2B1F',
      }}
    >
      {letter}
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 13,
        color: '#7A6B5D',
      }}
    >
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: color,
          border: '2px solid #fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        }}
      />
      {label}
    </span>
  );
}

function TransportCards() {
  const routes = [
    {
      title: '机场 → 森兰德酒店',
      method: '出租车',
      time: '约 10 分钟',
      tip: '莲洞距机场很近，打车即到',
      color: '#E8A87C',
    },
    {
      title: '市区 → 东线',
      method: '中文包车',
      time: '全天 8 小时',
      tip: '携程/飞猪/Klook 提前预订，约 ¥800~1,500',
      color: '#4EAED0',
    },
    {
      title: '市区 → 西线',
      method: '出租车 / 打车',
      time: '30~40 分钟',
      tip: '涯月、金陵方向',
      color: '#A8D5BA',
    },
    {
      title: '市区日常',
      method: 'Uber / Kakao T',
      time: '按需',
      tip: '或让酒店叫车',
      color: '#C8B8E8',
    },
  ];

  return (
    <div className="transport-list">
      {routes.map((r) => (
        <div
          key={r.title}
          className="transport-card"
          style={{ borderLeftColor: r.color }}
        >
          <div className="transport-card__body">
            <div className="transport-card__title">{r.title}</div>
            <div className="transport-card__meta">
              {r.method} · {r.time}
            </div>
            <div className="transport-card__tip">{r.tip}</div>
          </div>
          <span
            className="transport-card__badge"
            style={{ background: r.color }}
          >
            {r.method.split(' ')[0]}
          </span>
        </div>
      ))}
    </div>
  );
}
