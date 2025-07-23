import type React from "react"
import { ConsultationButton } from "@/components/consultation-button"

import { cn } from "@/lib/utils"

interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {}

export function CTASection({ className, ...props }: CTASectionProps) {
  return (
    <section className={cn("py-24 bg-gradient-to-r from-primary/10 to-secondary/10", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to get started?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground mb-8">
          Talk to our sales team and see how we can help you.
        </p>
        <ConsultationButton size="lg" className="px-8 py-3">
          Get a Demo
        </ConsultationButton>
      </div>
    </section>
  )
}

export default CTASection;
