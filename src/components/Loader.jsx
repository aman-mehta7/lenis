import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../index.css";

const MIN_LOAD_TIME = 3000;

export default function Loader({ progress, onFinish }) {
  const loaderRef = useRef(null);
  const barRef = useRef(null);
  const counterRef = useRef(null);
  const startTime = useRef(Date.now());
  const hasFinished = useRef(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [progress]);

  useEffect(() => {
    if (counterRef.current) {
      gsap.to(counterRef.current, {
        innerText: Math.floor(progress),
        duration: 0.4,
        ease: "power2.out",
        snap: { innerText: 1 },
      });
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 100 && !hasFinished.current) {
      hasFinished.current = true;
      const elapsed = Date.now() - startTime.current;
      const extraDelay = Math.max(0, MIN_LOAD_TIME - elapsed) / 2000;

      const tl = gsap.timeline({
        delay: extraDelay,
        onComplete: () => onFinish(),
      });

      tl.to(".loader-ring", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".loader-counter", {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      }, "-=0.1")
      .to(".loader-brand", {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      }, "-=0.3")
      .to(loaderRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.8,
        ease: "power4.inOut",
      }, "-=0.2");
    }
  }, [progress, onFinish]);

  return (
    <div
      ref={loaderRef}
      className="loader-screen fixed h-screen w-screen bg-black z-[99999]"
    >
      <div className="loader-content">
        <div className="loader-brand">LENIS</div>
        <div className="loader-ring">
          <svg viewBox="0 0 100 100" className="loader-ring-svg">
            <circle cx="50" cy="50" r="42" className="loader-ring-track" />
            <circle cx="50" cy="50" r="42" className="loader-ring-fill" />
          </svg>
        </div>
        <div className="loader-counter">
          <span ref={counterRef}>0</span>
          <span className="loader-percent">%</span>
        </div>
        <div className="loader-bar">
          <div ref={barRef} className="loader-fill" style={{ width: "0%" }} />
        </div>
        <p className="loader-label">
          Loading Assets<span className="loader-dots">{dots}</span>
        </p>
      </div>
    </div>
  );
}
