# Frontend Design Skill — Skorva-Anpassung

## Generelle Ästhetik-Prinzipien

### Visuelles Denken
- Design als System, nicht als Ansammlung von Elementen
- Konsistente Abstände über eine 4/8px-Basis-Einheit
- Typografische Hierarchie durch Gewicht und Größe, nicht durch Farbe
- Negative Space ist kein Leerraum, sondern ein gestalterisches Element

### Layout
- Grid: 12 Spalten (Desktop), fluid (Mobile)
- Max-Width für Content: 1200px, zentriert
- Section-Padding: 80–120px vertikal (Desktop), 48–64px (Mobile)
- Inhaltsbreite: 65–75ch für Fließtext

### Farbe
- Primärfarbe sparsam einsetzen — als Akzent, nicht als Hintergrund
- Backgrounds: immer near-white oder sehr helles Teal-Derivat
- Text auf farbigen Hintergründen: Kontrast ≥ 4.5:1 (WCAG AA)
- Gradient: nur für primäre CTAs und Brand-Elemente

### Typografie
- Klare Hierarchie: H1 > H2 > H3 > Body > Caption
- Keine mehr als 3 Schriftgrößen pro Section
- Line-Height: 1.5–1.6 für Body, 1.1–1.2 für Headlines
- Letter-Spacing: negativ für große Headlines (–0.02 bis –0.04em)

### Komponenten-Ästhetik
- Border-Radius: konsistent (klein: 6px, mittel: 12px, groß: 20px)
- Schatten: dezent, monochrom (keine farbigen Box-Shadows)
- Borders: 1px, light (#E0EDEA oder ähnlich)
- Hover-States: dezente Helligkeits-/Opacity-Änderung, kein Layout-Shift

---

## Skorva-spezifische Anpassungen

### Ästhetische Richtung
Skorva ist KEIN Tech-Startup. Die Ästhetik ist:
- **Professionell-ruhig**, nicht laut oder flashy
- **Dezenter Hochtechnologie-Hauch** durch die Teal/Mint-Farbgebung
- **Editorial/Corporate** mit warmer, zugänglicher Note
- **Vertrauenswürdig** — der GF eines 30-Mann-Betriebs soll sich angesprochen fühlen

### Font
Outfit ist gesetzt (Google Fonts). Keine Alternative nötig.
Headlines: Semibold 600, negatives Letter-Spacing.
Body: Regular 400 in Mid-500 (#4A6E62).

### Animationen
Zurückhaltend, nicht verspielt. Passende Effekte:
- Fade-in beim Scrollen (staggered)
- Subtile Hover-States auf interaktiven Elementen
- Kein Parallax, keine 3D-Effekte, kein Confetti
- Ease: cubic-bezier(0.16, 1, 0.3, 1)

### Backgrounds & Texturen
- Haupt-Hintergrund: #F4FAF7 (warm off-white)
- Subtiler radialer Gradient für Hero / Feature-Sections
- Feiner Noise-Overlay ist erlaubt (wie im Logo-Bild zu sehen)
- Keine Pattern, keine Illustrationen
