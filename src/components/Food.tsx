const foods = [
  {
    tag: "济州特产",
    name: "黑猪五花",
    cn: "제주 흑돼지",
    desc: "济州岛特有的黑猪品种，肉质紧实有嚼劲，油脂分布均匀。炭火烤制后配泡菜与生蒜，是来济必吃的头号美食。",
    img: "https://images.pexels.com/photos/18426529/pexels-photo-18426529.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "海鲜珍馐",
    name: "海女鲜捞",
    cn: "해녀 해산물",
    desc: "海女当日现捕的鲍鱼、海螺、海胆等鲜货，直接白灼或生食。与大自然最短的距离，最纯粹的海洋鲜味。",
    img: "https://images.pexels.com/photos/8897421/pexels-photo-8897421.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "本地风味",
    name: "蟹黄汤饭",
    cn: "꽃게탕 게장",
    desc: "用济州近海梭子蟹炖煮的浓郁汤饭，蟹黄融入米饭中，搭配腌制蟹钳，浓鲜香辣，令人欲罢不能。",
    img: "https://images.pexels.com/photos/20167871/pexels-photo-20167871.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Food() {
  return (
    <section className="food" id="food">
      <div className="section-header reveal">
        <span className="section-eyebrow">CUISINE</span>
        <h2 className="section-title" style={{ color: "var(--c-text-dk)" }}>济州岛三大必食</h2>
      </div>
      <div className="food-grid">
        {foods.map((f, i) => (
          <div className="food-card reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div style={{ overflow: "hidden" }}>
              <img className="food-card-img" src={f.img} alt={f.name} />
            </div>
            <div className="food-card-body">
              <div className="food-card-tag">{f.tag}</div>
              <div className="food-card-name">{f.name}</div>
              <div style={{ fontSize: 12, color: "var(--c-stone)", letterSpacing: "0.06em", marginBottom: 12 }}>{f.cn}</div>
              <div className="food-card-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
