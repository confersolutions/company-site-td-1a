import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend only if API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set")
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const emailData = {
      from: "yatin@confersolutions.ai",
      to: "info@confersolutions.ai",
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> Blog Newsletter Signup</p>
      `,
    }

    console.log("Newsletter subscription received:", emailData)

    // Send email using Resend
    const resend = getResend()
    const { data, error } = await resend.emails.send(emailData)

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("Newsletter subscription email sent successfully:", data)

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription successful!",
    })
  } catch (error) {
    console.error("Error processing newsletter signup:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
