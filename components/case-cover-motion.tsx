"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { blurDataURL } from "@/lib/projects";
import { useMotionPreference } from "./hero-motion";

export default function CaseCoverMotion({ src, title }: { src: string; title: string }) {
  const { mounted, reduced } = useMotionPreference();
  const { scrollY } = useScroll();
  const [screenHeight, setScreenHeight] = useState(1000);
  const scale = useTransform(scrollY, [0, screenHeight], [1.15, 1]);
  useEffect(() => {
    const resize = () => setScreenHeight(window.innerHeight);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="case-cover relative aspect-[16/10] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: mounted && !reduced ? scale : 1 }}>
        <Image src={src} alt={`Full cover artwork for ${title}, a placeholder project`} fill sizes="100vw" priority placeholder="blur" blurDataURL={blurDataURL} className="object-cover" />
      </motion.div>
      <span className="case-cover-label">JetIT / Placeholder project</span>
    </div>
  );
}
