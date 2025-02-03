import { cn } from "@/lib/utils"
import type React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className="w-full">
      <div className={cn("mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8", className)} {...props}>
        {children}
      </div>
    </div>
  )
}

