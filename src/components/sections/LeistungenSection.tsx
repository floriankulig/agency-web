'use client'

import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/Badge'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const examples = [
  {
    title: 'E-Mail-Triage & Auto-Antwort',
    description:
      'Eingehende Mails werden automatisch sortiert, Standard-Anfragen beantwortet, Sonderfälle mit Zusammenfassung weitergeleitet.',
    meta: 'Aufwand: 2–4 Tage · Ergebnis: 60 % weniger manuelle Mail-Bearbeitung',
  },
  {
    title: 'Rechnungen & Belege automatisch erfassen',
    description:
      'PDFs rein, strukturierte Daten raus. Positionen, Beträge, Lieferanten — direkt ins ERP oder als DATEV-Export.',
    meta: 'Aufwand: 3–5 Tage · Ergebnis: Keine Abtipp-Fehler, Stunden pro Woche gespart',
  },
  {
    title: 'Angebote in Minuten statt Stunden',
    description:
      'Kunde, Leistungen, Sonderwünsche eingeben — fertiges Angebot im Firmen-Design per Mail. Mit automatischer Nachverfolgung.',
    meta: 'Aufwand: 5–8 Tage · Ergebnis: Angebote am selben Tag raus statt nach drei Tagen',
  },
]

const nebenleistungen = [
  {
    title: 'Systeme verbinden, Daten nutzbar machen',
    description:
      'Ihre Software-Tools reden nicht miteinander? Wir bauen die Brücken — ob API-Anbindung, Cloud-Migration oder ein Dashboard, das Ihnen zeigt, was wirklich läuft. Bestandsaufnahme bis Umsetzung.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="16" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M5 9v4h14V9" />
        <path d="M12 13v2" />
      </svg>
    ),
  },
  {
    title: 'Eine Website, die für Sie arbeitet',
    description:
      'Modernes Design, SEO-optimiert, mit Online-Terminbuchung und Kontaktformular, das direkt in Ihr CRM läuft. Kein Baukastensystem — aber auch kein Sechs-Monats-Projekt.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
]

export function LeistungenSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="leistungen" className="subtle-gradient-bg">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-12">
          <Badge className="mb-4">Unser Schwerpunkt</Badge>
          <h2 className="text-dark-800 leading-heading mb-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            KI-Automatisierung, die sich rechnet
          </h2>
          <p className="text-h4 text-mid-500 leading-body max-w-2xl font-normal">
            Wir nehmen Ihren Mitarbeitern die Aufgaben ab, die Zeit fressen und keinen Spaß machen.
            Keine Science-Fiction — konkrete Workflows, die ab Tag 1 laufen.
          </p>
        </motion.div>

        {/* Example blocks */}
        <motion.div
          variants={staggerContainer}
          className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {examples.map((ex) => (
            <motion.div
              key={ex.title}
              variants={fadeInUp}
              className="border-light-200 flex flex-col gap-3 rounded-xl border bg-white p-6"
              style={{
                boxShadow: '0 1px 3px rgba(26,46,39,0.06), 0 4px 16px rgba(26,46,39,0.04)',
              }}
            >
              <h3 className="text-h4 text-dark-800 leading-subheading font-semibold">{ex.title}</h3>
              <p className="text-body text-mid-500 leading-body flex-1">{ex.description}</p>
              <p className="text-small text-teal border-light-200 border-t pt-3 font-medium">
                {ex.meta}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing sentence */}
        <motion.p
          variants={fadeInUp}
          className="text-body text-mid-400 border-teal/30 mb-16 border-l-2 pl-4 italic"
        >
          Das sind Beispiele. Jeder Prozess, der heute manuell, repetitiv und regelbasiert ist,
          lässt sich automatisieren. Wir finden gemeinsam heraus, wo bei Ihnen der größte Hebel
          liegt.
        </motion.p>

        {/* Divider */}
        <motion.div variants={fadeInUp} className="border-light-200 mb-12 border-t" />

        {/* Secondary services */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {nebenleistungen.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              className="border-light-200 flex gap-4 rounded-xl border bg-white p-6"
              style={{
                boxShadow: '0 1px 3px rgba(26,46,39,0.06), 0 4px 16px rgba(26,46,39,0.04)',
              }}
            >
              <div className="bg-teal/10 text-teal flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                {s.icon}
              </div>
              <div>
                <h3 className="text-h4 text-dark-800 leading-subheading mb-2 font-semibold">
                  {s.title}
                </h3>
                <p className="text-body text-mid-500 leading-body">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
