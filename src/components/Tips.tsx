const tips = [
  {
    icon: "✈",
    title: "交通入岛",
    body: "首尔金浦→济州约1小时航班，每日百余班次。也可乘坐约11小时的客轮慢游感受海上风光。",
  },
  {
    icon: "🌿",
    title: "最佳时节",
    body: "春季赏油菜花与樱花（3月）；秋季枫红如火（10-11月）；夏季避台风；冬季看雪景。",
  },
  {
    icon: "💳",
    title: "消费参考",
    body: "人均日消费约500元人民币（含住宿）。黑猪五花约100元/人，景点门票多为20-60元。",
  },
  {
    icon: "🗣",
    title: "语言与通讯",
    body: "中文沟通较困难，建议备好翻译APP。中国手机需购买韩国SIM卡或开通国际漫游套餐。",
  },
];

export default function Tips() {
  return (
    <section className="tips" id="tips">
      <div className="section-header reveal">
        <span className="section-eyebrow">TRAVEL TIPS</span>
        <h2 className="section-title" style={{ color: "var(--c-text-dk)" }}>旅行贴士</h2>
      </div>
      <div className="tips-grid">
        {tips.map((t, i) => (
          <div className="tip-item reveal" key={i}>
            <span className="tip-icon">{t.icon}</span>
            <div className="tip-title">{t.title}</div>
            <div className="tip-body">{t.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
