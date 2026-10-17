import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseCoverMotion from "@/components/case-cover-motion";
import ProgressBar from "@/components/progress-bar";
import { blurDataURL, jsonLd, projects, siteUrl } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found", robots: { index: false } };
  return {
    title: `${project.title} — Case study`, description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", title: `${project.title} — JetIT`, description: project.summary, url: `/work/${project.slug}`, images: [{ url: project.coverImage, width: 1600, height: 1000, alt: `${project.title} placeholder cover` }] },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main-content" tabIndex={-1}>
      <ProgressBar color={project.accentColor} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.summary, url: new URL(`/work/${project.slug}`, siteUrl).href, image: new URL(project.coverImage, siteUrl).href, creator: { "@type": "Organization", name: "JetIT" } }) }} />
      <div className="case-intro shell"><Link href="/#work" className="text-link">← All projects</Link><div className="section-kicker">Portfolio / Placeholder case study</div><h1>{project.title}</h1><p>{project.summary}</p></div>
      <CaseCoverMotion src={project.coverImage} title={project.title} />
      <div className="case-body shell">
        <aside className="case-facts" aria-label="Project details"><dl>{[["Client", project.client], ["Year", project.year], ["Role", project.role], ["Tools", project.tools.join(", ")]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="placeholder-note">This is a template. Project information and artwork are placeholders.</p></aside>
        <article className="case-sections" aria-label="Project story">{project.sections.map((section, index) => <section key={section.heading} aria-labelledby={`section-${index}`}><span className="case-section-number" style={{ color: project.accentColor }}>0{index + 1} /</span><h2 id={`section-${index}`}>{section.heading}</h2><p>{section.body}</p>{section.image && <div className="relative aspect-[16/10] overflow-hidden case-detail-image"><Image src={section.image} alt={`${project.title} placeholder visual for the approach section`} fill sizes="(min-width: 1440px) 850px, (min-width: 1024px) 65vw, 92vw" placeholder="blur" blurDataURL={blurDataURL} /></div>}</section>)}</article>
      </div>
      <div className="next-project shell"><span className="section-kicker">Next placeholder project</span><Link href={`/work/${next.slug}`}>{next.title}<span className="icon icon-up-right" aria-hidden="true" /></Link></div>
    </main>
  );
}
