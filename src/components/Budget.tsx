import React from 'react';
import { budgetGuide } from '../data';

export default function Budget() {
  return (
    <div>
      {budgetGuide.map((cat) => (
        <div className="budget-category" key={cat.category}>
          <div className="budget-category__title">{cat.category}</div>
          {cat.items.map((item, i) => (
            <div className="budget-row" key={i}>
              <div>
                <div className="budget-row__label">{item.label}</div>
                {item.note && <div className="budget-row__note">{item.note}</div>}
              </div>
              <div className="budget-row__range">{item.range}</div>
            </div>
          ))}
        </div>
      ))}

      <div className="budget-summary">
        <strong>粗估 3 天总花销（2 人，不含机票酒店）</strong>
        <br />
        包车 ¥800~1,500（国内平台预付）+ 汗蒸约 6 万韩元 + 当地打车餐饮购物约 50~100 万韩元 ≈ <strong>总计 ¥3,800~7,300</strong>
        <br />
        <span className="budget-summary__note">
          如有会友聚餐，可额外准备 10~20 万韩元现金
        </span>
      </div>
    </div>
  );
}
