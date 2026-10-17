import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Nav() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="JetIT home">
        <span className="brand-mark" aria-hidden="true"><span className="icon icon-up-right" /></span>JetIT<span className="brand-period">.</span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        <Link href="/#work">Selected work <span className="nav-count">04</span></Link>
        <Link href="/#about">The studio</Link>
        <Link href="/#contact" className="talk-link">Let’s talk <span className="icon icon-up-right" aria-hidden="true" /></Link>
      </nav>
      <MobileMenu />
    </header>
  );
}
