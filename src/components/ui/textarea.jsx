import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full bg-surface-container-highest border-none p-4 text-on-background focus:ring-0 focus:border-b-2 focus:border-primary transition-all border-b-2 border-transparent outline-none resize-none font-body",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
