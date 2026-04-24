'use client'

import { Button } from '@/components/ui/Button'
import type { ButtonProps } from '@/components/ui/Button'
import { useContactModal } from './ContactModalProvider'

type Props = {
  children: React.ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
  /** t.ex. stäng mobilmeny innan modal öppnas */
  onBeforeOpen?: () => void
}

export function OpenContactButton({
  children, variant = 'primary', size = 'md', className, onBeforeOpen,
}: Props) {
  const { open } = useContactModal()
  return (
    <Button
      type="button"
      onClick={() => {
        onBeforeOpen?.()
        open()
      }}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  )
}
