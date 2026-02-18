import { Footer, Header } from '@/components/layout'
import {
  HeroSection,
  KontaktSection,
  LeistungenSection,
  PainSection,
  ProzessSection,
  UeberSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <LeistungenSection />
        <ProzessSection />
        <UeberSection />
        <KontaktSection />
      </main>
      <Footer />
    </>
  )
}
