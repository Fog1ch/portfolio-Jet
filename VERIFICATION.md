# Verification — 17 October 2026

Verified against the local production build with Next.js 15.5.28, Chromium 154, and Lighthouse 13.5.0. No website tracking was used. QA tooling was installed separately from the application and adds no runtime dependencies.

## Production checks

- `npm run build`: **PASS**, zero build or TypeScript errors; Home, all four case studies, sitemap, robots, and the 404 route generated successfully.
- `npm run lint`: **PASS**, ESLint clean with zero warnings; `tsc --noEmit` clean with strict TypeScript enabled.
- Requested `app/`, `components/`, `lib/`, and four `public/covers/` files: **PASS**.
- Four JPG covers: **1600 × 1000**, approximately 53–111 KB each.
- Project accent contrast against white: **7.31:1**, **7.08:1**, **8.72:1**, **7.13:1**.

## Lighthouse mobile

Default mobile simulation: 412 × 823 viewport, 4× CPU slowdown, simulated 150 ms RTT and 1.6 Mbps throughput. Audits ran sequentially against `npm start`, without concurrent browser tests. Targets were Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95, LCP <2.5 seconds, and CLS <0.1.

| Route | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 99 | 100 | 100 | 100 | 2.263 s | 0.0073 | 36 ms |
| `/work/project-1` | 96 | 100 | 100 | 100 | 2.260 s | 0.0073 | 188 ms |
| `/work/project-2` | 100 | 100 | 100 | 100 | 1.867 s | 0.0073 | 31.5 ms |
| `/work/project-3` | 100 | 100 | 100 | 100 | 1.821 s | 0.0073 | 38.5 ms |
| `/work/project-4` | 98 | 100 | 100 | 100 | 2.169 s | 0.0073 | 103 ms |

All five pages pass every Lighthouse score, LCP, and CLS target in this local test. CLS is rounded upward in this table. Repeat on the final hosting domain and after changing content or assets.

## Browser acceptance checks

- **PASS:** Home and every `/work/project-1` through `/work/project-4` return HTTP 200 with the correct project heading.
- **PASS:** `/unknown-slug` and `/work/unknown-slug` return HTTP 404 with the home link.
- **PASS:** `/sitemap.xml` and `/robots.txt` return HTTP 200.
- **PASS:** No unexpected browser console or uncaught JavaScript errors on the portfolio routes. Expected network messages from deliberately requested 404 URLs were excluded from this assertion. Lighthouse reports no console errors on all five content pages.
- **PASS:** With JavaScript disabled, titles and project content remain visible, all four home covers load after scrolling, case study hero/detail images load, and mobile navigation renders ordinary links.
- **PASS:** With reduced motion, all hero/card transforms are `none`, all card opacity values are `1`, and the case cover is unscaled. Reading progress updates via an immediate clip with no transform. The contact underline is static, including hover. Changing the motion preference while the page is open is supported.
- **PASS:** Keyboard Tab reaches the skip link, navigation, all four project links, about/contact links, email, and footer links. Focus outlines are at least 2px (implemented as 3px).
- **PASS:** Activating the skip link focuses `main-content`.
- **PASS:** Mobile menu opens with its button, loops Tab and Shift+Tab, dismisses with Escape or a navigation link, and returns focus to the trigger. Native modal semantics prevent interacting with the background.
- **PASS:** Home, a representative case study, and the open mobile menu have zero axe WCAG 2 A/AA and WCAG 2.1 AA violations.
- **PASS:** No horizontal document overflow at 320px and 390px. Desktop and mobile screenshots inspected.
- **PASS:** The actual `app/error.tsx` caught a deliberately thrown component effect error in an isolated copy of the project. Its “Try again” button recovered Home after the transient error. The injected error is absent from the delivered source.

## Interaction performance and measurement limits

A separate mobile interaction test at 390 × 844 with 4× CPU slowdown opened/closed the menu repeatedly and navigated to selected work. Chrome Event Timing recorded a maximum interaction event duration of **56 ms**, below the 200 ms target in this lab session.

**Field INP is not measured.** Lighthouse navigation audits do not measure field INP, and the lab event measurement is not a guarantee of real-user INP. Confirm the <200 ms field target after deployment with representative real-world usage. Deployment/network conditions, the final images, and slower devices can also change Lighthouse and LCP results. The application itself intentionally includes no telemetry.

## Launch content

The project is delivered as Next.js source ready for Vercel; no production deployment or domain connection was performed. Replace the four project placeholders, reserved example email, and canonical example URL before public launch. No client facts, metrics, or testimonials were invented. See `README.md` for setup, editing, and Vercel deployment instructions.
