import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import PropertyCard from "@/components/property-card"
import { Button } from "@/components/ui/button"

interface CategoryPageProps {
  params: {
    type: string
  }
}

const areaProperties = {
  Mirpur: [
    {
      id: "1",
      type: "Family House Rent",
      beds: 3,
      baths: 2,
      availableFrom: "January",
      rent: 17000,
      location: "Mirpur, Dhaka",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s4-CLWWRVMvoQkUh8xHGev1XLx5yo7MnM.webp",
    },
    {
      id: "2",
      type: "Bachelor Seat Rent",
      beds: 1,
      baths: 1,
      availableFrom: "January",
      rent: 5800,
      location: "Mirpur, Dhaka",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B3-jKAjoULeUELVWT9LGoboWREDZ3EegJ.webp",
    },
  ],
  Uttara: [
    {
      id: "3",
      type: "Family House Rent",
      beds: 4,
      baths: 3,
      availableFrom: "January",
      rent: 30000,
      location: "Uttara, Dhaka",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s3-Zb8byTobFlZ7yZaOz50dqgxGe3v1f1.webp",
    },
    {
      id: "4",
      type: "Bachelor Seat Rent",
      beds: 1,
      baths: 1,
      availableFrom: "January",
      rent: 5000,
      location: "Uttara, Dhaka",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B1-XrDC5K3bU0xC6zgKPJbHBF4fW6YPVx.webp",
    },
  ],
  Dhanmondi: [
    {
      id: "5",
      type: "Family House Rent",
      beds: 3,
      baths: 3,
      availableFrom: "January",
      rent: 22000,
      location: "Modhubazar, Dhanmondi",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s5-PxYDMbk6n6xncCOJIGadHv6qWjtJvJ.webp",
    },
  ],
  Gulshan: [
    {
      id: "6",
      type: "Sublet Room Rent",
      beds: 1,
      baths: 1,
      availableFrom: "January",
      rent: 8000,
      location: "Gulshan, Dhaka",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B4-ol8rTTvJQ4FxwLLyENFmHTYD2cOe2P.webp",
    },
  ],
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryTitle = params.type.charAt(0).toUpperCase() + params.type.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">{categoryTitle} Properties</h1>
      </div>

      <div className="space-y-12">
        {Object.entries(areaProperties).map(([area, properties]) => (
          <section key={area}>
            <h2 className="text-xl font-medium mb-6">{area}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties
                .filter(property => 
                  params.type === 'family' ? property.type.includes('Family') :
                  params.type === 'bachelor' ? property.type.includes('Bachelor') :
                  params.type === 'sublet' ? property.type.includes('Sublet') : true
                )
                .map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
            </div>
            
          </section>
        ))}
      </div>
    </div>
  )
}

