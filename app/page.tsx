import type { Metadata } from "next";
import HeroMotion from "@/components/hero-motion";
import WorkGridMotion from "@/components/work-grid-motion";
import ContactLinkMotion from "@/components/contact-link-motion";
import { contactEmail, jsonLd, projects, siteUrl } from "@/lib/projects";

export const metadata: Metadata = {
  title: { absolute: "JetIT — Web Development Studio, Warsaw" },
  description: "A Web Development Studio in Warsaw, Poland. Explore the JetIT portfolio and start a conversation about your next website.",
  alternates: { canonical: "/" },
  openGraph: { title: "JetIT — Web Development Studio, Warsaw", description: "A Web Development Studio in Warsaw, Poland.", url: "/", images: [{ url: "/covers/project-1.jpg", width: 1600, height: 1000, alt: "JetIT portfolio placeholder artwork" }] },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "Person", name: "JetIT", jobTitle: "Web Development Studio", url: siteUrl.href, homeLocation: { "@type": "Place", name: "Warsaw, Poland" } }) }} />
      <section className="hero shell" aria-label="Introduction">
        <div className="hero-eyebrow"><span className="status-dot" aria-hidden="true" />Independent studio. Intentional work.</div>
        <div className="hero-composition">
          <HeroMotion />
          <div className="hero-aside"><span className="coordinate" aria-hidden="true">52°13′N 21°00′E</span><p>Considered websites.<br />From first idea<br />to final pixel.</p><span className="location">Based in Warsaw, Poland<br />Building for the web.</span><a href="#work" className="hero-arrow" aria-label="Explore selected work"><span className="icon icon-down-left" aria-hidden="true" /></a></div>
        </div>
        <div className="hero-bottom"><span>Design meets development.</span><a href="#work">Scroll to explore <span className="icon icon-down" aria-hidden="true" /></a></div>
      </section>

      <section id="work" className="work-section shell" aria-labelledby="work-title">
        <div className="section-heading"><div className="section-kicker"><span>01 /</span> The portfolio</div><div className="heading-row"><h2 id="work-title">Selected work<span className="superscript">(04)</span></h2><p>Four spaces for what comes next.<br />Project placeholders, ready for real stories.</p></div></div>
        <WorkGridMotion projects={projects.map(({ slug, title, coverImage, accentColor }) => ({ slug, title, coverImage, accentColor }))} />
      </section>

      <section id="about" className="about-section shell" aria-labelledby="about-title">
        <div className="section-kicker"><span>02 /</span> The studio</div>
        <div className="about-content"><h2 id="about-title">A clear idea.<br />A considered website.</h2><div className="about-copy"><p>JetIT is a Web Development Studio based in Warsaw, Poland. We bring a thoughtful approach to the space where design and development meet.</p><p>Our focus is simple: make the web feel clear, useful, and a pleasure to explore. Have a website in mind? Let’s start with a conversation.</p><a href="#contact" className="text-link">Meet your next project <span className="icon icon-up-right" aria-hidden="true" /></a></div></div>
        <div className="studio-note"><span className="status-dot" aria-hidden="true" />Warsaw, Poland<span>Thoughtfully made for the web.</span></div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="shell"><div className="section-kicker"><span>03 /</span> Start a conversation</div><div className="contact-heading"><h2 id="contact-title">Something in mind?<br />Let’s make it happen.</h2><svg className="contact-asterisk" aria-hidden="true" viewBox="0 0 100 100" fill="none"><path d="M50 8v84M8 50h84M20 20l60 60M20 80l60-60" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /></svg></div><ContactLinkMotion email={contactEmail} /><p className="contact-note">Example inbox — replace with your studio email before launch.</p><div className="contact-bottom"><span>Good things start with a hello.</span><span>Warsaw, Poland <span className="icon icon-up-right" aria-hidden="true" /></span></div></div></section>
    </main>
  );
}
