import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'glass-light placeholder:text-muted-foreground aria-invalid:border-destructive aria-invalid:glow-secondary flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-all outline-none focus:glass-strong focus:glow-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
