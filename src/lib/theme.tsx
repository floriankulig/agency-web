/**
 * theme.ts — JS-Spiegel des @theme{}-Blocks in src/globals.css
 *
 * WICHTIG: Diese Datei muss manuell aktualisiert werden, wenn globals.css
 * geändert wird. CSS ist die einzige Source of Truth für Tailwind.
 * theme.ts dient ausschließlich dem Zugriff auf Token-Werte in JavaScript
 * (z.B. Framer Motion / Motion-Animationen).
 */

// ─── Brand Colors ───────────────────────────────────────────────────────────

const colors = {
  teal: "#38756e",
  mint: "#5db29a",
  lime: "#8fb848",

  // Neutrals
  dark900: "#111c18",
  dark800: "#1a2e27",
  dark700: "#243d33",
  mid500: "#4a6e62",
  mid400: "#6a9088",
  light200: "#b8d8d0",
  light100: "#d9f2e6",
  white: "#f4faf7",
  transparent: "#f4faf700",

  // Gradients (als Strings, nutzbar z.B. in SVG-Fill oder backgroundImage)
  brandGradient: "linear-gradient(99.5deg, #5db29a 2.975%, #38756e 97.025%)",
} as const;

// ─── Typography ─────────────────────────────────────────────────────────────

const fontFamily = {
  sans: '"Outfit", sans-serif',
} as const;

const fontSize = {
  h1: "2.25rem",
  h2: "1.875rem",
  h3: "1.5rem",
  h4: "1.25rem",
  body: "1rem",
  small: "0.875rem",
  label: "0.75rem",
} as const;

const letterSpacing = {
  tight: "-0.03em",
  normal: "0",
  wide: "0.12em",
} as const;

const lineHeight = {
  heading: 1.2,
  subheading: 1.35,
  body: 1.6,
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────

const spacing = {
  section: "6rem",
  block: "3rem",
  element: "1.5rem",
} as const;

// ─── Layout ──────────────────────────────────────────────────────────────────

const container = {
  max: "72rem",
  narrow: "48rem",
} as const;

// ─── Border Radius ───────────────────────────────────────────────────────────

const radius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
} as const;

// ─── Transitions ─────────────────────────────────────────────────────────────

const ease = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

const duration = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// ─── Theme Object ────────────────────────────────────────────────────────────

export const theme = {
  colors,
  fontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  container,
  radius,
  ease,
  duration,
} as const;

// ─── CSS Variable Name Helper ─────────────────────────────────────────────────
//
// Maps a dot-notation token path to the corresponding CSS variable name.
// Example: getCssVarName("colors.teal") → "--color-teal"
//
// Mapping rules (matching globals.css variable naming):
//   colors.*      → --color-*         (camelCase keys converted: dark800 → dark-800)
//   fontSize.*    → --text-*
//   letterSpacing.* → --tracking-*
//   lineHeight.*  → --leading-*
//   spacing.*     → --spacing-*
//   container.*   → --container-*
//   radius.*      → --radius-*
//   ease.*        → --ease-*          (outExpo → out-expo)
//   duration.*    → --duration-*

type TokenPath =
  | `colors.${keyof typeof colors}`
  | `fontFamily.${keyof typeof fontFamily}`
  | `fontSize.${keyof typeof fontSize}`
  | `letterSpacing.${keyof typeof letterSpacing}`
  | `lineHeight.${keyof typeof lineHeight}`
  | `spacing.${keyof typeof spacing}`
  | `container.${keyof typeof container}`
  | `radius.${keyof typeof radius}`
  | `ease.${keyof typeof ease}`
  | `duration.${keyof typeof duration}`;

/** Converts a camelCase key to kebab-case (e.g. "dark800" → "dark-800", "outExpo" → "out-expo"). */
function toKebab(str: string): string {
  return str
    .replace(/([a-z])(\d)/g, "$1-$2")
    .replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
}

const prefixMap: Record<string, string> = {
  colors: "--color-",
  fontFamily: "--font-",
  fontSize: "--text-",
  letterSpacing: "--tracking-",
  lineHeight: "--leading-",
  spacing: "--spacing-",
  container: "--container-",
  radius: "--radius-",
  ease: "--ease-",
  duration: "--duration-",
};

export function getCssVarName(path: TokenPath): string {
  const [group, key] = path.split(".") as [string, string];
  const prefix = prefixMap[group];
  return `${prefix}${toKebab(key)}`;
}
