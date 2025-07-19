import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, subject, type } = await request.json()

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured")
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    let emailSubject = subject
    if (!emailSubject) {
      switch (type) {
        case "contact":
          emailSubject = "Website Inquiry"
          break
        case "consultation":
          emailSubject = "AI Consultation Request"
          break
        case "newsletter":
          emailSubject = "Newsletter Signup"
          break
        default:
          emailSubject = "Website Contact"
      }
    }

    await resend.emails.send({
      from: "yatin@confersolutions.ai",
      to: "info@confersolutions.ai",
      subject: emailSubject,
      html: `
        <h2>${emailSubject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    )
  }
}
