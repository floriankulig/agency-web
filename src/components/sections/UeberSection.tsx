'use client'

import { Section } from '@/components/layout/Section'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const facts = [
  'Softwareentwicklung & Cloud-Architektur',
  'Individuelle Software-Lösungen',
  'Region Mittelfranken',
]

export function UeberSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="ueber" className="subtle-gradient-bg">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-(--container-narrow)"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-dark-800 leading-heading mb-8 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Wer dahinter steckt
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="text-h4 text-mid-500 leading-body mb-8 space-y-4 font-normal"
        >
          <p>
            Ich bin [Vorname Nachname], Softwareentwickler und Cloud-Architekt. Im Hauptberuf baue
            ich seit [X] Jahren individuelle Software-Lösungen für Unternehmen.
          </p>
          <p>
            Mit Skorva bringe ich dieses Know-how in die Region — für Betriebe, die keine eigene
            IT-Abteilung haben, aber trotzdem von moderner Technologie profitieren wollen.
          </p>
          <p>
            Kein Konzern-Overhead, kein Agentur-Aufschlag. Eine Ansprechperson, die versteht, was
            Sie brauchen, und es umsetzt.
          </p>
        </motion.div>

        {/* Fact chips */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
          {facts.map((fact) => (
            <span
              key={fact}
              className="border-teal/30 text-small text-teal rounded-full border px-4 py-2 font-medium"
            >
              {fact}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
