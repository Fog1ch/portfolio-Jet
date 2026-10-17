import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { MotionConfig } from "@/components/hero-motion";
import Nav from "@/components/nav";
import SkipLink from "@/components/skip-link";
import { siteUrl } from "@/lib/projects";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", preload: true, variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: { icon: { url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23d5f36b'/%3E%3Cpath d='M12 28 28 12M12 12h16v16' fill='none' stroke='%230f172a' stroke-width='3'/%3E%3C/svg%3E", type: "image/svg+xml" } },
  title: { default: "JetIT — Web Development Studio, Warsaw", template: "%s — JetIT" },
  description: "JetIT is a Web Development Studio based in Warsaw, Poland. Explore our portfolio and get in touch about your next website.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: "JetIT", title: "JetIT — Web Development Studio", description: "Considered websites. From first idea to final pixel. Based in Warsaw, Poland.", url: "/", images: [{ url: "/covers/project-1.jpg", width: 1600, height: 1000, alt: "JetIT portfolio placeholder artwork" }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MotionConfig reducedMotion="user">
          <SkipLink />
          <Nav />
          {children}
          <footer className="site-footer shell"><Link href="/" className="footer-brand" aria-label="JetIT home">JetIT.</Link><p>Web Development Studio · Warsaw, Poland</p><a href="#main-content">Back to top <span className="icon icon-up" aria-hidden="true" /></a></footer>
        </MotionConfig>
      </body>
    </html>
  );
}
