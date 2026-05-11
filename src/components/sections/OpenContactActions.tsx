'use client'

import { OpenContactButton } from '@/components/contact/OpenContactButton'

export function OpenContactActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <OpenContactButton className="w-full sm:w-auto min-w-[200px] justify-center" size="md">
        Öppna formuläret
      </OpenContactButton>
    </div>
  )
}
