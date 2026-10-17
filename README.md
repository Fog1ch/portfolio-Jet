# JetIT portfolio

A responsive studio portfolio built with Next.js 15 App Router, strict TypeScript, Tailwind CSS, and Motion (`motion/react`). React, React DOM, Next.js, and Motion are the only runtime dependencies. No analytics, cookies, tracking, external scripts, or third-party font requests are added.

## Run locally

Requires Node.js 20.9+ (Node.js 22 LTS recommended) and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Production checks and server:

```sh
npm run build
npm run lint
npm start
```

`lint` runs ESLint with zero warnings allowed, then TypeScript with `strict: true`. Google Fonts must be reachable at build time for `next/font/google`. Inter is downloaded during the build and served locally, with `display: swap`, font preloading, and adjusted fallback metrics.

## Defaults and launch content

The supplied identity is **JetIT**, **Web Development Studio**, **Warsaw, Poland**. The empty palette/font inputs use these requested defaults:

| Setting | Value |
| --- | --- |
| Background | `#F8FAFC` |
| Surface | `#FFFFFF` |
| Text | `#0F172A` |
| Muted | `#64748B` |
| Border | `#E2E8F0` |
| Project accents | `#9A3412`, `#3F6212`, `#1E40AF`, `#166534` |
| Heading font | Inter, 600–700 |
| Body font | Inter, 400–500 |

The studio contact panel uses a decorative pale green (`#D5F36B`) with dark text. All project accents exceed 4.5:1 contrast against white. Light borders are decorative; interactive elements use contrasting text and a 3px blue focus outline.

No project facts were supplied. All four projects are explicitly labeled `[PROJECT 1]` through `[PROJECT 4]`. Client type, year, role, tools, and story sections remain placeholders. The custom cover compositions are illustrative placeholder artwork, not representations of client engagements. No clients, results, metrics, or testimonials have been invented.

**Before a public launch:** replace `hello@jetit.example` in `lib/projects.ts` with your real inbox. `.example` is a reserved domain and does not deliver mail. Update the visible example-inbox note in `app/page.tsx`. Replace `https://example.com` with your canonical domain, and provide verified project content. The requested `Person` JSON-LD is present on Home; because JetIT is described as a studio, consider `Organization` instead if that better matches your real legal identity.

## Edit the portfolio

Edit `lib/projects.ts`. It exports the exact `Project` type and four seeded entries. Replace each placeholder with approved facts, keeping summaries at **30 words or fewer**. `sections` accepts `{ heading, body, image? }`. Keep slugs unique and URL-safe. Slugs generate the case study routes, metadata, sitemap, and next-project links automatically. The four initial routes are:

- `/work/project-1`
- `/work/project-2`
- `/work/project-3`
- `/work/project-4`

When replacing an `accentColor`, use a six-digit hex with at least 4.5:1 contrast against white. Do not enter unverified metrics or testimonials. Escape handling is included for JSON-LD text. Edit the home copy in `app/page.tsx` and global styles in `app/globals.css`.

## Replace cover images

Replace `public/covers/project-1.jpg` through `project-4.jpg`, or update each project's `coverImage` path. Use **1600 × 1000 JPGs (16:10)**, preferably below 200 KB. These local paths are served with `next/image` optimization and responsive `sizes`; only the case study hero cover has `priority`. Other covers are lazy-loaded. Update meaningful alt descriptions in the image components if your final artwork calls for more specific wording. A lightweight neutral blur placeholder is supplied in `lib/projects.ts`; replace it with a cover-specific tiny data URL if desired. Case study hero containers are intentionally 90svh; other images retain a fixed 16:10 aspect ratio.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute canonical origin, e.g. `https://jetit.your-domain.com`. Used for `metadataBase`, canonical URLs, JSON-LD, sitemap, and robots. Build again after changing it. Defaults to `https://example.com` for local development. |
| `NEXT_TELEMETRY_DISABLED` | Set to `1` in the sample environment to disable Next.js CLI telemetry on the build/development machine. This is separate from the website, which contains no tracking. |

No secrets or external APIs are required. Commit `.env.example`, never `.env.local`.

## Deploy to Vercel

1. Push this directory to a Git repository and import it into Vercel.
2. Select the **Next.js** preset. If using a monorepo, set the root directory to this project directory.
3. Set `NEXT_PUBLIC_SITE_URL` for Production to the final HTTPS domain. Set a separate value for Preview if its canonical URLs should differ.
4. Deploy with the default `npm run build` command. Next.js image optimization and static route generation are supported without extra configuration.
5. After connecting your domain, rebuild with the final origin and run the acceptance checks against that deployment.

There is no automatic production deployment configured in this repository. If analytics, cookies, or tracking are added later, document the provider, purpose, data collection, and consent behavior here first.

## Motion and accessibility

The root server layout wraps the app with `MotionConfig reducedMotion="user"`. Motion and interaction logic is confined to the listed client components and the required error boundary. Hidden starting states are enabled only after mounting; server HTML remains readable with JavaScript disabled. Native scrolling is preserved.

With reduced motion, reveal transforms and cover scaling are disabled, the email underline is static, and reading progress updates immediately using a clip rather than an animated transform. The mobile menu uses a native modal dialog, an explicit Tab loop, Escape dismissal, route/link dismissal, background scroll locking, and trigger-focus restoration. With JavaScript disabled, mobile navigation renders as ordinary links.

## Acceptance checks

The build and lint results, browser checks, and measured Lighthouse scores are recorded in `VERIFICATION.md`. Performance numbers describe the tested local production build; hosting, network latency, final content, and device speed can change them. Recheck the deployed site after replacing assets.

To test the error boundary without shipping a deliberate fault: temporarily add `throw new Error("Boundary verification")` inside the Home function in `app/page.tsx`, start the development server, and confirm “A small detour” and the “Try again” button appear. Remove the throw and press “Try again”; Home should render again. Never leave the throw in production. Unknown routes must return HTTP 404, and `/sitemap.xml` and `/robots.txt` must return HTTP 200.

Lighthouse lab measurements cannot guarantee field INP; evaluate real interactions in the browser and collect field data only if you later choose an explicitly documented, privacy-conscious monitoring approach.
