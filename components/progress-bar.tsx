"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";
import { useMotionPreference } from "./hero-motion";

export default function ProgressBar({ color }: { color: string }) {
  const { scrollYProgress } = useScroll();
  const { reduced } = useMotionPreference();
  const staticBar = useRef<HTMLDivElement>(null);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    // Reduced motion: instantaneous clip, no transforms or interpolation.
    if (reduced && staticBar.current) staticBar.current.style.clipPath = `inset(0 ${(1 - value) * 100}% 0 0)`;
  });
  if (reduced) return <div key="static" ref={staticBar} data-static-progress className="reading-progress" aria-hidden="true" style={{ backgroundColor: color, clipPath: "inset(0 100% 0 0)", transform: "none" }} />;
  return <motion.div key="motion" aria-hidden="true" className="reading-progress" style={{ backgroundColor: color, scaleX: scrollYProgress, transformOrigin: "left" }} />;
}
