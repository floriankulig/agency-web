import { Header } from '@/components/layout'
import { Container } from '@/components/ui'

export const metadata = {
  title: 'Impressum — skorva',
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-24">
        <Container narrow>
          {/* Back link */}
          <a
            href="/"
            className="text-small text-mid-400 hover:text-teal mb-10 inline-flex items-center gap-2 transition-colors duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </a>

          {/* Page title */}
          <h1 className="text-dark-800 leading-heading mb-12 text-4xl font-semibold tracking-tight md:text-5xl">
            Impressum
          </h1>

          {/* Prose content */}
          <div className="text-body text-mid-500 leading-body space-y-8">
            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">Angaben gemäß § 5 TMG</h2>
              <p>
                [Vorname Nachname]
                <br />
                [Straße Hausnummer]
                <br />
                [PLZ] Weißenburg / Mittelfranken
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">Kontakt</h2>
              <p>
                E-Mail:{' '}
                <a href="mailto:hallo@skorva.de" className="text-teal hover:underline">
                  hallo@skorva.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr.
                eintragen]
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">
                Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
              </h2>
              <p>
                [Vorname Nachname]
                <br />
                [Adresse wie oben]
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
                verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur
                für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  )
}
