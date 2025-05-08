import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PropertyCardProps {
  id: string
  type: string
  beds: number
  baths: number
  availableFrom: string
  rent: number
  location: string
  imageUrl: string
}

export default function PropertyCard({
  id,
  type,
  beds,
  baths,
  availableFrom,
  rent,
  location,
  imageUrl
}: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`}>
      <Card className="overflow-hidden group cursor-pointer">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={type}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-base">{type}</h3>
          <div className="mt-2 space-y-1 text-sm">
            <div className="text-gray-600">
              Bed: {beds}, Bath: {baths}
            </div>
            <div className="text-gray-600">To-let from: {availableFrom}</div>
            <div className="font-medium">Rent: {rent} BDT</div>
            <div className="text-gray-600">{location}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

