'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Section } from '@/components/layout/Section'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const steps = [
  {
    number: '01',
    title: 'Erstgespräch (kostenlos, 30 Min.)',
    description:
      'Wir schauen gemeinsam, wo bei Ihnen der größte Hebel liegt. Kein Verkaufsgespräch — wenn es keinen sinnvollen Ansatz gibt, sagen wir das.',
  },
  {
    number: '02',
    title: 'Konzept & Angebot',
    description:
      'Sie bekommen ein konkretes Angebot mit festem Preis und klarem Umfang. Keine offenen Stundenkontingente.',
  },
  {
    number: '03',
    title: 'Umsetzung',
    description:
      'Wir bauen den Workflow, testen ihn mit echten Daten und schulen Ihr Team. Typische Projektdauer: 2–8 Tage.',
  },
  {
    number: '04',
    title: 'Betrieb & Weiterentwicklung',
    description:
      'Nach dem Go-Live überwachen wir das System, optimieren bei Bedarf und stehen für Fragen bereit. Optional als monatliche Flatrate.',
  },
]

export function ProzessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="prozess" className="bg-white/50">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-dark-800 leading-heading mb-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Vom Gespräch zum laufenden System — in Wochen, nicht Monaten.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-h4 text-mid-400 leading-body mb-12 font-normal"
        >
          So läuft eine Zusammenarbeit ab.
        </motion.p>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex flex-col gap-4 p-6 md:p-8"
            >
              {/* Connector line (desktop only, not on last item) */}
              {index < steps.length - 1 && (
                <div
                  className="bg-light-200 absolute top-10 right-0 left-[calc(50%+1.5rem)] hidden h-px lg:block"
                  aria-hidden="true"
                />
              )}

              {/* Number circle */}
              <div className="brand-gradient relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                <span className="text-small font-semibold text-white">{step.number}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-h4 text-dark-800 leading-subheading mb-2 font-semibold">
                  {step.title}
                </h3>
                <p className="text-body text-mid-500 leading-body">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
