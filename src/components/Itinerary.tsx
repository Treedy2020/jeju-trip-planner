const days = [
  {
    theme: "火山熔岩 · 东线探索",
    activities: ["城山日出峰日出", "城邑民俗村", "成山港活章鱼", "涉地可支海岸", "月汀里咖啡街"],
  },
  {
    theme: "海洋奇境 · 南线漫游",
    activities: ["正房瀑布", "天帝渊三连瀑", "中文旅游区", "海女表演", "서귀포夜市"],
  },
  {
    theme: "洞窟秘境 · 北线探险",
    activities: ["万丈窟熔岩洞", "金宁迷路公园", "涯月海女村", "翰林公园", "龙头岩日落"],
  },
  {
    theme: "高山云端 · 汉拿山徒步",
    activities: ["观音寺登山路", "白鹿潭火山湖", "高山植物园", "济州民俗自然博物馆", "黑猪五花告别晚餐"],
  },
];

export default function Itinerary() {
  return (
    <section className="itinerary" id="itinerary">
      <div className="section-header reveal">
        <span className="section-eyebrow">ITINERARY</span>
        <h2 className="section-title">四日深度行程</h2>
      </div>
      <div className="itinerary-grid">
        <div className="itinerary-intro reveal">
          <p>
            精心设计的四日路线，覆盖东、南、北、山四个方向，让你在有限时间内感受济州的最大维度。
          </p>
          <p style={{ marginTop: 20 }}>
            建议租车自驾，岛内公共交通覆盖率有限。主要景点均有停车场，驾驶难度低，路况良好。
          </p>
          <div style={{
            marginTop: 40,
            padding: "24px",
            background: "rgba(63,160,138,0.12)",
            borderLeft: "3px solid var(--c-foam)",
            borderRadius: "2px"
          }}>
            <div style={{ fontSize: 12, letterSpacing: "0.12em", color: "var(--c-foam)", marginBottom: 10 }}>TRAVEL TIP</div>
            <div style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(250,247,239,0.7)", fontFamily: "var(--f-cn)" }}>
              最佳游览季节：3—5月（樱花）、9—11月（红叶）。夏季台风季需关注天气预报；冬季汉拿山可能因积雪封山。
            </div>
          </div>
        </div>
        <div className="day-list reveal">
          {days.map((d, i) => (
            <div className="day-item" key={i}>
              <div className="day-num">0{i + 1}</div>
              <div className="day-content">
                <div className="day-theme">{d.theme}</div>
                <div className="day-activities">
                  {d.activities.map((a, j) => (
                    <span className="day-tag" key={j}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
