export default function Intro() {
  return (
    <section className="intro">
      <div>
        <h2 className="intro-quote reveal">
          火山与海洋<br />
          <em>共同书写</em>的<br />
          岛屿传说
        </h2>
        <p className="intro-body reveal">
          济州岛是韩国最大的岛屿，也是东亚最独特的自然保护区之一。这里有韩国最高峰汉拿山、壮阔的熔岩洞窟、海女文化与橘子庄园——自然与人文在这片玄武岩大地上交织出无与伦比的魅力。
        </p>
      </div>
      <div className="stats-grid reveal">
        <div className="stat-item">
          <div className="stat-num">1,950<span className="stat-unit">m</span></div>
          <div className="stat-label">汉拿山海拔<br />韩国最高峰</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">3</div>
          <div className="stat-label">UNESCO<br />世界遗产认证</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">73<span className="stat-unit">km</span></div>
          <div className="stat-label">岛屿东西<br />最大跨度</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">1.4<span className="stat-unit">万</span></div>
          <div className="stat-label">海女（Haenyeo）<br />无潜水设备潜海</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">160</div>
          <div className="stat-label">个以上<br />熔岩丘峰</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">365</div>
          <div className="stat-label">天<br />全年皆可游</div>
        </div>
      </div>
    </section>
  );
}
