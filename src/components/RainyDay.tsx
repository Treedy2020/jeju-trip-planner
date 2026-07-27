import React from 'react';
import { rainyDayOptions, type RainyOption } from '../data';

const CATEGORY_META: Record<string, { label: string; color: string; bg: string }> = {
  indoor: { label: '室内景点', color: '#3a5a7a', bg: 'rgba(168,200,232,0.35)' },
  food: { label: '美食', color: '#a04040', bg: 'rgba(255,181,181,0.35)' },
  relax: { label: '休闲放松', color: '#5a4a7a', bg: 'rgba(200,184,232,0.35)' },
  shopping: { label: '购物', color: '#8a6a20', bg: 'rgba(255,228,160,0.35)' },
};

function RainyCard({ opt }: { opt: RainyOption }) {
  const meta = CATEGORY_META[opt.category];
  return (
    <div className="rainy-card">
      <div className="rainy-card__head">
        <div>
          <div className="rainy-card__name">{opt.name}</div>
          {opt.nameKr && <div className="rainy-card__kr">{opt.nameKr}</div>}
        </div>
        <span
          className="rainy-card__tag"
          style={{ background: meta.bg, color: meta.color }}
        >
          {meta.label}
        </span>
      </div>
      <div className="rainy-card__desc">{opt.description}</div>
      <div className="rainy-card__location">{opt.location}</div>
      {opt.tip && <div className="rainy-card__tip">{opt.tip}</div>}
    </div>
  );
}

export default function RainyDay() {
  // group by category in display order
  const order: RainyOption['category'][] = ['indoor', 'food', 'relax', 'shopping'];
  const grouped = order.map((cat) => ({
    cat,
    items: rainyDayOptions.filter((o) => o.category === cat),
  }));

  return (
    <div>
      <div className="rainy-intro">
        济州7~8月属于梅雨季尾声，偶有阵雨。如果遇到下雨，以下方案可以灵活替换当天的户外行程。
      </div>
      {grouped.map(({ cat, items }) => {
        const meta = CATEGORY_META[cat];
        return (
          <div key={cat} className="rainy-group">
            <div className="rainy-group__title">
              <span
                className="rainy-group__dot"
                style={{ background: meta.bg, borderColor: meta.color }}
              />
              {meta.label}
            </div>
            <div className="rainy-grid">
              {items.map((opt) => (
                <RainyCard key={opt.name} opt={opt} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
