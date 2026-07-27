import React, { useState, useEffect, useCallback } from 'react';
import { packingItems } from '../data';

const STORAGE_KEY = 'jeju-packing';

const GROUP_COLORS: Record<string, string> = {
  '证件': '#E8A87C',
  '电子设备': '#4EAED0',
  '衣物': '#A8D5BA',
  '洗护防晒': '#FFB5B5',
  '其他': '#C8B8E8',
};

function loadChecked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return new Set(JSON.parse(raw));
  } catch {}
  return new Set();
}

function saveChecked(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export default function PackingList() {
  const [checked, setChecked] = useState<Set<string>>(() => loadChecked());

  useEffect(() => { saveChecked(checked); }, [checked]);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const groups = packingItems.reduce<Record<string, typeof packingItems>>(
    (acc, item) => { (acc[item.group] ??= []).push(item); return acc; },
    {},
  );

  const total = packingItems.length;
  const done = checked.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: '#7A6B5D' }}>已打包 {done}/{total}</span>
        <span style={{ fontSize: 12, color: '#6B9E78', fontWeight: 600, marginLeft: 'auto' }}>{pct}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="mt-m">
        {Object.entries(groups).map(([group, items]) => (
          <div key={group} className="packing-group">
            <div className="packing-group__title">
              <span className="packing-group__dot" style={{ background: GROUP_COLORS[group] || '#ccc' }} />
              {group}
              <span className="packing-group__count">
                {items.filter(i => checked.has(i.id)).length}/{items.length}
              </span>
            </div>
            {items.map((item) => {
              const isDone = checked.has(item.id);
              return (
                <div
                  key={item.id}
                  className={`check-item ${isDone ? 'check-item--done' : ''}`}
                  onClick={() => toggle(item.id)}
                >
                  <span className="check-item__box">{isDone ? '✓' : ''}</span>
                  <span className="check-item__text">{item.text}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
