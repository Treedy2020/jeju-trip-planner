import React, { useState, useEffect, useCallback } from 'react';
import { checklistItems } from '../data';

const STORAGE_KEY = 'jeju-checklist';

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

export default function Checklist() {
  const [checked, setChecked] = useState<Set<string>>(() => loadChecked());

  useEffect(() => {
    saveChecked(checked);
  }, [checked]);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const groups = checklistItems.reduce<Record<string, typeof checklistItems>>(
    (acc, item) => {
      (acc[item.group] ??= []).push(item);
      return acc;
    },
    {},
  );

  const total = checklistItems.length;
  const done = checked.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: '#7A6B5D' }}>
          已完成 {done}/{total}
        </span>
        <span
          style={{
            fontSize: 12,
            color: '#6B9E78',
            fontWeight: 600,
            marginLeft: 'auto',
          }}
        >
          {pct}%
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="mt-m">
        {Object.entries(groups).map(([group, items]) => (
          <div key={group} className={`checklist-group checklist-group--${group}`}>
            <div className="checklist-group__title">{group}</div>
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
