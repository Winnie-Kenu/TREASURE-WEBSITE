import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-headline font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary hover:bg-primary-dim active:scale-95",
        secondary:
          "border border-white/20 text-white hover:bg-white hover:text-black",
        ghost:
          "text-primary hover:bg-primary/10",
        cta:
          "bg-black text-white hover:bg-neutral-800",
      },
      size: {
        default: "px-8 py-3 text-xs",
        lg: "px-10 py-5 text-sm",
        xl: "px-16 py-8 text-xl font-black",
        sm: "px-6 py-2 text-[10px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
