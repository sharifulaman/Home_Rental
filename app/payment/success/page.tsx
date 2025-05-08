"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/check-session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "complete") {
            setStatus("success")
          } else {
            setStatus("error")
          }
        })
        .catch(() => setStatus("error"))
    }
  }, [sessionId])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-6">
            {status === "success" ? "Payment Successful" : "Payment Error"}
          </h1>
          <p className="mb-6">
            {status === "success"
              ? "Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you."
              : "There was an error processing your payment. Please try again or contact support."}
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

