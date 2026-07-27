import React, { useState } from 'react';
import { koreanPhrases } from '../data';

export default function KoreanPhrases() {
  const [openScene, setOpenScene] = useState<string | null>(koreanPhrases[0].scene);

  return (
    <div>
      <div className="phrase-intro">
        点击场景展开常用短句，韩文 + 发音对照，打车点餐直接用。
      </div>
      {koreanPhrases.map((group) => {
        const isOpen = openScene === group.scene;
        return (
          <div key={group.scene} className="phrase-group">
            <button
              className={`phrase-group__header ${isOpen ? 'phrase-group__header--open' : ''}`}
              onClick={() => setOpenScene(isOpen ? null : group.scene)}
            >
              <span className="phrase-group__title">{group.scene}</span>
              <span className="phrase-group__count">{group.phrases.length} 句</span>
              <span className={`phrase-group__arrow ${isOpen ? 'phrase-group__arrow--open' : ''}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            {isOpen && (
              <div className="phrase-list">
                {group.phrases.map((p, i) => (
                  <div key={i} className="phrase-card">
                    <div className="phrase-card__cn">{p.cn}</div>
                    <div className="phrase-card__kr">{p.kr}</div>
                    <div className="phrase-card__pron">{p.pronunciation}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
