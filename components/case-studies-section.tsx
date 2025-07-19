"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useCallback } from "react"

const NewsletterModal = dynamic(() => import("@/components/newsletter-modal").then((m) => m.default), { ssr: false })

export function CaseStudiesSection() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  const handleNewsletterOpen = useCallback(() => {
    setIsNewsletterOpen(true)
  }, [])

  const handleNewsletterClose = useCallback(() => {
    setIsNewsletterOpen(false)
  }, [])

  const metrics = [
    { value: "85%", label: "Reduction in processing time" },
    { value: "60%", label: "Decrease in operational costs" },
    { value: "93%", label: "Customer satisfaction rate" },
    { value: "3.5x", label: "Return on investment" },
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our clients achieve remarkable results with Confer's AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
              <p className="text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business team analyzing data"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-fintech-900/70 via-fintech-800/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center p-8">
                <div className="max-w-md">
                  <h3 className="text-2xl font-semibold text-white mb-2">Case Studies Coming Soon</h3>
                  <p className="text-white/80">
                    Real-world examples of how our AI solutions have transformed financial operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold mb-4">Transforming Financial Services</h3>
              <p className="text-muted-foreground mb-6">
                We're preparing detailed case studies showcasing how our clients have transformed their operations with
                Confer's AI solutions. From mortgage processing to fraud detection, our technology is making a real
                difference.
              </p>
              <p className="text-muted-foreground mb-8">
                Sign up to be notified when we publish new case studies and success stories from our clients.
              </p>
              <Button onClick={handleNewsletterOpen}>
                Get Notified
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <NewsletterModal isOpen={isNewsletterOpen} onClose={handleNewsletterClose} />
    </section>
  )
}
