import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, MapPin } from "lucide-react"

interface CompactCardProps {
  id: string
  type: string
  beds: number
  baths: number
  rent: number
  location: string
  imageUrl: string
}

export function CompactCard({ id, type, beds, baths, rent, location, imageUrl }: CompactCardProps) {
  return (
    <Link href={`/property/${id}`}>
      <Card className="overflow-hidden group cursor-pointer h-full">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={type}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge variant="secondary" className="absolute top-2 left-2 bg-white/90 hover:bg-white/90">
            {type}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm mb-3">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span>{beds}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{baths}</span>
            </div>
          </div>
          <div className="font-semibold">৳{rent.toLocaleString()}/mo</div>
        </CardContent>
      </Card>
    </Link>
  )
}

