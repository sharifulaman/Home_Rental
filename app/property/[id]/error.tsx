"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <Button onClick={reset} className="bg-blue-500 hover:bg-blue-600">
          Try again
        </Button>
      </div>
    </div>
  )
}

