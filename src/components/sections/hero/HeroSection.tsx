'use client'

import { MovingBackground } from '@/components/layout/MovingBackground'
import { fadeInUp } from '@/lib/motion'
import { motion } from 'motion/react'
import Image from 'next/image'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  /* background: linear-gradient(99.5deg, #5db29a 2.975%, #38756e 97.025%); */
`

const HeroLayout = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  padding: 3rem 1rem;
  width: 90vw;
  /* max-width: 1200px; */
  margin: 0 auto;

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 1rem;

  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
  }
`

export function HeroSection() {
  return (
    <StyledHeroSection>
      <MovingBackground zIndex={0} />
      {/* <HeroCircles /> */}
      <HeroLayout>
        <HeroContent>
          <motion.p
            variants={fadeInUp}
            className="text-label text-teal-100 pl-1 font-medium tracking-wide uppercase"
          >
            IT-Beratung &amp; KI-Automatisierung · Mittelfranken
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-white">
            Weniger Verwaltung.
            <br />
            Mehr Kerngeschäft.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-h4 text-light-200 leading-body text-pretty max-w-xl font-normal"
          >
            Wir automatisieren die Prozesse, die Ihre Mitarbeiter ausbremsen — mit KI, die wirklich
            funktioniert. Für Handwerk, Fertigung und Mittelstand in Franken.
          </motion.p>
        </HeroContent>
        <div className="hero-image">
          <Image
            width={550}
            height={550}
            // src="/images/workflow.png"
            src="/images/desk.png"
            alt="Illustration eines Schreibtisches mit Computer, Pflanzen und Kaffeetasse"
          />
        </div>
      </HeroLayout>
      {/*
       <motion.p
            variants={fadeInUp}
            className="text-label text-teal-200 font-medium tracking-wide uppercase"
          >
            IT-Beratung &amp; KI-Automatisierung · Mittelfranken
          </motion.p>
          
          <motion.h1
            variants={fadeInUp}
            className="text-white leading-heading max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Weniger Verwaltung.
            <br />
            Mehr Kerngeschäft.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-h4 text-light-200 leading-body max-w-xl font-normal"
          >
            Wir automatisieren die Prozesse, die Ihre Mitarbeiter ausbremsen —
            mit KI, die wirklich funktioniert. Für Handwerk, Fertigung und
            Mittelstand in Franken.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2 text-white" >
            <Button href="#">
              Erstgespräch vereinbaren
            </Button>
            <Button href="#" variant="ghost">
              Oder schreiben Sie uns direkt
            </Button>
          </motion.div> */}
    </StyledHeroSection>
  )
}
