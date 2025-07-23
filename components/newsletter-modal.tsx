"use client"

import type React from "react"

import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useSendEmail } from "@/hooks/use-send-email"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "",
  })

  const { sendEmail, isLoading: emailLoading, error: emailError } = useSendEmail()

  // Close on ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const success = await sendEmail(
        formData.name,
        formData.email,
        `Newsletter signup request. Interests: ${formData.interests || "General updates"}`,
        "Newsletter Signup",
        "newsletter",
      )
      if (success) {
        setIsSubmitted(true)
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
        setFormData({ name: "", email: "", interests: "" })
        setTimeout(() => {
          setIsSubmitted(false)
          onClose()
        }, 3000)
      }
    } catch (err) {
      console.error("Newsletter signup error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg bg-background shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <h3 className="text-xl font-semibold">{isSubmitted ? "Thank you!" : "Subscribe to our newsletter"}</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSubmitted ? (
            <p className="text-center text-sm text-muted-foreground">
              You’re on the list – watch your inbox for updates!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="interests" className="mb-1 block text-sm font-medium">
                  Interests (optional)
                </label>
                <Textarea id="interests" name="interests" rows={3} value={formData.interests} onChange={handleChange} />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting || emailLoading}>
                {isSubmitting || emailLoading ? "Submitting…" : "Subscribe"}
              </Button>
              {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export { NewsletterModal };
