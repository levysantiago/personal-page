# Nocturne Homepage V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the new "Nocturne" homepage design (from `design_handoff_portfolio/`) as a fully new, parallel React page in this codebase, wire it up as the `/` route, and leave the existing homepage and all its sections untouched and unrouted.

**Architecture:** New `HomePageV2` page composed of small section components under `src/pages/sections-v2/*`, each following the existing per-section convention (`index.tsx` + `styles.tsx` + `content/{en,pt}.ts`, `useLanguage()` for i18n). New `NavbarV2`/`FooterV2` components and an isolated `NocturneTheme` styled-components `ThemeProvider` (separate token set from the existing `Theme`) live under `src/components/`. `routes/index.tsx` is repointed from `HomePage` to `HomePageV2`.

**Tech Stack:** React 18 + TypeScript (strict), `styled-components` v5, `react-router-dom` v6 (`HashRouter`), `react-router-hash-link` for smooth in-page anchors, `@phosphor-icons/react` (new dependency) for icons, CRA (`react-scripts`) tooling.

## Global Constraints

- Full design reference: `design_handoff_portfolio/README.md` and
  `design_handoff_portfolio/design/Levy Santiago v2.dc.html` — colors, spacing,
  and copy in this plan are taken from those files. Where this plan's code and
  the handoff appear to disagree, the handoff wins for visual detail; this plan
  wins for how it's structured in React.
- No existing section, component, or the old `HomePage` may be modified or
  deleted. The only existing file this plan modifies is `src/routes/index.tsx`
  (swap which page component two `<Route>`s render) and `public/index.html`
  (add a font `<link>`).
- Package manager is Yarn (`yarn.lock` present, no `package-lock.json`). Use
  `yarn add`/`yarn <script>`, never `npm`.
- New dependency: `@phosphor-icons/react` (icons: `GithubLogo`, `LinkedinLogo`,
  `EnvelopeSimple`, `PlugsConnected`, `Brain`, `Database`, `Code`, `Sparkle`,
  `Cloud`, `ArrowSquareOut`, `Image`, all `regular` weight — the package
  default).
- All new files live under `src/pages/HomePageV2/`, `src/pages/sections-v2/`,
  or new `src/components/{NavbarV2,FooterV2,NocturneTheme,ImagePlaceholder,RevealOnScroll}/`.
  TypeScript path imports use the existing `baseUrl: "./src"` convention (e.g.
  `import NocturneTheme from "components/NocturneTheme"`), matching how every
  existing file already imports (see `pages/sections/About/index.tsx`).
- Styled-components prop-driven styles use the codebase's existing callback
  convention — `styled.div((props: IProps) => css\`...\`)` with a local
  `interface IProps { theme: ITheme; ... }` per file — not TS generics on
  `styled.x<T>()`. This matches `components/Navbar/styles.tsx` and
  `pages/sections/About/styles.tsx`.
- **No test suite exists in this repo** (no `@testing-library/*` dependency, no
  `*.test.*` files anywhere in `src/`). This plan does not introduce one — that
  would be new test infrastructure beyond what was scoped in the design spec.
  Instead, every task's "verify" step is: (a) `yarn tsc --noEmit` type-checks
  clean, and (b) a manual visual check against the handoff via the dev server
  (`yarn start`, open `http://localhost:3000/#/`). Task 4 wires the new page
  into the live route early specifically so every later task is visually
  checkable by refreshing the browser. Task 14 is a full manual QA pass
  covering both languages, all breakpoints, and all interactive states.
- Language content objects follow the existing shape: `export const content = { en, pt };`
  each a plain object of strings (plus, where the design needs multi-color
  inline spans or explicit line breaks, several small string fields composed
  into JSX in `index.tsx` — see Task 6 for the pattern), consumed via
  `const { lang } = useLanguage(); const c = content[lang];`.
- Social links (GitHub, LinkedIn, email) are used in Hero, ContactClose, and
  FooterV2. They're defined once in `src/pages/sections-v2/socialLinks.ts`
  (Task 3) and imported everywhere else, rather than repeated as string
  literals.

---

## Task 1: Dependencies and font loading

**Files:**
- Modify: `package.json` (via `yarn add`, not hand-edited)
- Modify: `public/index.html`

**Interfaces:**
- Produces: `@phosphor-icons/react` importable from any new component; Inter
  font family available globally as `"Inter"`.

- [ ] **Step 1: Install the icon package**

```bash
yarn add @phosphor-icons/react
```

- [ ] **Step 2: Add the Inter font link to `public/index.html`**

In `public/index.html`, add these two lines right after the existing
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" ... />`
tag (around line 26):

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 3: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors (this task adds no TypeScript).

Run: `yarn start`, open `http://localhost:3000/#/`, open devtools Network tab,
confirm `Inter` font files load with no 404s. Stop the dev server or leave it
running in the background for later tasks.

- [ ] **Step 4: Commit**

```bash
git add package.json public/index.html
git commit -m "chore: add phosphor icons and Inter font for Nocturne homepage v2"
```

---

## Task 2: NocturneTheme provider

**Files:**
- Create: `src/components/NocturneTheme/index.tsx`

**Interfaces:**
- Produces: default export `NocturneTheme: React.FC<{ children: React.ReactElement }>`
  (a `ThemeProvider`); named export `nocturneTheme` (the token object); named
  export type `INocturneTheme`.
- Consumed by: every `sections-v2/*/styles.tsx` and `NavbarV2`/`FooterV2`
  styles file via `interface IProps { theme: INocturneTheme }`.

- [ ] **Step 1: Create the theme file**

```tsx
import * as React from "react";
import { ThemeProvider } from "styled-components";

export const nocturneTheme = {
  colors: {
    bg: "#12131f",
    surface: "#232532",
    text: "#e9e9ed",
    accent: "#9184d9",
    green: "#5ce1a6",
    greenGlow: "#123a2c",
    accentRamp: {
      100: "#f5f4ff",
      200: "#e7e5fe",
      300: "#d2cefd",
      400: "#b5abfc",
      500: "#968ae0",
      600: "#796cbf",
      700: "#5d5294",
      800: "#423a6a",
      900: "#2b2741",
    },
    neutralRamp: {
      100: "#f3f5fe",
      200: "#e4e7f5",
      300: "#cfd3e5",
      400: "#b2b6ca",
      500: "#9397ab",
      600: "#75798c",
      700: "#595d6c",
      800: "#3f424d",
      900: "#292b31",
    },
  },
  fonts: {
    heading: `"Inter", system-ui, sans-serif`,
    body: `"Inter", system-ui, sans-serif`,
  },
};

export type INocturneTheme = typeof nocturneTheme;

const NocturneTheme: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => <ThemeProvider theme={nocturneTheme}>{children}</ThemeProvider>;

export default NocturneTheme;
```

- [ ] **Step 2: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/NocturneTheme
git commit -m "feat: add isolated NocturneTheme provider for homepage v2"
```

---

## Task 3: Shared building blocks — ImagePlaceholder, RevealOnScroll, socialLinks

**Files:**
- Create: `src/components/ImagePlaceholder/index.tsx`
- Create: `src/components/ImagePlaceholder/styles.tsx`
- Create: `src/components/RevealOnScroll/index.tsx`
- Create: `src/components/RevealOnScroll/styles.tsx`
- Create: `src/pages/sections-v2/socialLinks.ts`

**Interfaces:**
- Produces: default export `ImagePlaceholder: React.FC<IImagePlaceholderProps>`
  where `IImagePlaceholderProps = { width: string; height: string; radius: string; label: string; src?: string; alt?: string }`.
- Produces: named export `useReveal<T extends HTMLElement>(): { ref: React.RefObject<T>; isVisible: boolean }`
  from `components/RevealOnScroll`.
- Produces: named export `revealStyles(props: { $visible: boolean }): ReturnType<typeof css>`
  from `components/RevealOnScroll/styles` — a css fragment other sections'
  styled-components interpolate into their own templates.
- Produces: named exports `GITHUB_URL`, `LINKEDIN_URL`, `EMAIL` (all `string`)
  from `pages/sections-v2/socialLinks`.

- [ ] **Step 1: Create `socialLinks.ts`**

```ts
export const GITHUB_URL = "https://github.com/levysantiago";
export const LINKEDIN_URL = "https://www.linkedin.com/in/levysantiago";
export const EMAIL = "levyssantiago@gmail.com";
```

- [ ] **Step 2: Create `ImagePlaceholder/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IWrapperProps {
  theme: INocturneTheme;
  $width: string;
  $height: string;
  $radius: string;
}

export const Wrapper = styled.div(
  (props: IWrapperProps) => css`
    position: relative;
    width: ${props.$width};
    height: ${props.$height};
    border-radius: ${props.$radius};
    overflow: hidden;
    mix-blend-mode: lighten;
    background: ${props.theme.colors.neutralRamp[900]};
  `
);

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

interface IPlaceholderProps {
  theme: INocturneTheme;
}

export const Placeholder = styled.div(
  (props: IPlaceholderProps) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${props.theme.colors.neutralRamp[500]};
    font-size: 13px;
    text-align: center;
    padding: 12px;
  `
);
```

- [ ] **Step 3: Create `ImagePlaceholder/index.tsx`**

```tsx
import * as React from "react";
import { Image } from "@phosphor-icons/react";
import { Img, Placeholder, Wrapper } from "./styles";

export interface IImagePlaceholderProps {
  width: string;
  height: string;
  radius: string;
  label: string;
  src?: string;
  alt?: string;
}

const ImagePlaceholder: React.FC<IImagePlaceholderProps> = ({
  width,
  height,
  radius,
  label,
  src,
  alt,
}) => {
  return (
    <Wrapper $width={width} $height={height} $radius={radius}>
      {src ? (
        <Img src={src} alt={alt ?? label} />
      ) : (
        <Placeholder>
          <Image size={28} weight="regular" />
          {label}
        </Placeholder>
      )}
    </Wrapper>
  );
};

export default ImagePlaceholder;
```

- [ ] **Step 4: Create `RevealOnScroll/styles.tsx`**

```tsx
import { css } from "styled-components";

interface IRevealProps {
  $visible: boolean;
}

export const revealStyles = (props: IRevealProps) => css`
  opacity: ${props.$visible ? 1 : 0};
  transform: ${props.$visible ? "none" : "translateY(16px)"};
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
```

- [ ] **Step 5: Create `RevealOnScroll/index.tsx`**

```tsx
import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
```

- [ ] **Step 6: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/ImagePlaceholder src/components/RevealOnScroll src/pages/sections-v2/socialLinks.ts
git commit -m "feat: add ImagePlaceholder, useReveal hook and social link constants"
```

---

## Task 4: HomePageV2 skeleton and routing swap

**Files:**
- Create: `src/pages/HomePageV2/index.tsx`
- Create: `src/pages/HomePageV2/styles.tsx`
- Modify: `src/routes/index.tsx`

**Interfaces:**
- Produces: default export `HomePageV2: React.FC` — rendered by the router at
  `/` and `/:lang`. Later tasks import and add section components inside its
  `<Content>` wrapper.
- Produces (styles): `Page`, `Mesh`, `Content` styled components — `Page`
  carries the radial-gradient background + base color, `Mesh` the drifting
  dot overlay, `Content` a plain `position: relative` wrapper for everything
  else (nav, sections, footer).

- [ ] **Step 1: Create `HomePageV2/styles.tsx`**

```tsx
import styled, { css, keyframes } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Page = styled.div(
  (props: IProps) => css`
    position: relative;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.65;
    font-family: ${props.theme.fonts.body};
    color: ${props.theme.colors.text};
    background: radial-gradient(
        900px 620px at 84% -80px,
        color-mix(in srgb, ${props.theme.colors.accentRamp[900]} 92%, transparent),
        transparent 62%
      ),
      radial-gradient(
        700px 520px at 6% 42%,
        color-mix(in srgb, ${props.theme.colors.greenGlow} 55%, transparent),
        transparent 60%
      ),
      ${props.theme.colors.bg};
  `
);

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-18px, 14px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

export const Mesh = styled.div`
  position: absolute;
  inset: -60px;
  opacity: 0.22;
  pointer-events: none;
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(145, 132, 217, 0.5) 1px,
    transparent 0
  );
  background-size: 46px 46px;
  mask-image: radial-gradient(900px 620px at 78% 60px, black, transparent 72%);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${drift} 26s ease-in-out infinite;
  }
`;

export const Content = styled.div`
  position: relative;
`;
```

- [ ] **Step 2: Create `HomePageV2/index.tsx`**

```tsx
import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content />
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
```

- [ ] **Step 3: Swap the route in `src/routes/index.tsx`**

Replace the whole file:

```tsx
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePageV2 from "../pages/HomePageV2";
import { LanguageContextProvider } from "components/contexts/LanguageContext";
import { routesDict } from "./content/routes-dict";

const MyRoutes = (
  <HashRouter>
    <LanguageContextProvider>
      <Routes>
        <Route path={routesDict.home.this} element={<HomePageV2 />} />
        <Route path={`${routesDict.home.this}/:lang`} element={<HomePageV2 />} />
      </Routes>
    </LanguageContextProvider>
  </HashRouter>
);

export default MyRoutes;
```

This removes the `HomePage` import from this file only; `src/pages/HomePage/`
and all of `src/pages/sections/*` are untouched on disk.

- [ ] **Step 4: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, open `http://localhost:3000/#/`.
Expected: a dark page (`#12131f`-ish base) with the soft purple/green radial
glow and a faint drifting dot mesh, no console errors. Nothing else renders
yet — that's expected.

- [ ] **Step 5: Commit**

```bash
git add src/pages/HomePageV2 src/routes/index.tsx
git commit -m "feat: add HomePageV2 skeleton and route / to it"
```

---

## Task 5: NavbarV2

**Files:**
- Create: `src/components/NavbarV2/content/navItems.ts`
- Create: `src/components/NavbarV2/styles.tsx`
- Create: `src/components/NavbarV2/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<NavbarV2 />` inside `<Content>`)

**Interfaces:**
- Consumes: `useLanguage()` from `components/contexts/LanguageContext`
  (`{ lang: "en" | "pt" }`), `INocturneTheme` from `components/NocturneTheme`.
- Produces: default export `NavbarV2: React.FC` (no props).

- [ ] **Step 1: Create `NavbarV2/content/navItems.ts`**

```ts
const en = [
  { title: "About", route: "#about" },
  { title: "Experience", route: "#experience" },
  { title: "Technologies", route: "#tech" },
  { title: "Projects", route: "#projects" },
];

const pt = [
  { title: "Sobre", route: "#about" },
  { title: "Experiência", route: "#experience" },
  { title: "Tecnologias", route: "#tech" },
  { title: "Projetos", route: "#projects" },
];

export const navItemsV2 = { en, pt };
```

- [ ] **Step 2: Create `NavbarV2/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Container = styled.nav(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 26px;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(16px);
    background: color-mix(in srgb, ${props.theme.colors.bg} 74%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    padding: 12px max(24px, calc((100% - 1080px) / 2));
  `
);

export const Brand = styled(HashLink).attrs({ smooth: true, to: "#top" })(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 18px;
    margin-right: auto;
    text-decoration: none;
    color: ${props.theme.colors.text};
  `
);

export const BrandDot = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const NavLink = styled(HashLink).attrs({ smooth: true })(
  (props: IProps) => css`
    color: ${props.theme.colors.text};
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;

    &:hover {
      color: ${props.theme.colors.green};
    }

    @media (max-width: 1020px) {
      display: none;
    }
  `
);

export const LangWrap = styled.span(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    padding-left: 14px;
    margin-left: 4px;
    border-left: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    white-space: nowrap;
    flex: none;
  `
);

export const LangActive = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
    white-space: nowrap;
  `
);

export const LangDivider = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.neutralRamp[700]};
  `
);

export const LangInactive = styled.a(
  (props: IProps) => css`
    color: ${props.theme.colors.neutralRamp[500]};
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: ${props.theme.colors.green};
    }
  `
);
```

- [ ] **Step 3: Create `NavbarV2/index.tsx`**

```tsx
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "components/contexts/LanguageContext";
import { navItemsV2 } from "./content/navItems";
import {
  Brand,
  BrandDot,
  Container,
  LangActive,
  LangDivider,
  LangInactive,
  LangWrap,
  NavLink,
} from "./styles";

const NavbarV2: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const changeLangPath = () => {
    navigate({ pathname: lang === "en" ? "/pt" : "/en", hash: "#" });
  };

  return (
    <Container>
      <Brand>
        Levy
        <BrandDot>.</BrandDot>
      </Brand>

      {navItemsV2[lang].map((item) => (
        <NavLink key={item.route} to={item.route}>
          {item.title}
        </NavLink>
      ))}

      <LangWrap>
        {lang === "en" ? (
          <>
            <LangActive>EN</LangActive>
            <LangDivider>/</LangDivider>
            <LangInactive onClick={changeLangPath}>PT-BR</LangInactive>
          </>
        ) : (
          <>
            <LangInactive onClick={changeLangPath}>EN</LangInactive>
            <LangDivider>/</LangDivider>
            <LangActive>PT-BR</LangActive>
          </>
        )}
      </LangWrap>
    </Container>
  );
};

export default NavbarV2;
```

- [ ] **Step 4: Render it in `HomePageV2/index.tsx`**

```tsx
import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import NavbarV2 from "components/NavbarV2";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content>
          <NavbarV2 />
        </Content>
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
```

- [ ] **Step 5: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, open `http://localhost:3000/#/`.
Expected: sticky header with "Levy." brand (green dot), About/Experience/
Technologies/Projects links (they don't scroll anywhere useful yet — no
sections exist), EN/PT-BR toggle. Click PT-BR: URL becomes `/#/pt`, nav
labels switch to Portuguese, toggle now shows EN as the clickable one. Resize
below 1020px: the four section links disappear, brand and language toggle
remain.

- [ ] **Step 6: Commit**

```bash
git add src/components/NavbarV2 src/pages/HomePageV2/index.tsx
git commit -m "feat: add NavbarV2 with EN/PT-BR toggle"
```

---

## Task 6: Hero section

**Files:**
- Create: `src/pages/sections-v2/Hero/content/en.ts`
- Create: `src/pages/sections-v2/Hero/content/pt.ts`
- Create: `src/pages/sections-v2/Hero/content/index.ts`
- Create: `src/pages/sections-v2/Hero/styles.tsx`
- Create: `src/pages/sections-v2/Hero/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<Hero />`)

**Interfaces:**
- Consumes: `useReveal` from `components/RevealOnScroll`, `revealStyles` from
  `components/RevealOnScroll/styles`, `ImagePlaceholder` from
  `components/ImagePlaceholder`, `GITHUB_URL`/`LINKEDIN_URL`/`EMAIL` from
  `pages/sections-v2/socialLinks`.
- Produces: default export `Hero: React.FC`. Its root `<section>` carries
  `id="top"` — this is the anchor `NavbarV2`'s brand link and `ContactClose`'s
  email button (via `mailto:`, not anchor) rely on; `NavbarV2`'s `Brand`
  already points `to="#top"`.

This section demonstrates the pattern for copy that needs inline multi-color
spans and explicit line breaks: split the heading into small fields
(`headingLine1`, `headingLine2`, `headingPrefix`, `headingApis`,
`headingJoin`, `headingAi`, `headingSuffix`) and compose them with `<br />`
and colored `<span>`s directly in `index.tsx`, instead of trying to encode
markup inside a translated string.

- [ ] **Step 1: Create `Hero/content/en.ts`**

```ts
export const en = {
  kicker: "HELLO",
  headingLine1: "I'm Levy Santiago,",
  headingLine2: "back-end engineer",
  headingPrefix: "for ",
  headingApis: "APIs",
  headingJoin: " and ",
  headingAi: "AI",
  headingSuffix: ".",
  body: "Node.js and TypeScript, six-plus years in production systems — and, lately, AI agent workflows that do real work. Freelancing from Ilhéus, Brazil.",
  primaryCta: "Get in touch",
  secondaryCta: "View GitHub",
  portraitLabel: "Photo of Levy",
};
```

- [ ] **Step 2: Create `Hero/content/pt.ts`**

```ts
export const pt = {
  kicker: "OLÁ",
  headingLine1: "Eu sou Levy Santiago,",
  headingLine2: "back-end engineer",
  headingPrefix: "para ",
  headingApis: "APIs",
  headingJoin: " e ",
  headingAi: "IA",
  headingSuffix: ".",
  body: "Node.js e TypeScript, mais de seis anos em sistemas de produção — e, mais recentemente, workflows de agentes de IA que fazem trabalho de verdade. Atuando como freelancer a partir de Ilhéus, Brasil.",
  primaryCta: "Entrar em contato",
  secondaryCta: "Ver GitHub",
  portraitLabel: "Foto do Levy",
};
```

- [ ] **Step 3: Create `Hero/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `Hero/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

export const Section = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 24px 96px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const TextCol = styled.div(
  (props: IRevealProps) => css`
    ${revealStyles(props)}

    @media (max-width: 880px) {
      order: 2;
    }
  `
);

export const Kicker = styled.p(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${props.theme.colors.green};
    margin: 0 0 20px;
  `
);

export const KickerRule = styled.span(
  (props: IProps) => css`
    width: 38px;
    height: 1px;
    background: ${props.theme.colors.green};
  `
);

export const Heading = styled.h1(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: clamp(40px, 5vw, 60px);
    line-height: 1.06;
    letter-spacing: -0.025em;
    margin: 0 0 20px;
  `
);

export const Accent = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};
  `
);

export const Green = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const Body = styled.p(
  (props: IProps) => css`
    font-size: 17.5px;
    max-width: 46ch;
    margin: 0 0 30px;
    color: color-mix(in srgb, ${props.theme.colors.text} 80%, transparent);
  `
);

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ButtonBase = styled.a(
  (props: IProps) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
  `
);

export const PrimaryButton = styled(ButtonBase)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
    border-color: ${props.theme.colors.green};

    &:hover {
      background: color-mix(in srgb, ${props.theme.colors.green} 12%, transparent);
    }
  `
);

export const GhostButton = styled(ButtonBase)(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};

    &:hover {
      background: color-mix(in srgb, ${props.theme.colors.accent} 10%, transparent);
    }
  `
);

export const SocialRow = styled.div(
  (props: IProps) => css`
    display: flex;
    gap: 20px;
    margin-top: 34px;
    font-size: 20px;
    color: ${props.theme.colors.neutralRamp[500]};
  `
);

export const SocialLink = styled.a`
  color: inherit;
  display: flex;
`;

export const PortraitCol = styled.div(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    position: relative;
    justify-self: end;

    @media (max-width: 880px) {
      justify-self: center;
      order: 1;
    }
  `
);

export const PortraitOutline = styled.div(
  (props: IProps) => css`
    position: absolute;
    inset: -14px -14px 24px 24px;
    border: 1px solid color-mix(in srgb, ${props.theme.colors.green} 40%, transparent);
    border-radius: 16px;
  `
);
```

- [ ] **Step 5: Create `Hero/index.tsx`**

```tsx
import * as React from "react";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import ImagePlaceholder from "components/ImagePlaceholder";
import { useReveal } from "components/RevealOnScroll";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "../socialLinks";
import { content } from "./content";
import {
  Accent,
  Actions,
  Body,
  GhostButton,
  Green,
  Heading,
  Kicker,
  KickerRule,
  PortraitCol,
  PortraitOutline,
  PrimaryButton,
  Section,
  SocialLink,
  SocialRow,
  TextCol,
} from "./styles";

const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const textReveal = useReveal<HTMLDivElement>();
  const portraitReveal = useReveal<HTMLDivElement>();

  return (
    <Section id="top">
      <TextCol ref={textReveal.ref} $visible={textReveal.isVisible}>
        <Kicker>
          <KickerRule />
          {c.kicker}
        </Kicker>
        <Heading>
          {c.headingLine1}
          <br />
          {c.headingLine2}
          <br />
          {c.headingPrefix}
          <Accent>{c.headingApis}</Accent>
          {c.headingJoin}
          <Green>{c.headingAi}</Green>
          {c.headingSuffix}
        </Heading>
        <Body>{c.body}</Body>
        <Actions>
          <PrimaryButton href={`mailto:${EMAIL}`}>{c.primaryCta}</PrimaryButton>
          <GhostButton href={GITHUB_URL} target="_blank" rel="noopener">
            {c.secondaryCta}
          </GhostButton>
        </Actions>
        <SocialRow>
          <SocialLink href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub">
            <GithubLogo size={20} />
          </SocialLink>
          <SocialLink href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedinLogo size={20} />
          </SocialLink>
          <SocialLink href={`mailto:${EMAIL}`} aria-label="Email">
            <EnvelopeSimple size={20} />
          </SocialLink>
        </SocialRow>
      </TextCol>

      <PortraitCol ref={portraitReveal.ref} $visible={portraitReveal.isVisible}>
        <PortraitOutline />
        <ImagePlaceholder width="400px" height="480px" radius="16px" label={c.portraitLabel} />
      </PortraitCol>
    </Section>
  );
};

export default Hero;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

```tsx
import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import NavbarV2 from "components/NavbarV2";
import Hero from "pages/sections-v2/Hero";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content>
          <NavbarV2 />
          <Hero />
        </Content>
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
```

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, open `http://localhost:3000/#/`.
Expected: hero renders with "HELLO" kicker, three-line heading ("APIs" in
purple, "AI" in green), body copy, two outlined buttons, three social icons,
and a placeholder portrait box on the right with an accent outline behind it.
Scroll down and back up — text and portrait fade/slide in once, on first
scroll into view. Switch to `/#/pt`: heading/body/buttons switch to
Portuguese. Resize below 880px: portrait moves above the text, single column.

- [ ] **Step 8: Commit**

```bash
git add src/pages/sections-v2/Hero src/pages/HomePageV2/index.tsx
git commit -m "feat: add Hero section to homepage v2"
```

---

## Task 7: StatStrip section

**Files:**
- Create: `src/pages/sections-v2/StatStrip/content/en.ts`
- Create: `src/pages/sections-v2/StatStrip/content/pt.ts`
- Create: `src/pages/sections-v2/StatStrip/content/index.ts`
- Create: `src/pages/sections-v2/StatStrip/styles.tsx`
- Create: `src/pages/sections-v2/StatStrip/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<StatStrip />`)

**Interfaces:**
- Produces: default export `StatStrip: React.FC`.

- [ ] **Step 1: Create `StatStrip/content/en.ts`**

```ts
export const en = {
  stats: [
    { value: "6+", labelLine1: "years building", labelLine2: "back-end systems" },
    { value: "MSc", labelLine1: "Computer Science", labelLine2: "UFBA" },
    { value: "4", labelLine1: "companies", labelLine2: "shipped for" },
  ],
};
```

- [ ] **Step 2: Create `StatStrip/content/pt.ts`**

```ts
export const pt = {
  stats: [
    { value: "6+", labelLine1: "anos construindo", labelLine2: "sistemas back-end" },
    { value: "MSc", labelLine1: "Ciência da Computação", labelLine2: "UFBA" },
    { value: "4", labelLine1: "empresas", labelLine2: "atendidas" },
  ],
};
```

- [ ] **Step 3: Create `StatStrip/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `StatStrip/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Section = styled.section(
  (props: IProps) => css`
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    background: color-mix(in srgb, ${props.theme.colors.neutralRamp[900]} 60%, transparent);
  `
);

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 36px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

export const Value = styled.span(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 38px;
    line-height: 1;
    color: ${props.theme.colors.green};
    font-feature-settings: "tnum" 1;
  `
);

export const Label = styled.span(
  (props: IProps) => css`
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[400]};
  `
);
```

- [ ] **Step 5: Create `StatStrip/index.tsx`**

```tsx
import * as React from "react";
import { useLanguage } from "components/contexts/LanguageContext";
import { content } from "./content";
import { Inner, Label, Section, Stat, Value } from "./styles";

const StatStrip: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <Section>
      <Inner>
        {c.stats.map((stat) => (
          <Stat key={stat.value + stat.labelLine1}>
            <Value>{stat.value}</Value>
            <Label>
              {stat.labelLine1}
              <br />
              {stat.labelLine2}
            </Label>
          </Stat>
        ))}
      </Inner>
    </Section>
  );
};

export default StatStrip;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

Add the import `import StatStrip from "pages/sections-v2/StatStrip";` and
render `<StatStrip />` right after `<Hero />`.

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm a full-width banded strip below the hero with
three baseline-aligned stat pairs (`6+`, `MSc`, `4` in green, two-line grey
labels), 1px dividers top and bottom. Below 640px, stats stack to one column.
PT-BR shows the translated labels.

- [ ] **Step 8: Commit**

```bash
git add src/pages/sections-v2/StatStrip src/pages/HomePageV2/index.tsx
git commit -m "feat: add StatStrip section to homepage v2"
```

---

## Task 8: AboutV2 section

**Files:**
- Create: `src/pages/sections-v2/AboutV2/content/en.ts`
- Create: `src/pages/sections-v2/AboutV2/content/pt.ts`
- Create: `src/pages/sections-v2/AboutV2/content/index.ts`
- Create: `src/pages/sections-v2/AboutV2/styles.tsx`
- Create: `src/pages/sections-v2/AboutV2/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<AboutV2 />`)

**Interfaces:**
- Consumes: `useReveal`/`revealStyles`, `EMAIL` from `../socialLinks`.
- Produces: default export `AboutV2: React.FC`. Root `<section id="about">`
  matches `NavbarV2`'s `#about` anchor.

- [ ] **Step 1: Create `AboutV2/content/en.ts`**

This section's heading needs one highlighted word and nothing else (no line
break), so — unlike Hero — it uses the existing `formatContent` +
`<highlight>` convention from `util/content-formatter` (the same one
`pages/sections/About/index.tsx` already uses), keeping the markup inside the
translated string instead of splitting it into separate fields.

```ts
export const en = {
  heading: "About <highlight>me</highlight>",
  lead: "Hello 👋 — I'm a back-end Node.js engineer with experience designing robust APIs and AI solutions.",
  paragraph1: "BSc in Computer Science from Santa Cruz State University (UESC) and MSc in Computer Science from the Federal University of Bahia (UFBA).",
  paragraph2: "I also enjoy sharing what I learn with the developer community — writing and recording about programming and technology.",
  facts: {
    locationLabel: "Location",
    location: "Ilhéus, Bahia, Brazil",
    languagesLabel: "Languages",
    languages: "Portuguese, English",
    statusLabel: "Status",
    status: "Available for freelance",
    emailLabel: "Email",
  },
  cards: [
    {
      icon: "plugsConnected" as const,
      accent: "accent" as const,
      title: "APIs & services",
      description: "REST APIs, DDD, testing and CI with Nest.js, Fastify and Express.",
    },
    {
      icon: "brain" as const,
      accent: "green" as const,
      title: "AI systems",
      description: "Multi-agent workflows, RAG, MCP and evaluation frameworks in production.",
    },
    {
      icon: "database" as const,
      accent: "accent" as const,
      title: "Data & infra",
      description: "PostgreSQL, Redis, Docker and cloud deployments behind NGINX.",
    },
  ],
};
```

- [ ] **Step 2: Create `AboutV2/content/pt.ts`**

```ts
export const pt = {
  heading: "Sobre <highlight>mim</highlight>",
  lead: "Olá 👋 — sou engenheiro back-end Node.js com experiência projetando APIs robustas e soluções de IA.",
  paragraph1: "Bacharelado em Ciência da Computação pela Universidade Estadual de Santa Cruz (UESC) e mestrado em Ciência da Computação pela Universidade Federal da Bahia (UFBA).",
  paragraph2: "Também gosto de compartilhar o que aprendo com a comunidade dev — escrevendo e gravando conteúdo sobre programação e tecnologia.",
  facts: {
    locationLabel: "Localização",
    location: "Ilhéus, Bahia, Brasil",
    languagesLabel: "Idiomas",
    languages: "Português, Inglês",
    statusLabel: "Status",
    status: "Disponível para freelance",
    emailLabel: "Email",
  },
  cards: [
    {
      icon: "plugsConnected" as const,
      accent: "accent" as const,
      title: "APIs & serviços",
      description: "REST APIs, DDD, testes e CI com Nest.js, Fastify e Express.",
    },
    {
      icon: "brain" as const,
      accent: "green" as const,
      title: "Sistemas de IA",
      description: "Workflows multi-agente, RAG, MCP e frameworks de avaliação em produção.",
    },
    {
      icon: "database" as const,
      accent: "accent" as const,
      title: "Dados & infra",
      description: "PostgreSQL, Redis, Docker e deploys em cloud atrás de NGINX.",
    },
  ],
};
```

- [ ] **Step 3: Create `AboutV2/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `AboutV2/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const Section = styled.section(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    max-width: 1080px;
    margin: 0 auto;
    padding: 96px 24px 84px;
  `
);

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0 0 40px;
  `
);

export const HeadingAccent = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};
  `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: start;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const Lead = styled.p(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 21px;
    line-height: 1.5;
    margin: 0 0 18px;
  `
);

export const Paragraph = styled.p(
  (props: IProps & { $opacity: number }) => css`
    margin: 0 0 14px;
    color: color-mix(in srgb, ${props.theme.colors.text} ${props.$opacity}%, transparent);
    max-width: 56ch;
  `
);

export const Facts = styled.dl(
  (props: IProps) => css`
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px 24px;
    font-size: 15px;
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    padding-top: 22px;
  `
);

export const FactTerm = styled.dt(
  (props: IProps) => css`
    color: ${props.theme.colors.neutralRamp[500]};
    margin: 0;
  `
);

export const FactValue = styled.dd`
  margin: 0;
`;

export const StatusValue = styled(FactValue)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const EmailLink = styled.a(
  (props: IProps) => css`
    color: ${props.theme.colors.text};

    &:hover {
      color: ${props.theme.colors.green};
    }
  `
);

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Card = styled.div(
  (props: IProps & { $accent: "accent" | "green" }) => css`
    background: color-mix(in srgb, ${props.theme.colors.surface} 72%, transparent);
    border: 1px solid ${props.theme.colors.neutralRamp[800]};
    border-radius: 12px;
    padding: 22px 24px;
    border-bottom: 2px solid
      ${props.$accent === "green" ? props.theme.colors.green : props.theme.colors.accent};
  `
);

export const CardIcon = styled.div(
  (props: IProps & { $accent: "accent" | "green" }) => css`
    color: ${props.$accent === "green" ? props.theme.colors.green : props.theme.colors.accent};
    margin-bottom: 12px;
  `
);

export const CardTitle = styled.h3(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 6px;
  `
);

export const CardBody = styled.p(
  (props: IProps) => css`
    margin: 0;
    font-size: 14.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 74%, transparent);
  `
);
```

- [ ] **Step 5: Create `AboutV2/index.tsx`**

```tsx
import * as React from "react";
import { Brain, Database, PlugsConnected } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { formatContent } from "util/content-formatter";
import { EMAIL } from "../socialLinks";
import { content } from "./content";
import {
  Card,
  CardBody,
  CardIcon,
  Cards,
  CardTitle,
  EmailLink,
  FactTerm,
  Facts,
  FactValue,
  Grid,
  Heading,
  HeadingAccent,
  Lead,
  Paragraph,
  Section,
  StatusValue,
} from "./styles";

const icons: Record<string, React.ElementType> = {
  plugsConnected: PlugsConnected,
  brain: Brain,
  database: Database,
};

const AboutV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="about" ref={reveal.ref} $visible={reveal.isVisible}>
      <Heading>
        {formatContent({
          message: c.heading,
          components: { HighlightComponent: HeadingAccent },
        })}
      </Heading>
      <Grid>
        <div>
          <Lead>{c.lead}</Lead>
          <Paragraph $opacity={80}>{c.paragraph1}</Paragraph>
          <Paragraph $opacity={72}>{c.paragraph2}</Paragraph>
          <Facts>
            <FactTerm>{c.facts.locationLabel}</FactTerm>
            <FactValue>{c.facts.location}</FactValue>
            <FactTerm>{c.facts.languagesLabel}</FactTerm>
            <FactValue>{c.facts.languages}</FactValue>
            <FactTerm>{c.facts.statusLabel}</FactTerm>
            <StatusValue>{c.facts.status}</StatusValue>
            <FactTerm>{c.facts.emailLabel}</FactTerm>
            <FactValue>
              <EmailLink href={`mailto:${EMAIL}`}>{EMAIL}</EmailLink>
            </FactValue>
          </Facts>
        </div>
        <Cards>
          {c.cards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <Card key={card.title} $accent={card.accent}>
                <CardIcon $accent={card.accent}>
                  <Icon size={24} />
                </CardIcon>
                <CardTitle>{card.title}</CardTitle>
                <CardBody>{card.description}</CardBody>
              </Card>
            );
          })}
        </Cards>
      </Grid>
    </Section>
  );
};

export default AboutV2;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

Add `import AboutV2 from "pages/sections-v2/AboutV2";` and render
`<AboutV2 />` after `<StatStrip />`.

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm "About me" heading ("me" purple), lead line, two
paragraphs, a facts list (Location/Languages/Status in green/Email as a
mailto link), and three stacked cards with icon/title/description and a
colored bottom border (purple, green, purple). Section fades in on scroll.
Below 880px, cards stack under the text column. PT-BR shows translated
copy and "Sobre mim".

- [ ] **Step 8: Commit**

```bash
git add src/pages/sections-v2/AboutV2 src/pages/HomePageV2/index.tsx
git commit -m "feat: add AboutV2 section to homepage v2"
```

---

## Task 9: ExperienceV2 section

**Files:**
- Create: `src/pages/sections-v2/ExperienceV2/content/en.ts`
- Create: `src/pages/sections-v2/ExperienceV2/content/pt.ts`
- Create: `src/pages/sections-v2/ExperienceV2/content/index.ts`
- Create: `src/pages/sections-v2/ExperienceV2/styles.tsx`
- Create: `src/pages/sections-v2/ExperienceV2/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<ExperienceV2 />`)

**Interfaces:**
- Produces: default export `ExperienceV2: React.FC`. Root `<section id="experience">`.

- [ ] **Step 1: Create `ExperienceV2/content/en.ts`**

```ts
export const en = {
  heading: "Experience",
  hint: "Open a role for the detail",
  roles: [
    {
      title: "Back-end Developer",
      company: "Rocketseat",
      dateRange: "2025 — 2026",
      current: true,
      bullets: [
        "Built features, internal services and AI-integrated solutions end to end — Node.js, TypeScript, PostgreSQL, Redis, QStash and Docker.",
        "Designed a multi-agent service that reviews practical coding projects: it analyses code, validates requirements, gives feedback and assigns scores, plus a framework to evaluate the agents themselves.",
        "Restructured a legacy test suite and set the standards for its evolution; built internal dashboards for operational metrics.",
      ],
    },
    {
      title: "Back-end Developer",
      company: "BWS",
      dateRange: "2023 — 2024",
      current: false,
      bullets: [
        "Built and maintained Nest.js APIs integrated with several external networks, applying Domain-Driven Design to the infrastructure and abstractions.",
        "Raised test coverage with Jest and set up test CI on GitHub.",
      ],
    },
    {
      title: "Full-Stack Engineer",
      company: "Freelance",
      dateRange: "2022 — 2023",
      current: false,
      bullets: [
        "Delivered whole products from ideation to deployment — Nest.js and Fastify back ends, React front ends, SQL and NoSQL databases with Prisma and TypeORM.",
        "Provisioned and served applications on GCP and Digital Ocean with NGINX.",
      ],
    },
    {
      title: "Back-end Engineer",
      company: "Softrends",
      dateRange: "2020 — 2022",
      current: false,
      bullets: [
        "First developer on the team; later owned back end and DevOps. REST APIs with Express.js and Adonis.js — auth, SMTP, WebSockets, SQL and NoSQL.",
        "Led a small back-end team through planning, tech choices and delivery.",
      ],
    },
  ],
};
```

- [ ] **Step 2: Create `ExperienceV2/content/pt.ts`**

```ts
export const pt = {
  heading: "Experiência",
  hint: "Abra um cargo para ver o detalhe",
  roles: [
    {
      title: "Back-end Developer",
      company: "Rocketseat",
      dateRange: "2025 — 2026",
      current: true,
      bullets: [
        "Desenvolvi features, serviços internos e soluções integradas a IA de ponta a ponta — Node.js, TypeScript, PostgreSQL, Redis, QStash e Docker.",
        "Projetei um serviço multi-agente que revisa projetos práticos de código: ele analisa o código, valida requisitos, dá feedback e atribui notas, além de um framework para avaliar os próprios agentes.",
        "Reestruturei uma suíte de testes legada e defini os padrões para sua evolução; construí dashboards internos para métricas operacionais.",
      ],
    },
    {
      title: "Back-end Developer",
      company: "BWS",
      dateRange: "2023 — 2024",
      current: false,
      bullets: [
        "Desenvolvi e mantive APIs em Nest.js integradas a diversas redes externas, aplicando Domain-Driven Design na infraestrutura e nas abstrações.",
        "Aumentei a cobertura de testes com Jest e configurei CI de testes no GitHub.",
      ],
    },
    {
      title: "Full-Stack Engineer",
      company: "Freelance",
      dateRange: "2022 — 2023",
      current: false,
      bullets: [
        "Entreguei produtos completos da ideação ao deploy — back ends em Nest.js e Fastify, front ends em React, bancos SQL e NoSQL com Prisma e TypeORM.",
        "Provisionei e servi aplicações na GCP e Digital Ocean com NGINX.",
      ],
    },
    {
      title: "Back-end Engineer",
      company: "Softrends",
      dateRange: "2020 — 2022",
      current: false,
      bullets: [
        "Primeiro desenvolvedor do time; depois assumi o back end e o DevOps. APIs REST com Express.js e Adonis.js — autenticação, SMTP, WebSockets, SQL e NoSQL.",
        "Liderei um time pequeno de back-end no planejamento, nas escolhas técnicas e nas entregas.",
      ],
    },
  ],
};
```

- [ ] **Step 3: Create `ExperienceV2/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `ExperienceV2/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const Section = styled.section(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, ${props.theme.colors.neutralRamp[900]} 72%, transparent),
      color-mix(in srgb, ${props.theme.colors.neutralRamp[900]} 30%, transparent)
    );
  `
);

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 88px 24px 92px;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 36px;
`;

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0;
  `
);

export const Hint = styled.span(
  (props: IProps) => css`
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[500]};
  `
);

export const Timeline = styled.div(
  (props: IProps) => css`
    border-left: 1px solid ${props.theme.colors.neutralRamp[800]};
    padding-left: 34px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `
);

export const Role = styled.details``;

export const Summary = styled.summary(
  (props: IProps & { $isFirst: boolean }) => css`
    list-style: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: baseline;
    padding: 18px 0;
    position: relative;
    ${!props.$isFirst &&
    css`
      border-top: 1px solid
        color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    `}

    &::-webkit-details-marker {
      display: none;
    }

    &::marker {
      content: "";
    }
  `
);

export const Dot = styled.span(
  (props: IProps & { $current: boolean }) => css`
    position: absolute;
    left: -40px;
    top: ${props.$current ? "26px" : "27px"};
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${props.$current ? props.theme.colors.green : props.theme.colors.neutralRamp[700]};
    ${props.$current &&
    css`
      box-shadow: 0 0 0 4px color-mix(in srgb, ${props.theme.colors.green} 18%, transparent);
    `}
  `
);

export const RoleTitle = styled.span(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-size: 21px;
    font-weight: 500;
  `
);

export const RoleCompany = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};
    font-size: 15px;
  `
);

export const RoleDates = styled.span(
  (props: IProps) => css`
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[500]};
    font-feature-settings: "tnum" 1;
  `
);

export const RoleBody = styled.div(
  (props: IProps) => css`
    padding: 0 0 24px;
    max-width: 70ch;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 15.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 78%, transparent);
  `
);
```

- [ ] **Step 5: Create `ExperienceV2/index.tsx`**

```tsx
import * as React from "react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { content } from "./content";
import {
  Dot,
  Header,
  Heading,
  Hint,
  Inner,
  Role,
  RoleBody,
  RoleCompany,
  RoleDates,
  RoleTitle,
  Section,
  Summary,
  Timeline,
} from "./styles";

const ExperienceV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="experience" ref={reveal.ref} $visible={reveal.isVisible}>
      <Inner>
        <Header>
          <Heading>{c.heading}</Heading>
          <Hint>{c.hint}</Hint>
        </Header>
        <Timeline>
          {c.roles.map((role, index) => (
            <Role key={`${role.company}-${role.dateRange}`} open={index === 0}>
              <Summary $isFirst={index === 0}>
                <Dot $current={role.current} />
                <span>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleCompany> · {role.company}</RoleCompany>
                </span>
                <RoleDates>{role.dateRange}</RoleDates>
              </Summary>
              <RoleBody>
                {role.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </RoleBody>
            </Role>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default ExperienceV2;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

Add `import ExperienceV2 from "pages/sections-v2/ExperienceV2";` and render
`<ExperienceV2 />` after `<AboutV2 />`.

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm a banded Experience section with a left-hand
timeline rail, four roles, the first (Rocketseat) open by default with green
dot + glow, the other three collapsed with grey dots and a top divider.
Click each summary row to expand/collapse; multiple can be open at once.
PT-BR shows translated bullets and hint text.

- [ ] **Step 8: Commit**

```bash
git add src/pages/sections-v2/ExperienceV2 src/pages/HomePageV2/index.tsx
git commit -m "feat: add ExperienceV2 section to homepage v2"
```

---

## Task 10: TechnologiesV2 section

**Files:**
- Create: `src/pages/sections-v2/TechnologiesV2/content/en.ts`
- Create: `src/pages/sections-v2/TechnologiesV2/content/pt.ts`
- Create: `src/pages/sections-v2/TechnologiesV2/content/index.ts`
- Create: `src/pages/sections-v2/TechnologiesV2/styles.tsx`
- Create: `src/pages/sections-v2/TechnologiesV2/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<TechnologiesV2 />`)

**Interfaces:**
- Produces: default export `TechnologiesV2: React.FC`. Root `<section id="tech">`.

- [ ] **Step 1: Create `TechnologiesV2/content/en.ts`**

```ts
export const en = {
  heading: "Technologies",
  groups: [
    {
      icon: "code" as const,
      label: "Core",
      tags: [
        { label: "TypeScript", variant: "accent" as const },
        { label: "Node.js", variant: "accent" as const },
        { label: "Nest.js", variant: "outline" as const },
        { label: "Fastify", variant: "outline" as const },
        { label: "Express", variant: "outline" as const },
        { label: "Prisma", variant: "outline" as const },
        { label: "TypeORM", variant: "outline" as const },
      ],
    },
    {
      icon: "sparkle" as const,
      label: "AI",
      tags: [
        { label: "OpenAI", variant: "outline" as const },
        { label: "Vercel AI SDK", variant: "outline" as const },
        { label: "OpenRouter", variant: "outline" as const },
        { label: "RAG", variant: "outline" as const },
        { label: "MCP", variant: "outline" as const },
        { label: "Agent workflows", variant: "outline" as const },
      ],
    },
    {
      icon: "database" as const,
      label: "Data",
      tags: [
        { label: "PostgreSQL", variant: "outline" as const },
        { label: "MySQL", variant: "outline" as const },
        { label: "MongoDB", variant: "outline" as const },
        { label: "Redis", variant: "outline" as const },
        { label: "SQLite", variant: "outline" as const },
      ],
    },
    {
      icon: "cloud" as const,
      label: "Infra",
      tags: [
        { label: "Docker", variant: "outline" as const },
        { label: "Google Cloud", variant: "outline" as const },
        { label: "Digital Ocean", variant: "outline" as const },
        { label: "Amazon S3", variant: "outline" as const },
        { label: "NGINX", variant: "outline" as const },
      ],
    },
  ],
};
```

- [ ] **Step 2: Create `TechnologiesV2/content/pt.ts`**

```ts
export const pt = {
  heading: "Tecnologias",
  groups: [
    {
      icon: "code" as const,
      label: "Core",
      tags: [
        { label: "TypeScript", variant: "accent" as const },
        { label: "Node.js", variant: "accent" as const },
        { label: "Nest.js", variant: "outline" as const },
        { label: "Fastify", variant: "outline" as const },
        { label: "Express", variant: "outline" as const },
        { label: "Prisma", variant: "outline" as const },
        { label: "TypeORM", variant: "outline" as const },
      ],
    },
    {
      icon: "sparkle" as const,
      label: "IA",
      tags: [
        { label: "OpenAI", variant: "outline" as const },
        { label: "Vercel AI SDK", variant: "outline" as const },
        { label: "OpenRouter", variant: "outline" as const },
        { label: "RAG", variant: "outline" as const },
        { label: "MCP", variant: "outline" as const },
        { label: "Agent workflows", variant: "outline" as const },
      ],
    },
    {
      icon: "database" as const,
      label: "Dados",
      tags: [
        { label: "PostgreSQL", variant: "outline" as const },
        { label: "MySQL", variant: "outline" as const },
        { label: "MongoDB", variant: "outline" as const },
        { label: "Redis", variant: "outline" as const },
        { label: "SQLite", variant: "outline" as const },
      ],
    },
    {
      icon: "cloud" as const,
      label: "Infra",
      tags: [
        { label: "Docker", variant: "outline" as const },
        { label: "Google Cloud", variant: "outline" as const },
        { label: "Digital Ocean", variant: "outline" as const },
        { label: "Amazon S3", variant: "outline" as const },
        { label: "NGINX", variant: "outline" as const },
      ],
    },
  ],
};
```

- [ ] **Step 3: Create `TechnologiesV2/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `TechnologiesV2/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const Section = styled.section(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    max-width: 1080px;
    margin: 0 auto;
    padding: 92px 24px 84px;
  `
);

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0 0 36px;
  `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 48px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const GroupLabel = styled.p(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props.theme.colors.green};
    margin: 0 0 14px;
  `
);

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span(
  (props: IProps & { $variant: "accent" | "outline" }) => css`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 3px 10px;
    border-radius: 6px;
    ${props.$variant === "accent"
      ? css`
          background: ${props.theme.colors.accentRamp[800]};
          color: ${props.theme.colors.accentRamp[100]};
        `
      : css`
          border: 1px solid ${props.theme.colors.accent};
          color: ${props.theme.colors.accent};
        `}
  `
);
```

- [ ] **Step 5: Create `TechnologiesV2/index.tsx`**

```tsx
import * as React from "react";
import { Cloud, Code, Database, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { content } from "./content";
import { Grid, GroupLabel, Heading, Section, Tag, TagRow } from "./styles";

const icons: Record<string, React.ElementType> = {
  code: Code,
  sparkle: Sparkle,
  database: Database,
  cloud: Cloud,
};

const TechnologiesV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="tech" ref={reveal.ref} $visible={reveal.isVisible}>
      <Heading>{c.heading}</Heading>
      <Grid>
        {c.groups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div key={group.label}>
              <GroupLabel>
                <Icon size={16} />
                {group.label}
              </GroupLabel>
              <TagRow>
                {group.tags.map((tag) => (
                  <Tag key={tag.label} $variant={tag.variant}>
                    {tag.label}
                  </Tag>
                ))}
              </TagRow>
            </div>
          );
        })}
      </Grid>
    </Section>
  );
};

export default TechnologiesV2;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

Add `import TechnologiesV2 from "pages/sections-v2/TechnologiesV2";` and
render `<TechnologiesV2 />` after `<ExperienceV2 />`.

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm a 2×2 grid of Core/AI/Data/Infra groups, each with
a green uppercase label + icon and wrapping tag rows; TypeScript and Node.js
render as filled/accent tags, everything else outlined. Below 640px, groups
stack to one column. PT-BR shows "IA" and "Dados" group labels.

- [ ] **Step 8: Commit**

```bash
git add src/pages/sections-v2/TechnologiesV2 src/pages/HomePageV2/index.tsx
git commit -m "feat: add TechnologiesV2 section to homepage v2"
```

---

## Task 11: ProjectsV2 section

**Files:**
- Create: `src/pages/sections-v2/ProjectsV2/content/types.ts`
- Create: `src/pages/sections-v2/ProjectsV2/content/en.ts`
- Create: `src/pages/sections-v2/ProjectsV2/content/pt.ts`
- Create: `src/pages/sections-v2/ProjectsV2/content/index.ts`
- Create: `src/pages/sections-v2/ProjectsV2/styles.tsx`
- Create: `src/pages/sections-v2/ProjectsV2/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<ProjectsV2 />`)

**Interfaces:**
- Consumes: `ImagePlaceholder` from `components/ImagePlaceholder`.
- Produces: default export `ProjectsV2: React.FC`. Root `<section id="projects">`.
  Named export `IProjectV2` from `ProjectsV2/content/types` — the project
  card shape (`{ title, description, tags: string[], githubUrl, liveUrl?: string }`).

Project picks and links are taken from the existing
`src/pages/sections/Projects/content/en.ts` (`githubLink` values only — none
of the existing projects have a distinct live URL, so `liveUrl` is omitted
for all three here; it stays optional on the type so a future project with a
live URL just needs to add the field).

- [ ] **Step 1: Create `ProjectsV2/content/types.ts`**

```ts
export interface IProjectV2 {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}
```

- [ ] **Step 2: Create `ProjectsV2/content/en.ts`**

```ts
import { IProjectV2 } from "./types";

const projects: IProjectV2[] = [
  {
    title: "Boarding-Pass",
    description: "Flight booking flow with seat selection and boarding-pass generation, built on a Nest.js API.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/Levysantiago/boarding-pass",
  },
  {
    title: "TextMe",
    description: "Real-time web chat with a Nest.js and Prisma back end over WebSockets.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/levysantiago/text-me",
  },
  {
    title: "Gifflar",
    description: "MSc thesis framework for generating smart contracts on the fly from TypeScript.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/GifflarJS-Framework/core",
  },
];

export const en = {
  heading: "Projects",
  seeAll: "See all projects →",
  codeLabel: "Code",
  liveLabel: "Live",
  imageLabel: "Screenshot",
  projects,
};
```

- [ ] **Step 3: Create `ProjectsV2/content/pt.ts`**

```ts
import { IProjectV2 } from "./types";

const projects: IProjectV2[] = [
  {
    title: "Boarding-Pass",
    description: "Fluxo de compra de passagens com seleção de assentos e geração de boarding-pass, com API em Nest.js.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/Levysantiago/boarding-pass",
  },
  {
    title: "TextMe",
    description: "Chat web em tempo real com back end em Nest.js e Prisma via WebSockets.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/levysantiago/text-me",
  },
  {
    title: "Gifflar",
    description: "Framework do meu mestrado para gerar smart contracts em tempo de execução a partir de TypeScript.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/GifflarJS-Framework/core",
  },
];

export const pt = {
  heading: "Projetos",
  seeAll: "Ver todos os projetos →",
  codeLabel: "Código",
  liveLabel: "Live",
  imageLabel: "Captura de tela",
  projects,
};
```

- [ ] **Step 4: Create `ProjectsV2/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 5: Create `ProjectsV2/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const Section = styled.section(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, ${props.theme.colors.neutralRamp[900]} 72%, transparent),
      color-mix(in srgb, ${props.theme.colors.neutralRamp[900]} 30%, transparent)
    );
  `
);

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 88px 24px 92px;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
`;

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0;
  `
);

export const SeeAllLink = styled.a(
  (props: IProps) => css`
    font-size: 15px;
    color: ${props.theme.colors.green};
  `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article(
  (props: IProps) => css`
    background: color-mix(in srgb, ${props.theme.colors.surface} 78%, transparent);
    border: 1px solid ${props.theme.colors.neutralRamp[800]};
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `
);

export const CardBody = styled.div`
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const CardTitle = styled.h3(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 19px;
    margin: 0;
  `
);

export const CardDescription = styled.p(
  (props: IProps) => css`
    margin: 0;
    flex: 1;
    font-size: 14.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 76%, transparent);
  `
);

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.span(
  (props: IProps) => css`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 3px 10px;
    border-radius: 6px;
    border: 1px solid ${props.theme.colors.accent};
    color: ${props.theme.colors.accent};
  `
);

export const LinkRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  padding-top: 2px;
`;

export const CardLink = styled.a(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${props.theme.colors.text};
  `
);

export const LiveLink = styled(CardLink)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);
```

- [ ] **Step 6: Create `ProjectsV2/index.tsx`**

```tsx
import * as React from "react";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import ImagePlaceholder from "components/ImagePlaceholder";
import { content } from "./content";
import {
  Card,
  CardBody,
  CardDescription,
  CardLink,
  CardTitle,
  Grid,
  Header,
  Heading,
  Inner,
  LinkRow,
  LiveLink,
  Section,
  SeeAllLink,
  Tag,
  TagRow,
} from "./styles";

const PROJECTS_INDEX_URL = "https://github.com/levysantiago?tab=repositories";

const ProjectsV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="projects" ref={reveal.ref} $visible={reveal.isVisible}>
      <Inner>
        <Header>
          <Heading>{c.heading}</Heading>
          <SeeAllLink href={PROJECTS_INDEX_URL} target="_blank" rel="noopener">
            {c.seeAll}
          </SeeAllLink>
        </Header>
        <Grid>
          {c.projects.map((project) => (
            <Card key={project.title}>
              <ImagePlaceholder width="100%" height="180px" radius="0px" label={c.imageLabel} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <TagRow>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>
                <LinkRow>
                  <CardLink href={project.githubUrl} target="_blank" rel="noopener">
                    <GithubLogo size={16} />
                    {c.codeLabel}
                  </CardLink>
                  {project.liveUrl && (
                    <LiveLink href={project.liveUrl} target="_blank" rel="noopener">
                      <ArrowSquareOut size={16} />
                      {c.liveLabel}
                    </LiveLink>
                  )}
                </LinkRow>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default ProjectsV2;
```

- [ ] **Step 7: Render it in `HomePageV2/index.tsx`**

Add `import ProjectsV2 from "pages/sections-v2/ProjectsV2";` and render
`<ProjectsV2 />` after `<TechnologiesV2 />`.

- [ ] **Step 8: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm a banded Projects section, "See all projects →"
link (opens the GitHub repositories tab in a new tab), and 3 cards
(Boarding-Pass, TextMe, Gifflar) each with a placeholder screenshot, title,
one-line description, 2 outlined tags, and a "Code" link (no "Live" link,
since none of these projects have one yet). Grid drops to 2 then 1 column as
the viewport narrows. PT-BR shows translated descriptions and "Ver todos os
projetos →" / "Código".

- [ ] **Step 9: Commit**

```bash
git add src/pages/sections-v2/ProjectsV2 src/pages/HomePageV2/index.tsx
git commit -m "feat: add ProjectsV2 section to homepage v2"
```

---

## Task 12: ContactClose section

**Files:**
- Create: `src/pages/sections-v2/ContactClose/content/en.ts`
- Create: `src/pages/sections-v2/ContactClose/content/pt.ts`
- Create: `src/pages/sections-v2/ContactClose/content/index.ts`
- Create: `src/pages/sections-v2/ContactClose/styles.tsx`
- Create: `src/pages/sections-v2/ContactClose/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<ContactClose />`)

**Interfaces:**
- Consumes: `EMAIL`, `LINKEDIN_URL` from `../socialLinks`.
- Produces: default export `ContactClose: React.FC`.

Like Hero, this heading needs both a highlighted word ("solid"/"sólido") and
an explicit line break — `formatContent` only handles the former, so this
uses the same small-fields-composed-in-JSX pattern as Hero rather than
`formatContent`.

- [ ] **Step 1: Create `ContactClose/content/en.ts`**

```ts
export const en = {
  headingLine1: "Let's build something",
  headingAccent: "solid",
  headingSuffix: " together.",
  paragraph: "Open to freelance back-end and AI work. The fastest way to reach me is email.",
  linkedinLabel: "LinkedIn",
};
```

- [ ] **Step 2: Create `ContactClose/content/pt.ts`**

```ts
export const pt = {
  headingLine1: "Vamos construir algo",
  headingAccent: "sólido",
  headingSuffix: " juntos.",
  paragraph: "Aberto para trabalhos freelance em back-end e IA. A forma mais rápida de me encontrar é por email.",
  linkedinLabel: "LinkedIn",
};
```

- [ ] **Step 3: Create `ContactClose/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `ContactClose/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const Section = styled.section(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    max-width: 1080px;
    margin: 0 auto;
    padding: 96px 24px 104px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: center;

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  `
);

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: clamp(30px, 3.4vw, 40px);
    letter-spacing: -0.02em;
    margin: 0 0 12px;
  `
);

export const HeadingAccent = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const Paragraph = styled.p(
  (props: IProps) => css`
    margin: 0;
    color: color-mix(in srgb, ${props.theme.colors.text} 76%, transparent);
    max-width: 46ch;
  `
);

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonBase = styled.a(
  (props: IProps) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
  `
);

export const PrimaryButton = styled(ButtonBase)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
    border-color: ${props.theme.colors.green};

    &:hover {
      background: color-mix(in srgb, ${props.theme.colors.green} 12%, transparent);
    }
  `
);

export const GhostButton = styled(ButtonBase)(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};

    &:hover {
      background: color-mix(in srgb, ${props.theme.colors.accent} 10%, transparent);
    }
  `
);
```

- [ ] **Step 5: Create `ContactClose/index.tsx`**

```tsx
import * as React from "react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { EMAIL, LINKEDIN_URL } from "../socialLinks";
import { content } from "./content";
import {
  Actions,
  GhostButton,
  Heading,
  HeadingAccent,
  Paragraph,
  PrimaryButton,
  Section,
} from "./styles";

const ContactClose: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section ref={reveal.ref} $visible={reveal.isVisible}>
      <div>
        <Heading>
          {c.headingLine1}
          <br />
          <HeadingAccent>{c.headingAccent}</HeadingAccent>
          {c.headingSuffix}
        </Heading>
        <Paragraph>{c.paragraph}</Paragraph>
      </div>
      <Actions>
        <PrimaryButton href={`mailto:${EMAIL}`}>{EMAIL}</PrimaryButton>
        <GhostButton href={LINKEDIN_URL} target="_blank" rel="noopener">
          {c.linkedinLabel}
        </GhostButton>
      </Actions>
    </Section>
  );
};

export default ContactClose;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

Add `import ContactClose from "pages/sections-v2/ContactClose";` and render
`<ContactClose />` after `<ProjectsV2 />`.

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm the closing section: heading "Let's build
something / solid together." ("solid" green), a paragraph, and two stacked
outlined buttons (email address, LinkedIn). Below 720px, buttons stack under
the heading instead of beside it. PT-BR shows "Vamos construir algo / sólido
juntos."

- [ ] **Step 8: Commit**

```bash
git add src/pages/sections-v2/ContactClose src/pages/HomePageV2/index.tsx
git commit -m "feat: add ContactClose section to homepage v2"
```

---

## Task 13: FooterV2

**Files:**
- Create: `src/components/FooterV2/content/en.ts`
- Create: `src/components/FooterV2/content/pt.ts`
- Create: `src/components/FooterV2/content/index.ts`
- Create: `src/components/FooterV2/styles.tsx`
- Create: `src/components/FooterV2/index.tsx`
- Modify: `src/pages/HomePageV2/index.tsx` (render `<FooterV2 />`)

**Interfaces:**
- Consumes: `GITHUB_URL`, `LINKEDIN_URL`, `EMAIL` from
  `pages/sections-v2/socialLinks`.
- Produces: default export `FooterV2: React.FC`.

- [ ] **Step 1: Create `FooterV2/content/en.ts`**

```ts
export const en = {
  locationLine: "Levy Santiago — Ilhéus, Bahia, Brazil",
};
```

- [ ] **Step 2: Create `FooterV2/content/pt.ts`**

```ts
export const pt = {
  locationLine: "Levy Santiago — Ilhéus, Bahia, Brasil",
};
```

- [ ] **Step 3: Create `FooterV2/content/index.ts`**

```ts
import { en } from "./en";
import { pt } from "./pt";

export const content = { en, pt };
```

- [ ] **Step 4: Create `FooterV2/styles.tsx`**

```tsx
import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Container = styled.footer(
  (props: IProps) => css`
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
  `
);

export const Inner = styled.div(
  (props: IProps) => css`
    max-width: 1080px;
    margin: 0 auto;
    padding: 28px 24px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[500]};
  `
);

export const IconRow = styled.div`
  display: flex;
  gap: 18px;
  font-size: 18px;
`;

export const IconLink = styled.a`
  color: inherit;
  display: flex;
`;
```

- [ ] **Step 5: Create `FooterV2/index.tsx`**

```tsx
import * as React from "react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "pages/sections-v2/socialLinks";
import { content } from "./content";
import { Container, IconLink, IconRow, Inner } from "./styles";

const FooterV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <Container>
      <Inner>
        <span>{c.locationLine}</span>
        <IconRow>
          <IconLink href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub">
            <GithubLogo size={18} />
          </IconLink>
          <IconLink href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedinLogo size={18} />
          </IconLink>
          <IconLink href={`mailto:${EMAIL}`} aria-label="Email">
            <EnvelopeSimple size={18} />
          </IconLink>
        </IconRow>
      </Inner>
    </Container>
  );
};

export default FooterV2;
```

- [ ] **Step 6: Render it in `HomePageV2/index.tsx`**

Add `import FooterV2 from "components/FooterV2";` and render `<FooterV2 />`
as the last child, after `<ContactClose />`. The full `HomePageV2/index.tsx`
should now read:

```tsx
import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import NavbarV2 from "components/NavbarV2";
import FooterV2 from "components/FooterV2";
import Hero from "pages/sections-v2/Hero";
import StatStrip from "pages/sections-v2/StatStrip";
import AboutV2 from "pages/sections-v2/AboutV2";
import ExperienceV2 from "pages/sections-v2/ExperienceV2";
import TechnologiesV2 from "pages/sections-v2/TechnologiesV2";
import ProjectsV2 from "pages/sections-v2/ProjectsV2";
import ContactClose from "pages/sections-v2/ContactClose";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content>
          <NavbarV2 />
          <Hero />
          <StatStrip />
          <AboutV2 />
          <ExperienceV2 />
          <TechnologiesV2 />
          <ProjectsV2 />
          <ContactClose />
          <FooterV2 />
        </Content>
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
```

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn start`, confirm the footer at the very bottom: location line on
the left, GitHub/LinkedIn/email icons on the right, 1px divider above. All
nine pieces of the page (nav, hero, stat strip, about, experience,
technologies, projects, contact close, footer) are now present in order.

- [ ] **Step 8: Commit**

```bash
git add src/components/FooterV2 src/pages/HomePageV2/index.tsx
git commit -m "feat: add FooterV2 and complete homepage v2 composition"
```

---

## Task 14: Full cross-cutting QA pass

**Files:** none (verification only; fix forward in whichever file if
something's off, then re-commit that file).

This task has no new code — it's the full manual verification pass replacing
what would otherwise be an integration test suite (see Global Constraints on
why this repo doesn't have one).

- [ ] **Step 1: Type-check and build**

Run: `yarn tsc --noEmit`
Expected: no errors.

Run: `yarn build`
Expected: production build completes with no errors (warnings about unused
CRA defaults are pre-existing and fine).

- [ ] **Step 2: Old homepage is truly untouched**

Run: `git diff main -- src/pages/HomePage src/pages/sections src/components/Navbar src/components/Footer src/components/Theme`
(replace `main` with whatever base branch/commit this work started from)
Expected: empty diff — none of these files changed.

- [ ] **Step 3: Visual QA — English, desktop width (~1280px)**

`yarn start`, open `http://localhost:3000/#/`. Walk top to bottom:
nav sticky + blurred on scroll; hero copy/buttons/social icons/portrait
placeholder; stat strip; about heading/lead/facts/cards; experience timeline
(click through all four roles, confirm independent expand/collapse); tech
tag groups; projects grid + "See all projects" link opens GitHub in a new
tab; contact close buttons; footer. Confirm every internal nav link
(`About`/`Experience`/`Technologies`/`Projects`, and the `Levy.` brand)
smooth-scrolls to the right section.

- [ ] **Step 4: Visual QA — Portuguese**

Click the `PT-BR` toggle in the nav (or the footer isn't a language toggle —
use the nav). URL becomes `/#/pt`. Confirm every section's copy switches to
the Portuguese text written in Tasks 6–13, with no leftover English strings
and no broken `<highlight>`-style markup showing as literal text. Toggle back
to `EN` and confirm it returns cleanly.

- [ ] **Step 5: Responsive QA**

Using devtools responsive mode, check these breakpoints:
- **~1024px**: nav section-links still visible (hide below 1020px).
- **~1000px**: nav section-links hidden, only brand + language toggle remain.
- **~860px**: hero, about, and contact-close grids stack to one column;
  hero portrait appears above the text.
- **~700px**: projects grid at 2 columns; contact-close buttons stack below
  the heading.
- **~600px**: projects grid at 1 column; stat strip stacks to 1 column; tech
  groups stack to 1 column.
Confirm no horizontal scrollbar appears at any width down to 360px.

- [ ] **Step 6: Interaction QA**

- `prefers-reduced-motion: reduce` (devtools → Rendering → Emulate CSS media
  feature): reload, confirm sections appear immediately with no fade/slide
  and the background dot-mesh doesn't drift.
- Tab through the page with keyboard only: confirm every interactive element
  (nav links, language toggle, buttons, experience summaries, project links,
  footer icons) gets a visible 2px accent focus ring, and the tab order is
  top-to-bottom, left-to-right.

- [ ] **Step 7: Fix anything found, then final commit**

If any check above fails, fix it in the relevant task's files (styles.tsx,
index.tsx, or content files) and re-run the relevant checks above before
continuing. Once everything passes:

```bash
git status
git add -A
git commit -m "fix: address QA findings on homepage v2" --allow-empty
```

Use `--allow-empty` only if Step 7 found nothing to fix — otherwise the
commit will naturally include real changes and the flag is unnecessary.
