import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  id?: string
  narrow?: boolean
  className?: string
}

export function Section({ children, id, narrow, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-section', className)}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  )
}
