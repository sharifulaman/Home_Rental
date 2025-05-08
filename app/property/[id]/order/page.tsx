"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { getStripe } from "@/lib/stripe-client"

export default function OrderPage({ params }: { params: { id: string } }) {
  const [accepted, setAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId: params.id,
          rentAmount: 18000, // This should be dynamically set based on the actual property rent
        }),
      })

      const { sessionId } = await response.json()
      const stripe = await getStripe()
      const { error } = await stripe!.redirectToCheckout({ sessionId })

      if (error) {
        console.error("Stripe checkout error:", error)
      }
    } catch (error) {
      console.error("Payment error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Property Details</h1>

          <div className="space-y-6">
            <div className="space-y-4">
              <p>2 flats of the same accommodation on 3rd floor will be rented from 1st January. ( Only for family)</p>
              <p className="font-medium">** Bachelors are not allowed **</p>

              <h2 className="font-medium">Features:</h2>
              <p>3 bedrooms, 3 bathrooms, 2 balconies, kitchen, drawing- dining room</p>

              <h2 className="font-medium">Utilities:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Gas- cylinder</li>
                <li>Current - prepaid card</li>
                <li>Garage bill- 500 (if you have a bike)</li>
                <li>Garbage bill - 100</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-medium mb-2">Order cost: 18000tk</h2>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm">
                  I accept terms and conditions
                </label>
              </div>
            </div>

            <Button
              className="w-full bg-blue-500 hover:bg-blue-600"
              disabled={!accepted || isLoading}
              onClick={handlePayment}
            >
              {isLoading ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

