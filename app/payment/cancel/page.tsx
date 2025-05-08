import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CancelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Payment Cancelled</h1>
          <p className="mb-6">
            Your payment has been cancelled. If you have any questions or concerns, please contact our support team.
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

