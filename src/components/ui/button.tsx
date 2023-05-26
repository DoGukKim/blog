import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { type VariantProps, cva } from 'class-variance-authority'
import { type Merge } from '@/types/merge'
import { cn } from '@/utils/cn'

const buttonVariants = cva('flex px-6', {
  variants: {
    intent: {
      primary: 'text-sky-900',
      secondary: 'text-sky-600',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})

type Props = Merge<
  ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants>
>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, intent, ...props }, forwardedRef) => {
    return (
      <button
        className={cn(buttonVariants({ intent, className }))}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
