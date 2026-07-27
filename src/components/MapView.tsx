import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { allSpots } from '../data';

const DAY_COLORS: Record<number, string> = {
  1: '#E8A87C',
  2: '#4EAED0',
  3: '#A8D5BA',
};

function createIcon(day: number, label: string) {
  const color = DAY_COLORS[day] || '#888';
  return L.divIcon({
    html: `<div style="
      background:${color};
      width:28px;height:28px;
      border-radius:50%;
      border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,0.25);
      display:flex;align-items:center;justify-content:center;
      color:#fff;font-size:11px;font-weight:700;
      font-family:'Noto Sans SC',sans-serif;
    ">${label}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -18],
    className: '',
  });
}

export default function MapView() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      scrollWheelZoom: false,
    }).setView([33.42, 126.65], 10);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 18,
      },
    ).addTo(map);

    // Day route polylines
    [1, 2, 3].forEach((day) => {
      const pts = allSpots
        .filter((s) => s.day === day && !s.optional)
        .map((s) => [s.lat, s.lng] as L.LatLngTuple);
      if (pts.length > 1) {
        L.polyline(pts, {
          color: DAY_COLORS[day],
          weight: 2.5,
          opacity: 0.5,
          dashArray: '6 8',
        }).addTo(map);
      }
    });

    // Markers
    let idx = 0;
    allSpots.forEach((spot) => {
      idx++;
      const marker = L.marker([spot.lat, spot.lng], {
        icon: createIcon(spot.day, String(idx)),
      }).addTo(map);

      const kr = spot.nameKr ? `<div class="popup-kr">${spot.nameKr}</div>` : '';
      marker.bindPopup(
        `<div class="popup-name">${spot.name}</div>${kr}<div class="popup-desc">${spot.description}</div>`,
        { maxWidth: 220 },
      );
    });

    // Fit bounds
    const allPts = allSpots.map((s) => [s.lat, s.lng] as L.LatLngTuple);
    if (allPts.length) {
      map.fitBounds(L.latLngBounds(allPts).pad(0.15));
    }

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="map-wrap">
      <div ref={ref} className="map-container" />
    </div>
  );
}
