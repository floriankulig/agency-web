import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-label inline-flex items-center font-medium tracking-wide uppercase',
        variant === 'default' && 'bg-teal/10 text-teal rounded-full px-3 py-1',
        variant === 'outline' && 'border-teal/40 text-teal rounded-full border px-3 py-1',
        className,
      )}
    >
      {children}
    </span>
  )
}
