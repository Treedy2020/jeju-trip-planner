import React from 'react';
import { spotBriefs } from '../data';
import type { DayPlan, Spot } from '../data';

const TYPE_LABELS: Record<string, string> = {
  scenic: '景点',
  food: '美食',
  beach: '海滩',
  shopping: '购物',
  transport: '交通',
  hotel: '住宿',
  relax: '放松',
};

function SpotCard({ spot, index }: { spot: Spot; index: number }) {
  const rotClass =
    index % 3 === 0 ? '' : index % 3 === 1 ? 'polaroid--right' : 'polaroid--flat';

  const isOptional = spot.optional;
  const brief = spotBriefs[spot.id];

  return (
    <div className={`spot-card spot-card--${spot.type}${isOptional ? ' spot-card--optional' : ''}`}>
      <div className="spot-card__inner">
        <div className="spot-card__head">
          <div>
            <div className="spot-card__name">
              {spot.name}
              {isOptional && <span className="optional-badge">可选</span>}
              {spot.duration && (
                <span className="spot-card__duration">· {spot.duration}</span>
              )}
            </div>
            {spot.nameKr && <div className="spot-card__name-kr">{spot.nameKr}</div>}
          </div>
          {spot.time && <span className="spot-card__time">{spot.time}</span>}
        </div>

        <div className="spot-card__desc">{spot.description}</div>

        <span className={`spot-card__tag spot-card__tag--${spot.type}`}>
          {TYPE_LABELS[spot.type] || spot.type}
        </span>

        {spot.tips && <div className="spot-card__tip">{spot.tips}</div>}

        {brief && (
          <div className="spot-card__briefs" aria-label={`${spot.name}补充信息`}>
            <div className="spot-card__brief spot-card__brief--culture">
              <span className="spot-card__brief-label">文化历史</span>
              <span>{brief.culture}</span>
            </div>
            {brief.sauna && (
              <div className="spot-card__brief spot-card__brief--sauna">
                <span className="spot-card__brief-label">桑拿推荐</span>
                <span>{brief.sauna}</span>
              </div>
            )}
          </div>
        )}

        {spot.photo && (
          <div className={`polaroid ${rotClass}`}>
            <img src={spot.photo} alt={spot.name} loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
}

function DriverRouteCard() {
  const route = [
    { time: '08:30', place: '森兰德酒店出发', note: '莲洞上车，先去最远的城山方向' },
    { time: '10:00', place: '城山日出峰', note: '停留约70分钟；登顶看体力' },
    { time: '11:20', place: '城山附近午餐', note: '请司机推荐顺路、好停车的店' },
    { time: '12:30', place: '涉地可支', note: '停留约60分钟，海岸散步拍照' },
    { time: '14:10', place: '月汀里海边', note: '咖啡/看海/休息，15:20左右返程' },
    { time: '16:30', place: '回到森兰德酒店', note: '8小时包车结束；晚上先休息补水' },
  ];

  return (
    <div className="driver-route-card" aria-label="8月1日司机沟通路线">
      <div className="driver-route-card__header">
        <div>
          <div className="driver-route-card__eyebrow">司机沟通版</div>
          <div className="driver-route-card__title">8小时东线包车：酒店往返路线</div>
        </div>
        <span className="driver-route-card__badge">08:30–16:30</span>
      </div>

      <div className="driver-route-card__summary">
        森兰德酒店（莲洞） → 城山日出峰 → 城山附近午餐 → 涉地可支 → 月汀里海边 → 返回酒店
      </div>

      <div className="driver-route-card__list">
        {route.map((item) => (
          <div className="driver-route-card__row" key={item.time + item.place}>
            <span className="driver-route-card__time">{item.time}</span>
            <div>
              <div className="driver-route-card__place">{item.place}</div>
              <div className="driver-route-card__note">{item.note}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="driver-route-card__alt">
        牛岛建议作为备选：上岛通常至少占3小时，会压缩整体行程；如果当天一定去，建议取消月汀里，或让司机按船班临场调整。
      </div>
    </div>
  );
}

function ReturnTimingCard() {
  const route = [
    { time: '16:00', place: '西线海边开始返城', note: '从金陵/协才方向回新济州约50~70分钟' },
    { time: '17:30', place: '先逛新罗/乐天免税店', note: '只买重点清单，避免拖到机场截止时间' },
    { time: '19:30', place: '回森兰德酒店取行李', note: '整理随身物品，确认护照、机票、退税/提货信息' },
    { time: '20:10', place: '酒店出发去机场', note: '莲洞到机场约10~15分钟，预留路况缓冲' },
    { time: '20:25', place: '抵达济州机场', note: '22:40起飞；比提前2小时到达多留约15分钟' },
  ];

  return (
    <div className="driver-route-card" aria-label="8月2日返程倒计时">
      <div className="driver-route-card__header">
        <div>
          <div className="driver-route-card__eyebrow">返程倒计时</div>
          <div className="driver-route-card__title">最后一天：海岸线 → 免税店 → 酒店取行李 → 机场</div>
        </div>
        <span className="driver-route-card__badge">最晚20:40到机场</span>
      </div>

      <div className="driver-route-card__summary">
        22:40 航班按“提前2小时到机场”计算，机场到达硬截止是 20:40；从森兰德酒店到机场约10~15分钟，所以建议 20:10 前从酒店出发。
      </div>

      <div className="driver-route-card__list">
        {route.map((item) => (
          <div className="driver-route-card__row" key={item.time + item.place}>
            <span className="driver-route-card__time">{item.time}</span>
            <div>
              <div className="driver-route-card__place">{item.place}</div>
              <div className="driver-route-card__note">{item.note}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="driver-route-card__alt">
        如果免税店购物较久，优先砍掉海边第二站停留时间；不要压缩“取行李 + 去机场”这段缓冲。
      </div>
    </div>
  );
}

export default function DayTimeline({ day }: { day: DayPlan }) {
  return (
    <div className="day-section" id={`day-${day.day}`}>
      <div className="day-header">
        <div className="day-stamp">
          <span className="day-stamp__label">Day</span>
          <span className="day-stamp__num">{day.day}</span>
        </div>
        <div className="day-info">
          <div className="day-info__date">
            {day.date} {day.weekday}
          </div>
          <div className="day-info__theme">{day.theme}</div>
          <span className="day-transport">{day.transport}</span>
        </div>
      </div>

      {day.day === 2 && <DriverRouteCard />}
      {day.day === 3 && <ReturnTimingCard />}

      <div className="timeline">
        {day.spots.map((spot, i) => (
          <SpotCard key={spot.id} spot={spot} index={i} />
        ))}
      </div>
    </div>
  );
}
