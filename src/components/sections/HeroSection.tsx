'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { motion } from 'motion/react'

export function HeroSection() {
  return (
    <section className="subtle-gradient-bg relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-mint/10 absolute top-1/4 right-0 h-[600px] w-[600px] translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-teal/8 absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full blur-3xl" />
      </div>

      <Container narrow>
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
            <Button href="mailto:hallo@skorva.de" variant="ghost" size="lg">
              Oder schreiben Sie uns direkt
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
