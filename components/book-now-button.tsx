"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

interface BookNowButtonProps {
  propertyId: string
}

export default function BookNowButton({ propertyId }: BookNowButtonProps) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const handleBookNow = () => {
    if (!isAuthenticated) {
      router.push(`/login?redirectTo=/property/${propertyId}/order`)
    } else {
      router.push(`/property/${propertyId}/order`)
    }
  }

  return (
    <Button onClick={handleBookNow} className="bg-blue-500 hover:bg-blue-600">
      Book Now
    </Button>
  )
}

