import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'brand-gradient text-white shadow-sm hover:opacity-90 hover:shadow-md rounded-lg',
    ghost: 'border border-teal text-teal bg-transparent hover:bg-teal hover:text-white rounded-lg',
    link: 'text-teal underline-offset-4 hover:underline p-0',
  }

  const sizes = {
    sm: 'px-4 py-2 text-small',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-h4',
  }

  const classes = cn(base, variants[variant], variant !== 'link' && sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
