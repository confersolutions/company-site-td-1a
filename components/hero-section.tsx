"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ConsultationButton } from "@/components/consultation-button"

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = clientX / innerWidth - 0.5
      const moveY = clientY / innerHeight - 0.5

      backgroundRef.current.style.transform = `translateX(${moveX * 15}px) translateY(${moveY * 15}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800 min-h-[90vh] flex items-center">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,128,255,0.4)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.4)_0%,rgba(0,0,0,0)_60%)]"></div>
      </div>

      {/* Floating elements */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-500/10 blur-3xl"></div>
        <div className="absolute top-[60%] right-[15%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                AI is your competitive edge—unlock automation, intelligence, and growth today.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                🚀 AI Powered Solutions, Built for Impact.
              </h1>
              <p className="text-xl text-white/80 max-w-lg">
                AI Powered Solutions are the key to unlocking automation, intelligence, and business growth. At Confer
                Inc., we help businesses design, develop, and deploy AI solutions that enhance efficiency, automate
                processes, and drive measurable impact.
              </p>
              <p className="text-xl text-white/80 max-w-lg">
                Turn AI into your competitive advantage—start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="text-base bg-white text-fintech-900 hover:bg-white/90">
                  Get a Free AI Consultation
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base"
                >
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Financial technology dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fintech-950/80 to-transparent"></div>

              {/* Floating UI elements */}
              <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 transform rotate-6 animate-float">
                <div className="w-full h-2 bg-fintech-500 rounded-full mb-3"></div>
                <div className="w-3/4 h-2 bg-fintech-400/70 rounded-full mb-3"></div>
                <div className="w-1/2 h-2 bg-fintech-300/50 rounded-full"></div>
                <div className="absolute bottom-3 right-3">
                  <div className="w-8 h-8 rounded-full bg-fintech-600 flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-[15%] left-[5%] w-48 bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-3 transform -rotate-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <div>
                    <div className="h-2 w-20 bg-fintech-300/70 rounded-full"></div>
                    <div className="h-2 w-12 bg-fintech-300/50 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="h-10 w-full bg-green-500/20 rounded-md flex items-center justify-center">
                  <span className="text-green-600 text-xs font-medium">+24.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-background"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
