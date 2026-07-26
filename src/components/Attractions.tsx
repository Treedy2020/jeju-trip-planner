export default function Attractions() {
  return (
    <section className="attractions" id="attractions">
      <div className="section-header reveal">
        <span className="section-eyebrow">MUST-SEE</span>
        <h2 className="section-title">不可错过的风景</h2>
      </div>

      <div className="attractions-layout reveal">
        {/* Card 0 - tall left */}
        <div className="card-0">
          <div className="attraction-card" style={{ height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/8850965/pexels-photo-8850965.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="城山日出峰"
            />
            <div className="attraction-card-overlay">
              <div className="attraction-tag">UNESCO 世界自然遗产</div>
              <div className="attraction-name">城山日出峰</div>
              <div className="attraction-name-kr">성산일출봉 Seongsan Ilchulbong</div>
              <div className="attraction-desc">
                由海底火山喷发而成的天然城堡，海拔182米。每年元旦数万人聚集于此，迎接济州第一缕日出，被誉为"神的椅子"。
              </div>
            </div>
          </div>
        </div>

        {/* Card 1 - top right */}
        <div className="card-1">
          <div className="attraction-card">
            <img
              src="https://images.pexels.com/photos/16663092/pexels-photo-16663092.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="正房瀑布"
            />
            <div className="attraction-card-overlay">
              <div className="attraction-tag">自然奇观</div>
              <div className="attraction-name">正房瀑布</div>
              <div className="attraction-name-kr">정방폭포 Jeongbang</div>
              <div className="attraction-desc">
                亚洲唯一直接注入大海的瀑布，落差23米，与玄武岩海岸的撞击声令人震撼。
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - bottom right */}
        <div className="card-2">
          <div className="attraction-card">
            <img
              src="https://images.pexels.com/photos/34350262/pexels-photo-34350262.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="龙头岩海岸"
            />
            <div className="attraction-card-overlay">
              <div className="attraction-tag">地质奇景</div>
              <div className="attraction-name">龙头岩</div>
              <div className="attraction-name-kr">용두암 Yongduam</div>
              <div className="attraction-desc">
                一块高达10米、形似龙头的玄武岩突兀于海中，千万年的风浪塑造了这不可思议的形态。
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra highlight row */}
      <div style={{ marginTop: 3, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }} className="reveal">
        {[
          {
            tag: "韩国最高峰",
            name: "汉拿山",
            kr: "한라산 Hallasan",
            desc: "海拔1950米，熔岩地貌与高山植物构成壮丽生态圈。冬季白雪皑皑，夏季翠绿如茵。",
            bg: "#0a2030",
          },
          {
            tag: "UNESCO 洞穴遗产",
            name: "万丈窟",
            kr: "만장굴 Manjanggul",
            desc: "全长约13.4公里，世界最长熔岩洞窟之一，洞内保存着巨型熔岩石柱，气温常年16℃。",
            bg: "#061622",
          },
          {
            tag: "海女文化",
            name: "涯月海女村",
            kr: "해녀 Haenyeo",
            desc: "列入UNESCO非遗的海女文化发源地，亲眼目睹阿珠嬷们徒手下潜20米捕捞海产的绝技。",
            bg: "#102a1e",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: item.bg,
              padding: "40px 36px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div className="attraction-tag" style={{ marginBottom: 14 }}>{item.tag}</div>
            <div className="attraction-name" style={{ fontSize: 24, marginBottom: 6 }}>{item.name}</div>
            <div className="attraction-name-kr">{item.kr}</div>
            <div className="attraction-desc" style={{ opacity: 1, transform: "none", fontSize: 13 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
