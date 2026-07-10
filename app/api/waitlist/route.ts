import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, lang } = await request.json()

    // Server-side validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: lang === "en" ? "Invalid email address" : "Dirección de correo no válida" },
        { status: 400 }
      )
    }

    // Load Ruby API URL from environment variables, fallback to local dev default
    const rubyApiUrl = process.env.RUBY_API_URL || "http://localhost:3000/api/v1/waitlist"

    // Forward request to the Ruby API
    const response = await fetch(rubyApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, lang }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error("Ruby API error response:", errText)
      return NextResponse.json(
        { error: lang === "en" ? "Failed to save to database" : "No se pudo guardar en la base de datos" },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Proxy waitlist error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
