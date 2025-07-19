"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import confetti from "canvas-confetti"
import { useSendEmail } from "@/hooks/use-send-email"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  buttonText?: string
}

export function ConsultationModal({
  isOpen,
  onClose,
  title = "Get a Free AI Consultation",
  buttonText = "Schedule Consultation",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const { sendEmail, isLoading: emailLoading, error: emailError } = useSendEmail()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const message = formData.message || `Consultation request fromm ${formData.firstName} ${formData.lastName}`

      const success = await sendEmail(
        `${formData.firstName} ${formData.lastName}`,
        formData.email,
        message,
        "AI Consultation Request",
        "consultation",
      )

      if (success) {
        setIsSubmitted(true)
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })

        // Close modal after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          onClose()
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting consultation request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4 overflow-y-auto">
      <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto my-8">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {isSubmitted ? (
          <div className="p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your consultation request has been submitted successfully. We'll get back to you soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Tell us about your AI needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting || emailLoading}>
              {isSubmitting || emailLoading ? "Submitting..." : buttonText}
            </Button>
            {emailError && <div className="text-red-600 text-sm mt-2">{emailError}</div>}
          </form>
        )}
      </div>
    </div>
  )
}
