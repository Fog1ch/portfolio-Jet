"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open) {
      const triggerElement = trigger.current;
      element.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        element.close();
        document.body.style.overflow = previous;
        triggerElement?.focus();
      };
    }
  }, [open]);

  const links = (
    <>
      <Link href="/#work" onClick={() => setOpen(false)}>Selected work <span className="icon icon-up-right" aria-hidden="true" /></Link>
      <Link href="/#about" onClick={() => setOpen(false)}>The studio <span className="icon icon-up-right" aria-hidden="true" /></Link>
      <Link href="/#contact" onClick={() => setOpen(false)}>Let’s talk <span className="icon icon-up-right" aria-hidden="true" /></Link>
    </>
  );

  return (
    <div className="mobile-nav">
      {!mounted ? <nav aria-label="Mobile navigation" className="fallback-nav">{links}</nav> : (
        <button ref={trigger} type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)} className="menu-trigger">Menu <span aria-hidden="true">☰</span></button>
      )}
      <dialog id="mobile-menu" ref={dialog} aria-labelledby="menu-title" onCancel={(event) => { event.preventDefault(); setOpen(false); }} onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="menu-panel">
          <div className="menu-heading"><span id="menu-title">Explore JetIT</span><button type="button" onClick={() => setOpen(false)} autoFocus>Close <span aria-hidden="true">×</span></button></div>
          <nav aria-label="Mobile navigation">{links}</nav>
          <p>Web Development Studio<br />Warsaw, Poland</p>
        </div>
      </dialog>
    </div>
  );
}
