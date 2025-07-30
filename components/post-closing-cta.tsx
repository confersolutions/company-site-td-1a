"use client"
import { Shield, AlertTriangle, TrendingUp } from "lucide-react"
import { useSendEmail } from "@/hooks/use-send-email"
import { useState } from "react"

export default function PostClosingCTA() {
  const [ctaSubmitted, setCtaSubmitted] = useState(false)
  const [ctaLoading, setCtaLoading] = useState(false)
  const [ctaError, setCtaError] = useState<string | null>(null)
  const { sendEmail } = useSendEmail()

  async function handleCtaSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCtaLoading(true)
    setCtaError(null)
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || ""
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
    const message = `Request for Post-Closing Compliance Demo\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
    const subject = "Post-Closing Compliance Demo Request"
    const success = await sendEmail(name, email, message, subject, "consultation")
    setCtaLoading(false)
    if (success) {
      setCtaSubmitted(true)
    } else {
      setCtaError("There was a problem sending your request. Please try again.")
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fintech-600 to-fintech-800 text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bulletproof Your Post-Closing Compliance?</h2>
          <p className="text-xl text-white/80 mb-8">
            See how our AI agent ensures perfect compliance and audit readiness for every loan file.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            {!ctaSubmitted ? (
              <form className="space-y-4" onSubmit={handleCtaSubmit}>
                <input
                  name="name"
                  placeholder="Your Name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded px-4 py-2 w-full"
                  required
                />
                <input
                  name="email"
                  placeholder="Company Email"
                  type="email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded px-4 py-2 w-full"
                  required
                />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded px-4 py-2 w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-fintech-700 hover:bg-gray-100 font-semibold rounded px-4 py-2 text-lg disabled:opacity-60"
                  disabled={ctaLoading}
                >
                  {ctaLoading ? "Submitting..." : "Schedule Compliance Demo"}
                </button>
                {ctaError && <div className="text-red-200 text-sm mt-2">{ctaError}</div>}
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-white/80">We'll contact you within 24 hours to schedule your compliance demo.</p>
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-fintech-500 rounded-full flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Automated Audit Readiness</h4>
                <p className="text-white/80">Instantly generate audit-ready documentation for every loan.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-fintech-500 rounded-full flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Regulatory Risk Reduction</h4>
                <p className="text-white/80">Proactively identify and resolve compliance issues.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-fintech-500 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Seamless Investor Delivery</h4>
                <p className="text-white/80">Ensure every file meets investor and agency standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
