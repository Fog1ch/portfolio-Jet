"use client";

import { useMotionPreference } from "./hero-motion";

export default function ContactLinkMotion({ email }: { email: string }) {
  const { reduced } = useMotionPreference();
  return <a className="contact-email" href={`mailto:${email}`} data-reduced-motion={reduced ? "true" : undefined}>{email}<span className="icon icon-up-right" aria-hidden="true" /></a>;
}
