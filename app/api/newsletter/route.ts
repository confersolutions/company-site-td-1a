import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    const emailData = {
      from: "yatin@confersolutions.ai",
      to: "info@confersolutions.ai",
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toISOString()}</p>
      `,
    }

    console.log("Newsletter subscription received:", emailData)

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription successful!",
    })
  } catch (error) {
    console.error("Error processing newsletter signup:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
