"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Assessment",
      description: "We analyze your current processes and identify opportunities for AI-powered optimization.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      title: "Custom Solution Development",
      description: "Our team develops tailored AI solutions that integrate seamlessly with your existing systems.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      title: "Implementation & Continuous Improvement",
      description: "We deploy, monitor, and continuously improve your AI solutions to maximize ROI.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".step-item")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures successful implementation and adoption of AI solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden lg:block"></div>

            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item opacity-0 translate-y-8 transition-all duration-700 ease-out ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                        <span className="text-lg font-bold text-primary">{step.number}</span>
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <div className="relative h-64 w-full">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-fintech-900/70 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-lg text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <CheckCircle2 className="h-5 w-5" />
              <span>Ready to transform your business with AI?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
