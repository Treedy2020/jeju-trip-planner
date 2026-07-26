import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.35;
        bgRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Hero entrance animation
    if (contentRef.current) {
      const els = contentRef.current.children;
      gsap.fromTo(
        Array.from(els),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef}>
        <img
          src="https://images.pexels.com/photos/16677692/pexels-photo-16677692.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="济州岛海岸线全景"
          loading="eager"
        />
      </div>
      <div className="hero-gradient" />
      <div className="hero-content" ref={contentRef}>
        <p className="hero-eyebrow">JEJU ISLAND · 韩国 · 34°N 126°E</p>
        <h1 className="hero-title">济州</h1>
        <p className="hero-sub">
          火山熔岩塑造的神秘岛屿，蔚蓝海浪与苍翠丛林共生<br />
          UNESCO三重遗产 · 韩国最美自然胜地
        </p>
        <div className="hero-actions">
          <a href="#attractions" className="btn-primary">探索景点 →</a>
          <a href="#itinerary" className="btn-ghost">规划行程</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-bar" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </section>
  );
}
