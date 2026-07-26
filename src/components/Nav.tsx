import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="nav-logo" href="#">济州島 JEJU</a>
      <ul className="nav-links">
        <li><a href="#attractions">景点</a></li>
        <li><a href="#food">美食</a></li>
        <li><a href="#itinerary">行程</a></li>
        <li><a href="#tips">旅行贴士</a></li>
        <li><a href="#itinerary" className="nav-cta">开始规划</a></li>
      </ul>
    </nav>
  );
}
