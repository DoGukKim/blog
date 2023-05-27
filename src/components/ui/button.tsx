import { type ButtonHTMLAttributes, forwardRef } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <button ref={forwardedRef} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
