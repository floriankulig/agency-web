'use client'
import { Container } from '@/components/ui/Container'
import { theme } from '@/lib/theme'
import { colord } from 'colord'
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'

export function Header() {
  const { scrollY } = useScroll()

  const progress = useTransform(scrollY, [16, 116], [0, 1], { clamp: false })

  const borderColor = useTransform(
    progress,
    [0.9, 1],
    [theme.colors.transparent, theme.colors.light200],
  )
  const bgBase = colord(theme.colors.white)
  const bgColor = useTransform(
    progress,
    [0, 1],
    [bgBase.alpha(0).toHex(), bgBase.alpha(0.8).toHex()],
  )

  const blurPx = useTransform(progress, [0, 0.5], [0, 10])
  const blurFilter = useMotionTemplate`blur(${blurPx}px)`

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 border-b  backdrop-blur-md"
      style={{ borderColor, backgroundColor: bgColor, backdropFilter: blurFilter }}
    >
      <Container>
        <div className="flex h-16 items-center">
          <Link href="/" className="text-h4 text-teal leading-none font-semibold tracking-tight">
            skorva
          </Link>
        </div>
      </Container>
    </motion.header>
  )
}
