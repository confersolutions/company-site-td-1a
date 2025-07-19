"use client"

import { useState } from "react"

type EmailKind = "consultation" | "newsletter" | "contact"

interface UseSendEmailReturn {
  sendEmail: (name: string, email: string, message: string, subject?: string, type?: EmailKind) => Promise<boolean>
  isLoading: boolean
  error: string | null
}

/**
 * Centralised hook for POSTing to /api/send-email.
 * Always uses the same relative URL so it works in Vercel previews
 * and production without extra configuration.
 */
export function useSendEmail(): UseSendEmailReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (
    name: string,
    email: string,
    message: string,
    subject?: string,
    type: EmailKind = "contact",
  ): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, subject, type }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send email")
      }

      return true
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Unknown error"
      setError(errMsg)
      console.error("Email sending error:", err)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return { sendEmail, isLoading, error }
}
