import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
})

export async function POST(req: Request) {
  const { sessionId } = await req.json()

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID is required" }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === "paid") {
      // Payment was successful
      // Here you can update your database or perform any other necessary actions
      return NextResponse.json({ success: true, session })
    } else {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 })
    }
  } catch (err) {
    console.error("Error verifying payment:", err)
    return NextResponse.json({ error: "Error verifying payment" }, { status: 500 })
  }
}

