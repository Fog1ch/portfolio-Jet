"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main id="main-content" tabIndex={-1} className="state-page shell"><span className="section-kicker">Something went wrong</span><h1>A small detour.</h1><p>The page couldn’t load. Please try again.</p><button type="button" onClick={reset} className="solid-link">Try again <span className="icon icon-up-right" aria-hidden="true" /></button></main>;
}
