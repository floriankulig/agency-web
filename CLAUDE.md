# CLAUDE.md — Skorva Website

## Projekt-Überblick
Onepager-Website für Skorva — eine IT-Beratung für KI-Prozessautomatisierung
im Mittelstand (Region Mittelfranken/Bayern).

## Tech Stack
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS v4 (CSS-basierte Config via @theme in globals.css)
- Motion (motion.dev) für Animationen
- pnpm als Package Manager
- Deployment auf Vercel

## Architektur-Entscheidungen
- Komplett custom Components, kein shadcn/ui oder andere Component Libraries
- Keine Internationalisierung. Alle Texte auf Deutsch, hardcoded in Komponenten.
- Kein CMS. Inhalte direkt in den Komponenten.
- Kein Blog, kein dynamischer Content.

## Ordnerstruktur
- `src/components/ui/` — Atomare UI-Bausteine (Button, Container, Badge etc.)
- `src/components/layout/` — Layout-Strukturkomponenten (Header, Footer, Section)
- `src/components/sections/` — Seitenabschnitte des Onepagers
- Dateinamen: PascalCase (z.B. `Button.tsx`, `Section.tsx`, `Hero.tsx`)
- `src/lib/` — Utilities (cn(), Motion-Presets)
- `src/types/` — Shared TypeScript Types
- `docs/` — Projektdokumentation und Referenzen

## Referenzen lesen
Vor jeder Arbeit an diesem Projekt:
1. **Design System:** `docs/design-system.md` — Farben, Typografie, Logo, Voice & Tone
2. **Frontend Skill:** `docs/frontend-design-skill.md` — Ästhetik-Guidelines
3. **Website-Konzept:** `docs/website-concept.md` — Inhaltliches Konzept des Onepagers

## Design System Kurzreferenz
- **Primärfarbe:** Teal #38756E
- **Sekundär:** Mint #5DB29A
- **Akzent:** Lime #8FB848 (sparsam)
- **Hintergrund:** #F4FAF7
- **Text:** #4A6E62 (Body), #1A2E27 (Headlines)
- **Font:** Outfit (300–700)
- **Brand Gradient:** linear-gradient(99.5deg, #5DB29A 2.975%, #38756E 97.025%)
- **Logo:** Immer lowercase "skorva"

## Coding Conventions
- Funktionale Components mit TypeScript
- Props als interface, nicht type (für Erweiterbarkeit)
- cn() aus src/lib/utils.ts für conditional classes
- Motion-Varianten aus src/lib/motion.ts wiederverwenden
- Kein `use client` außer wenn tatsächlich Client-Interaktion nötig
- Sections bekommen id-Props für potentielle Scroll-Navigation
- **Bilder:** IMMER `next/image` oder den Wrapper `src/components/ui/Image.tsx` verwenden, nie `<img>`. Alt-Texte auf Deutsch, beschreibend (Barrierefreiheit). Priority-Flag für above-the-fold Bilder setzen (Hero, Logo).
- **Fonts:** IMMER next/font verwenden, nie `<link>` oder `@import`. Outfit ist global konfiguriert in `src/app/layout.tsx`.
- **Dateinamen:** Komponenten immer PascalCase (Button.tsx, Hero.tsx). Nur lib/ und types/ lowercase.

## Tailwind v4 Hinweise
- Keine tailwind.config.js — alles über @theme in globals.css
- Custom Utilities via @utility Direktive
- Farben sind als --color-* Variablen definiert → nutzbar als `bg-teal`, `text-dark-800` etc.

## Voice & Tone (für Textinhalte)
- Direkt, konkret, nüchtern. Kein Marketing-Hype.
- Zahlen statt Adjektive. "2–4 Tage" statt "schnell".
- Formelles "Sie". Keine Anglizismen ohne Erklärung.
- Verboten: "revolutionieren", "innovativ", "state-of-the-art", "End-to-End",
  "Synergien", "Transformation", Ausrufezeichen.

## Commands
- `pnpm dev` — Lokaler Dev-Server
- `pnpm build` — Production Build
- `pnpm lint` — Biome lint
- `pnpm format` — Biome Format (schreibt Änderungen)
- `pnpm format:check` — Biome Format (nur prüfen)
- `pnpm check` — Biome lint + format prüfen
- `pnpm check:fix` — Biome lint + format anwenden
