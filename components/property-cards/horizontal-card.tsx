import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Calendar, MapPin, ArrowRight } from "lucide-react"

interface HorizontalCardProps {
  id: string
  type: string
  title: string
  beds: number
  baths: number
  availableFrom: string
  rent: number
  location: string
  imageUrl: string
  description: string
}

export function HorizontalCard({
  id,
  type,
  title,
  beds,
  baths,
  availableFrom,
  rent,
  location,
  imageUrl,
  description,
}: HorizontalCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[300px] relative">
          <div className="aspect-video md:aspect-square relative">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <Badge variant="secondary" className="absolute top-2 left-2 bg-white/90 hover:bg-white/90">
            {type}
          </Badge>
        </div>
        <CardContent className="flex-1 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span>{beds} Beds</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span>{baths} Baths</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>From {availableFrom}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="text-2xl font-bold">৳{rent.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href={`/property/${id}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

