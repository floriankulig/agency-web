'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Section } from '@/components/layout/Section'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const pains = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    heading: 'Manuelle Routinearbeit frisst Zeit',
    text: 'Ihre Bürokraft verbringt den halben Tag mit E-Mails sortieren, Rechnungen abtippen und Angebote zusammenkopieren.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heading: 'Wissen steckt in Köpfen und Ordnern',
    text: 'Wissen steckt in Köpfen und alten Ordnern. Wenn ein Mitarbeiter fehlt, steht der Prozess still.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    heading: 'Berater reden — keiner baut',
    text: 'Sie wissen, dass Digitalisierung nötig wäre — aber jeder Berater redet, keiner baut.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    heading: 'Neue Kunden nur über Empfehlungen',
    text: 'Ihre Website ist von 2016. Neue Kunden finden Sie trotzdem nur über Empfehlungen — obwohl das Potenzial größer wäre.',
  },
]

export function PainSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="problem" className="bg-white/50">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Lead-in */}
        <motion.p variants={fadeInUp} className="text-body text-mid-400 mb-2">
          Kommt Ihnen das bekannt vor?
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-dark-800 leading-heading mb-12 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Wo die meisten Betriebe täglich Zeit verlieren
        </motion.h2>

        {/* Pain grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pains.map((pain) => (
            <motion.div
              key={pain.heading}
              variants={fadeInUp}
              className="border-light-200 flex gap-4 rounded-xl border bg-white p-6"
              style={{
                boxShadow: '0 1px 3px rgba(26,46,39,0.06), 0 4px 16px rgba(26,46,39,0.04)',
              }}
            >
              <div className="bg-teal/10 text-teal flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                {pain.icon}
              </div>
              <div>
                <h3 className="text-h4 text-dark-800 leading-subheading mb-1 font-semibold">
                  {pain.heading}
                </h3>
                <p className="text-body text-mid-500 leading-body">{pain.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
