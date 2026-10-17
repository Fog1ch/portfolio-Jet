"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMotionPreference } from "./hero-motion";
import { blurDataURL, type Project } from "@/lib/projects";

type CardProject = Pick<Project, "slug" | "title" | "coverImage" | "accentColor">;

function WorkCard({ project, index }: { project: CardProject; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { mounted, reduced } = useMotionPreference();
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const animate = mounted && !reduced;

  return (
    <motion.article ref={ref} initial={false}
      animate={animate && !inView ? { y: 40, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: animate ? 0.65 : 0, delay: animate && inView ? index * 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}>
      <Link href={`/work/${project.slug}`} className="work-card group" >
        <div className="cover-frame relative aspect-[16/10] overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale: animate ? scale : 1 }}>
            <Image src={project.coverImage} alt={`Abstract editorial cover for ${project.title}, a placeholder project`} fill sizes="(min-width: 1440px) 640px, (min-width: 768px) 46vw, 92vw" placeholder="blur" blurDataURL={blurDataURL} />
          </motion.div>
          <span className="cover-tag">Placeholder / 0{index + 1}</span>
          <span className="card-open" aria-hidden="true"><span className="icon icon-up-right" /></span>
        </div>
        <div className="card-caption"><div><h3>{project.title}</h3><p>Project details coming soon</p></div><span className="project-number" style={{ color: project.accentColor }}>0{index + 1}</span></div>
      </Link>
    </motion.article>
  );
}

export default function WorkGridMotion({ projects }: { projects: CardProject[] }) {
  return <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-16">{projects.map((project, index) => <WorkCard key={project.slug} project={project} index={index} />)}</div>;
}
