"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "@/components/consultation-modal"
import { ArrowRight } from "lucide-react"

interface ConsultationButtonProps {
  children?: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  source?: string
}

export function ConsultationButton({
  children = "Get a Free AI Consultation",
  variant = "default",
  size = "default",
  className = "",
  source = "consultation",
}: ConsultationButtonProps) {
  // Auto-detect demo buttons based on children text
  const autoSource = children?.toString().toLowerCase().includes("demo") ? "demo" : source
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsModalOpen(true)}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} source={autoSource} />
    </>
  )
}
