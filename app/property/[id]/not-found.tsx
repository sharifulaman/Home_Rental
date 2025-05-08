import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <h2 className="text-2xl font-semibold mb-4">Property Not Found</h2>
        <p className="text-muted-foreground mb-4">Could not find the requested property.</p>
        <Button asChild className="bg-blue-500 hover:bg-blue-600">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

