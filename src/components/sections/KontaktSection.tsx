'use client'

import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function KontaktSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="kontakt" className="bg-dark-900 text-white">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-(--container-narrow) text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="leading-heading mb-6 text-3xl font-semibold tracking-tight text-white md:text-5xl"
        >
          Lassen Sie uns reden.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-h4 text-mid-400 leading-body mx-auto mb-10 max-w-lg font-normal"
        >
          30 Minuten, kein Verkaufsdruck. Wir schauen gemeinsam, ob und wo Automatisierung bei Ihnen
          Sinn macht.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#" size="lg">
            Erstgespräch buchen
          </Button>
          <a
            href="mailto:hallo@skorva.de"
            className="text-mid-400 text-body transition-colors duration-200 hover:text-white"
          >
            Oder direkt per Mail: hallo@skorva.de
          </a>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-small text-mid-400">
          Skorva · Region Weißenburg / Mittelfranken
        </motion.p>
      </motion.div>
    </Section>
  )
}
