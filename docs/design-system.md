# Skorva Design System

> Dieses Dokument ist die verbindliche Referenz für alle visuellen und
> kommunikativen Entscheidungen im Skorva-Projekt. Vor der Arbeit an
> UI-Komponenten oder Texten hier nachschlagen.

---

## Farbpalette

### Kernfarben

| Token       | Hex       | Verwendung                                      |
|-------------|-----------|--------------------------------------------------|
| `teal`      | `#38756E` | Primärfarbe, CTAs, Akzente                       |
| `mint`      | `#5DB29A` | Gradient-Start, Hover, Sekundär-Elemente         |
| `lime`      | `#8FB848` | Akzentfarbe (sehr sparsam, max. 1–2x pro Seite)  |
| `bg`        | `#F4FAF7` | Haupt-Seitenhintergrund                          |
| `dark-900`  | `#1A2E27` | Headlines                                        |
| `dark-700`  | `#2D4A41` | Subheadlines                                     |
| `mid-500`   | `#4A6E62` | Body Text                                        |
| `light-300` | `#8AADA5` | Sekundärtext, Captions, Placeholder              |
| `surface`   | `#E8F5F0` | Card-Hintergründe, subtile Abgrenzung            |

### Brand Gradient
```css
background: linear-gradient(99.5deg, #5DB29A 2.975%, #38756E 97.025%);
```
Verwendung: Primäre CTAs, Hero-Akzente, Brand-Elemente.

### Farbregeln
- Primärfarbe Teal nicht flächig als Hintergrund verwenden (außer Gradient)
- Lime nur für Icons oder kleine Akzente, nie für Buttons oder Headlines
- Text auf Teal-Hintergrund: immer Weiß oder sehr helles Mint
- Kontrast immer ≥ 4.5:1 (WCAG AA)

---

## Typografie

### Font Family
**Outfit** — Google Fonts, geladen via `next/font/google`

```tsx
// src/app/layout.tsx
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})
```

### Typografische Hierarchie

| Element   | Größe (Desktop) | Größe (Mobile) | Gewicht | Letter-Spacing |
|-----------|-----------------|----------------|---------|----------------|
| H1        | 56–72px         | 36–48px        | 600     | –0.03em        |
| H2        | 40–48px         | 28–36px        | 600     | –0.02em        |
| H3        | 28–32px         | 22–26px        | 600     | –0.01em        |
| Body L    | 18px            | 16px           | 400     | 0              |
| Body      | 16px            | 15px           | 400     | 0              |
| Caption   | 14px            | 13px           | 400     | 0.01em         |
| Label     | 12px            | 12px           | 500     | 0.08em         |

### Typografieregeln
- Headlines in `dark-900` (#1A2E27)
- Body in `mid-500` (#4A6E62)
- Captions/Labels in `light-300` (#8AADA5)
- Kein Kursiv im Fließtext
- Fett (700) nur für CTAs und sparsame Hervorhebungen

---

## Logo

### Regeln
- Immer **lowercase**: `skorva` — nie "Skorva" oder "SKORVA"
- Logo-Text in Outfit Semibold 600
- Primär in Teal (#38756E) oder Weiß (auf dunklem Hintergrund)
- Minimale Größe: 24px Schrifthöhe
- Kein Freisteller, keine Schatten, keine Rahmen um das Logo

---

## Spacing & Layout

### Basis-Einheit: 4px
```
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160px
```

### Section-Padding
- Desktop: `py-20` bis `py-32` (80–128px)
- Mobile: `py-12` bis `py-16` (48–64px)

### Container
- Max-Width: 1200px
- Horizontal Padding: 24px (Mobile), 48px (Desktop)

### Border-Radius
- Klein: 6px (Tags, Badges)
- Mittel: 12px (Cards, Inputs)
- Groß: 20px (Feature-Cards, Modal)
- Vollrund: 9999px (Buttons, Chips)

---

## Komponenten-Tokens

### Schatten
```css
/* Karte */
box-shadow: 0 1px 3px rgba(26, 46, 39, 0.06), 0 4px 16px rgba(26, 46, 39, 0.04);
/* Karte Hover */
box-shadow: 0 4px 12px rgba(26, 46, 39, 0.10), 0 8px 32px rgba(26, 46, 39, 0.06);
```

### Borders
```css
border: 1px solid #E0EDEA;
```

### Transition
```css
transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
```

---

## Voice & Tone

### Grundprinzip
Die Sprache von Skorva ist die Sprache eines erfahrenen Praktikanten, nicht
eines Unternehmensberaters. Konkret, direkt, ohne Füllwörter.

### Verbotene Begriffe
- revolutionieren, revolutionär
- innovativ, Innovation
- state-of-the-art
- End-to-End
- Synergien
- Transformation, transformieren
- Ausrufezeichen (!)
- Buzzwords jeder Art

### Stilregeln
- Formelles "Sie" — kein "Du"
- Zahlen statt Adjektive: "2–4 Tage" statt "schnell"
- Konkrete Ergebnisse nennen: "spart 3h/Woche" statt "effizienter"
- Anglizismen nur wenn kein deutsches Äquivalent: "E-Mail" ok, "Workflow" erklären
- Kurze Sätze. Ein Gedanke pro Satz.

### Tonalität nach Kontext

| Kontext        | Ton                                              |
|----------------|--------------------------------------------------|
| Hero           | Klar, direkt, vertrauenerweckend                 |
| Leistungen     | Sachlich, kompetent, ohne Übertreibung           |
| Über uns       | Persönlich, regional, bodenständig               |
| CTA            | Direkt, handlungsorientiert (kein Druck)         |
| Fehler/404     | Ruhig, hilfsbereit                               |

---

## Tailwind v4 Konfiguration (Referenz)

Die Custom-Tokens sind in `src/app/globals.css` via `@theme` definiert:

```css
@theme {
  --color-teal: #38756E;
  --color-mint: #5DB29A;
  --color-lime: #8FB848;
  --color-bg: #F4FAF7;
  --color-surface: #E8F5F0;
  --color-dark-900: #1A2E27;
  --color-dark-700: #2D4A41;
  --color-mid-500: #4A6E62;
  --color-light-300: #8AADA5;

  --font-outfit: var(--font-outfit);
}
```
