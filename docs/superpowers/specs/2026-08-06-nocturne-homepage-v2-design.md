# Nocturne Homepage V2 — Design Spec

## Overview

Replace the personal site's homepage with a new single-page design ("Nocturne v2" —
dark, Inter type, purple/green accents) delivered via `design_handoff_portfolio/`.
The existing homepage and all its sections must remain in the codebase, untouched
and unrouted, so they can be restored later if needed. The new design becomes the
`/` route.

Source of truth for visual detail: `design_handoff_portfolio/README.md`,
`design_handoff_portfolio/design/Levy Santiago v2.dc.html`, and
`design_handoff_portfolio/design/nocturne-styles.css`. This spec captures the
decisions needed to port that design into this codebase's conventions — it does
not restate every pixel value already nailed down in the handoff.

## Goals

- New homepage matches the handoff design at high fidelity (colors, type, spacing,
  interactions as specified there).
- Zero changes to any existing section component, the old `HomePage`, or existing
  shared components (`Navbar`, `Footer`, `Theme`, etc.) — they stay importable but
  unreferenced by the router.
- New code follows the codebase's existing patterns: styled-components, per-section
  folders with `index.tsx` + `styles.tsx` + `content/{en,pt}.ts`, the
  `useLanguage()` hook for i18n, `HashLink` for in-page anchors.
- EN and PT-BR copy both fully authored (PT-BR is new; the handoff only has EN).

## Non-goals (out of scope this pass)

- The separate "all projects" page referenced by "See all projects →". The link
  points at `https://github.com/levysantiago?tab=repositories` as an interim
  destination — flagged here for the user to redirect once that page exists.
- Final photography — portrait and project screenshots ship as styled placeholder
  slots (see **Assets**), not real images.
- Any change to the old homepage/sections.

## Architecture

### File tree (new files only)

```
src/pages/HomePageV2/
  index.tsx                 # composes all sections + NavbarV2/FooterV2, page bg wrapper

src/pages/sections-v2/
  Hero/            {index.tsx, styles.tsx, content/{en,pt}.ts}
  StatStrip/       {index.tsx, styles.tsx, content/{en,pt}.ts}
  AboutV2/         {index.tsx, styles.tsx, content/{en,pt}.ts}
  ExperienceV2/    {index.tsx, styles.tsx, content/{en,pt}.ts}
  TechnologiesV2/  {index.tsx, styles.tsx, content/{en,pt}.ts}
  ProjectsV2/      {index.tsx, styles.tsx, content/{en,pt}.ts}
  ContactClose/    {index.tsx, styles.tsx, content/{en,pt}.ts}

src/components/NavbarV2/    {index.tsx, styles.tsx, content/navItems.ts}
src/components/FooterV2/    {index.tsx, styles.tsx}
src/components/NocturneTheme/ index.tsx   # isolated styled-components ThemeProvider
src/components/ImagePlaceholder/ index.tsx, styles.tsx  # shared placeholder slot (portrait + 3 screenshots)
src/components/RevealOnScroll/  index.tsx  # useReveal IntersectionObserver hook + wrapper
```

Each `sections-v2/*` folder mirrors the shape of `pages/sections/About` etc.:
a typed content object per language, an `index.tsx` that reads
`useLanguage()` and renders from `content[lang]`, and a `styles.tsx` with the
section's styled-components.

### Routing changes

In `src/routes/index.tsx`, swap the two existing `<Route>` elements to render
`HomePageV2` instead of `HomePage`:

```tsx
<Route path={routesDict.home.this} element={<HomePageV2 />} />
<Route path={`${routesDict.home.this}/:lang`} element={<HomePageV2 />} />
```

The `HomePage` import is removed from `routes/index.tsx` only (the component
itself is untouched). No other route changes.

## Theming

The new design's palette (Nocturne tokens: `--color-bg #161826`, page base
`#12131f`, accent `#9184d9`, green highlight `#5ce1a6`, neutral/accent ramps,
etc. — full list in the handoff README's "Design tokens" section) is
unrelated to the existing `styled-components` theme (`components/Theme`,
purple/blue palette). Rather than extending the existing `ITheme` shape,
`NocturneTheme` wraps `HomePageV2`'s subtree in its own `ThemeProvider` with a
separate token object, so:

- Existing sections keep using `components/Theme` exactly as today.
- New sections read colors from `NocturneTheme`'s theme object the same way
  existing sections read `props.theme.colors.*` — same authoring pattern,
  different token set.

The page background (radial gradients + drifting dot-mesh overlay) is painted
on a wrapper `<div>` at the top of `HomePageV2`, not on `<body>`, so it never
affects other routes. The drift animation and scroll-reveal transitions are
disabled under `prefers-reduced-motion: reduce`, per the handoff.

## Fonts & icons

- Add the Inter Google Fonts `<link>` (weights 400/500/600) to
  `public/index.html`, next to the existing Material Icons link. Global, but
  harmless — the old design doesn't reference Inter so nothing changes for it.
- Add `@phosphor-icons/react` as a new dependency (`yarn add @phosphor-icons/react`).
  Icons used: `GithubLogo`, `LinkedinLogo`, `EnvelopeSimple`, `PlugsConnected`,
  `Brain`, `Database`, `Code`, `Sparkle`, `CloudIcon` (Phosphor's `Cloud`),
  `ArrowSquareOut` — all `regular` weight, sized per the handoff.

## Sections

Layout, spacing, typography, and copy for each section are specified verbatim
in `design_handoff_portfolio/README.md` (sections 1–9: Header, Hero, Stat
strip, About, Experience, Technologies, Projects, Contact close, Footer) and
in the HTML prototype. Implementation follows those specs exactly, translated
from inline styles to styled-components. Notes/deviations beyond the handoff:

- **NavbarV2**: sticky header, brand `Levy.` linking to `#top`, section anchors
  (About/Experience/Technologies/Projects) as `HashLink` (`smooth: true}`),
  language control (`EN` / `PT-BR`) reusing the same `changeLangPath`
  navigation pattern as the existing `Navbar`. Section links hidden below
  1020px per the handoff (no hamburger/side-nav in this design — out of scope
  unless the user asks for one later).
- **Hero**: portrait rendered via the shared `ImagePlaceholder` component
  (see Assets) inside the `mix-blend-mode: lighten` wrapper + offset accent
  outline, exactly as specified.
- **ExperienceV2**: four roles as native `<details>`/`<summary>`, first open
  by default (`openFirstRole` default `true`, hardcoded — no prop plumbing
  needed since this page has one caller). Copy is the four roles verbatim
  from the handoff (Rocketseat, BWS, Freelance, Softrends).
- **TechnologiesV2**: four groups (Core/AI/Data/Infra) with the exact tag
  lists and starred (`tag-accent`) vs outlined (`tag-outline`) styling from
  the handoff.
- **ProjectsV2**: 3 cards sourced from real project data (see **Project data**
  below), using the shared `ImagePlaceholder` for screenshots.
- **FooterV2**: matches the handoff's footer exactly (location line + social
  icon row).

### Project data

Adapted from `pages/sections/Projects/content/{en,pt}.ts`:

| Card | Source project | Tags shown | Links |
|---|---|---|---|
| 1 | Boarding-Pass | Nest.js, Prisma | Code only (no distinct live URL in source data) |
| 2 | TextMe | Nest.js, Prisma | Code only |
| 3 | Gifflar | TypeScript, Node.js | Code only |

Each gets a new, shorter one-line EN + PT-BR description (not the multi-line
existing copy) written to match the design's "one line on what it does and
why it exists" tone. GitHub links reuse the existing `githubLink` values. The
`liveUrl` field stays optional in the data shape so future projects can add a
"Live" link without a template change.

## Assets

`ImagePlaceholder` is a shared component (styled div, dashed/subtle border,
centered placeholder icon/text, `background: var(--color-neutral-900)`)
rendered wherever the handoff has an `<image-slot>`: the portrait (400×480,
`border-radius: 16px`) and the 3 project screenshots (full width, 180px,
`border-radius` per card). It's wrapped in the `mix-blend-mode: lighten`
container exactly as the handoff specifies, so swapping in real images later
(via a plain `src` prop) reproduces the intended blend look without further
changes — the placeholder itself just doesn't have real image data to blend
against yet.

## Language

- Reuses `LanguageContext`/`useLanguage()` unchanged.
- Every new section's `content/en.ts` and `content/pt.ts` follows the existing
  content-object convention (see `pages/sections/About/content`). EN copy is
  taken verbatim from the handoff. PT-BR copy is newly authored to match the
  tone of the site's existing `pt.ts` files (direct, first-person, informal
  "você"-free register consistent with current About/Projects PT copy).
- Any inline emphasis (e.g. "APIs" in accent color, "AI" in green) uses the
  existing `formatContent` + `<highlight>` convention already used by About/
  Projects, not raw JSX color spans, so PT-BR strings can carry the same
  markup.

## Interactions & behavior

- **Scroll reveal**: a `useReveal` hook (in `components/RevealOnScroll`)
  wraps the one-shot `IntersectionObserver` behavior from the handoff
  (`rootMargin: 0px 0px -8% 0px`, `threshold: .05`, unobserve after firing).
  Applied to the hero, and to the About/Experience/Technologies/Projects/
  Contact-close sections. Disabled under `prefers-reduced-motion: reduce`.
- **Experience rows**: native `<details>`/`<summary>`, no JS state.
- **Nav/anchors**: `HashLink` with `smooth: true`, matching the existing
  Navbar/Footer pattern (no need for global `scroll-behavior: smooth`).
- **Language switch**: same `navigate({ pathname: "/pt" | "/en" })` pattern as
  the existing `Navbar`.
- **Focus states**: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px }`
  applied globally within the `HomePageV2` subtree.

## Responsive behavior

Per the handoff: content column max-width 1080px; header section-links hidden
below 1020px; two-column grids (hero, About, Technologies, contact close)
stack to one column below ~880px with the portrait above the text; projects
grid drops 3→2→1 columns. Timeline, tags, and cards need no responsive
changes.

## Open follow-ups (flagged for user review)

1. "See all projects →" points at the GitHub repositories tab until a
   dedicated projects page exists.
2. Portrait and project screenshots are placeholders; real images to be
   supplied and swapped in later.
3. Project card picks (Boarding-Pass / TextMe / Gifflar) and their shortened
   descriptions are new copy, not copied verbatim from the existing Projects
   section — worth a read-through once written.
