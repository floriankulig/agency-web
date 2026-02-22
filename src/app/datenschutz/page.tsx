import { Header } from '@/components/layout'
import { Container } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Datenschutz — skorva',
}

export default function DatenschutzPage() {
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
            <ArrowLeft size={16} aria-hidden="true" />
            Zurück zur Startseite
          </a>

          {/* Page title */}
          <h1 className="text-dark-800 leading-heading mb-2 text-4xl font-semibold tracking-tight md:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="text-small text-mid-400 mb-12">Stand: Februar 2026</p>

          {/* Prose content */}
          <div className="text-body text-mid-500 leading-body space-y-8">
            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-h4 text-dark-800 mb-2 font-semibold">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">
                2. Verantwortliche Stelle
              </h2>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-3">
                [Vorname Nachname]
                <br />
                [Straße Hausnummer]
                <br />
                [PLZ] Weißenburg / Mittelfranken
                <br />
                E-Mail:{' '}
                <a href="mailto:hallo@skorva.de" className="text-teal hover:underline">
                  hallo@skorva.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">
                3. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-h4 text-dark-800 mb-2 font-semibold">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in
                sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
                Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname
                des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
              </p>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">
                4. Kontaktanfragen per E-Mail
              </h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
                ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse).
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">5. Hosting (Vercel)</h2>
              <p>
                Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
                gehostet. Details entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-dark-800 mb-3 font-semibold">6. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                Datenverarbeitung sowie das Recht auf Berichtigung, Sperrung oder Löschung dieser
                Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
                sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
              <p className="mt-3">
                Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu
                (Bayerisches Landesamt für Datenschutzaufsicht).
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  )
}
