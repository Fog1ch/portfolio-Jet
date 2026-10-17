"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// MotionConfig is a client boundary imported directly by the server layout.
export { MotionConfig } from "motion/react";

export function useMotionPreference() {
  const preference = useReducedMotion();
  const [state, setState] = useState({ mounted: false, reduced: true });
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setState({ mounted: true, reduced: query.matches });
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  // Read again after hydration and subscribe to live preference changes.
  return { mounted: state.mounted, reduced: state.mounted ? state.reduced : preference ?? true };
}

export default function HeroMotion() {
  const { mounted, reduced } = useMotionPreference();
  const animate = mounted && !reduced;

  return (
    <h1 className="hero-title">
      {["JetIT.", "Web Development", "Studio."].map((line, index) => (
        <span className="hero-mask" key={line}>
          <motion.span
            className={index === 0 ? "hero-name" : "hero-role"}
            initial={false}
            animate={animate ? { y: ["110%", "0%"] } : { y: "0%" }}
            transition={{ duration: animate ? 0.8 : 0, delay: animate ? index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
          >{line}</motion.span>
        </span>
      ))}
    </h1>
  );
}
