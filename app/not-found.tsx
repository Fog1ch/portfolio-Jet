import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Page not found", description: "This page could not be found. Return to the JetIT portfolio.", robots: { index: false, follow: true } };
export default function NotFound() {
  return <main id="main-content" tabIndex={-1} className="state-page shell"><span className="section-kicker">404 / A little off course</span><h1>Nothing here.<br />Plenty to explore.</h1><p>We couldn’t find that page.</p><Link href="/" className="solid-link">Back to JetIT <span className="icon icon-up-right" aria-hidden="true" /></Link></main>;
}
