import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  narrow?: boolean
  className?: string
}

export function Container({ children, narrow = false, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-8',
        narrow ? 'max-w-[var(--container-narrow)]' : 'max-w-[var(--container-max)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
