import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bed, Bath, Calendar, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedCardProps {
  id: string
  type: string
  title: string
  beds: number
  baths: number
  availableFrom: string
  rent: number
  location: string
  imageUrl: string
  featured?: boolean
}

export function FeaturedCard({
  id,
  type,
  title,
  beds,
  baths,
  availableFrom,
  rent,
  location,
  imageUrl,
  featured = false,
}: FeaturedCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 hover:bg-white/90">
            {type}
          </Badge>
          {featured && <Badge className="bg-yellow-500/90 hover:bg-yellow-500/90">Featured</Badge>}
        </div>
        <Button size="icon" variant="ghost" className="absolute top-4 right-4 h-8 w-8 bg-white/90 hover:bg-white/90">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
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
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">৳{rent.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">per month</div>
        </div>
        <Button asChild className="bg-blue-500 hover:bg-blue-600">
          <Link href={`/property/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

