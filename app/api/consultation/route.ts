import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    // Log the form submission (in a real app, you'd save to database or send email)
    console.log("Consultation request received:", {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your interest! We will contact you soon.",
    })
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 })
  }
}
