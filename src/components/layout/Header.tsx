import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Header() {
  return (
    <header className="border-light-200/50 fixed top-0 right-0 left-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center">
          <Link href="/" className="text-h4 text-teal leading-none font-semibold tracking-tight">
            skorva
          </Link>
        </div>
      </Container>
    </header>
  )
}
