import React from 'react';
import { jejuWeather, weatherTips } from '../data';

export default function Weather() {
  return (
    <div>
      {/* Stats row */}
      <div className="weather-grid">
        {jejuWeather.map((w) => (
          <div key={w.label} className="weather-stat">
            <div className="weather-stat__label">{w.label}</div>
            <div className="weather-stat__value">{w.value}</div>
          </div>
        ))}
      </div>

      {/* Clothing tips */}
      <div className="weather-tips">
        <div className="weather-tips__title">穿搭 & 携带建议</div>
        {weatherTips.map((tip, i) => (
          <div key={i} className="weather-tip-row">
            <span className="weather-tip-row__dot" />
            <span>{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
