import Link from 'next/link'
import { cn } from '@/utils'

export interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants = {
  primary:   'bg-accent border-accent text-white hover:bg-accent-h hover:border-accent-h',
  secondary: 'bg-transparent border-white/20 text-white/85 hover:border-white/50 hover:text-white',
  ghost:     'bg-transparent border-dark/20 text-dark hover:border-dark/50',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm gap-1.5',
  md: 'px-7 py-3.5 text-[15px] gap-2',
  lg: 'px-8 py-4 text-base gap-2',
}

export function Button({
  href, onClick, variant = 'primary', size = 'md',
  children, className, type = 'button', disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg border-2',
    'transition-all duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.97]',
    'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
