'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 py-24 md:py-32"
        >
          {/* Label */}
          <motion.p
            variants={fadeInUp}
            className="text-label text-teal font-medium tracking-wide uppercase"
          >
            IT-Beratung &amp; KI-Automatisierung · Mittelfranken
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp}
            className="text-dark-800 leading-heading max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Weniger Verwaltung.
            <br />
            Mehr Kerngeschäft.
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeInUp}
            className="text-h4 text-mid-500 leading-body max-w-xl font-normal"
          >
            Wir automatisieren die Prozesse, die Ihre Mitarbeiter ausbremsen — mit KI, die wirklich
            funktioniert. Für Handwerk, Fertigung und Mittelstand in Franken.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
            <Button href="#" size="lg">
              Erstgespräch vereinbaren
            </Button>
            <Button href="#" variant="ghost" size="lg">
              Oder schreiben Sie uns direkt
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
