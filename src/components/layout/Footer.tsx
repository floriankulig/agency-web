import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-dark-900 text-light-200">
      <Container>
        <div className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          {/* Logo + Slogan */}
          <div>
            <span className="text-h4 font-semibold tracking-tight text-white">skorva</span>
            <p className="text-small text-mid-400 mt-1">
              Komplexe Prozesse. Einfach digitalisiert.
            </p>
          </div>

          {/* Links */}
          <div className="text-small flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="/impressum"
              className="text-mid-400 transition-colors duration-200 hover:text-white"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-mid-400 transition-colors duration-200 hover:text-white"
            >
              Datenschutz
            </a>
            <a
              href="mailto:hallo@skorva.de"
              className="text-mid-400 transition-colors duration-200 hover:text-white"
            >
              hallo@skorva.de
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-label text-mid-400 flex flex-col gap-2 border-t border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between">
          <span>Skorva · Region Weißenburg / Mittelfranken</span>
          <span>© {new Date().getFullYear()} skorva. Alle Rechte vorbehalten.</span>
        </div>
      </Container>
    </footer>
  )
}
