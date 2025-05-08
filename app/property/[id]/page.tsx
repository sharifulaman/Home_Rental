import Image from "next/image"
import { MapPin } from "lucide-react"
import BookNowButton from "@/components/book-now-button"
import { LockedContent } from "@/components/locked-content"

interface PropertyDetails {
  id: string
  title: string
  images: string[]
  bedrooms: number
  bathrooms: number
  balconies: number
  toylets: number
  propertyId: string
  updatedAt: string
  availableFrom: string
  category: string
  propertyType: string
  location: {
    division: string
    district: string
    area: string
    subArea: string
  }
  summary: {
    features: string[]
    rent: number
    utilities: string[]
  }
  rent: number
}

const mockProperty: PropertyDetails = {
  id: "1",
  title: "3 Bedroom House To-let/ Rent from january for Family in Mirpur 12, Mirpur, Dhaka",
  images: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s4-CLWWRVMvoQkUh8xHGev1XLx5yo7MnM.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s5-PxYDMbk6n6xncCOJIGadHv6qWjtJvJ.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s3-Zb8byTobFlZ7yZaOz50dqgxGe3v1f1.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B5-UFf0YsuUJ27FkPFmeaUCfwJbQUTAft.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B1-XrDC5K3bU0xC6zgKPJbHBF4fW6YPVx.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B3-jKAjoULeUELVWT9LGoboWREDZ3EegJ.webp",
  ],
  bedrooms: 3,
  bathrooms: 3,
  balconies: 2,
  toylets: 2,
  propertyId: "00001",
  updatedAt: "12 Dec 2024",
  availableFrom: "January",
  category: "Family",
  propertyType: "House",
  location: {
    division: "Dhaka",
    district: "Dhaka",
    area: "Mirpur",
    subArea: "Mirpur 12",
  },
  summary: {
    features: [
      "3 bedrooms, 3 bathrooms, 2 balconies, kitchen, drawing- dining room.",
      "Gas- cylinder",
      "Current - prepaid card",
      "Garage bill- 500 (if you have a bike)",
      "Garbage bill - 100",
    ],
    rent: 17000,
    utilities: ["Gas-cylinder", "Current - prepaid card"],
  },
  rent: 17000,
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the property based on the id
  // For now, we'll just use the mock data
  const property = mockProperty

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">{property.title}</h1>

      {/* Image Gallery */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Image src="/placeholder.svg" alt="Image icon" width={24} height={24} />
          Image
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {property.images.map((image, index) => (
            <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Property image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Basic Information */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Basic information</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-lg">
          <div>Bedroom : {property.bedrooms}</div>
          <div>Bathroom : {property.bathrooms}</div>
          <div>Balcony : {property.balconies}</div>
          <div>Toylet : {property.toylets}</div>
        </div>
      </div>

      {/* Property Details */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-lg">
          <div>
            <div className="text-sm text-gray-600">PROPERTY ID</div>
            <div>{property.propertyId}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">UPDATED AT</div>
            <div>{property.updatedAt}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">AVAILABLE FROM</div>
            <div>{property.availableFrom}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">CATEGORY</div>
            <div>{property.category}</div>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6" />
          Location information
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-lg">
            <div>
              <div className="text-sm text-gray-600">DIVISION</div>
              <div>{property.location.division}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">DISTRICT</div>
              <div>{property.location.district}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">AREA/THANA</div>
              <div>{property.location.area}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">SUB AREA</div>
              <div>{property.location.subArea}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-gray-600">SHORT ADDRESS</div>
            <LockedContent requiredCredits={10} />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Summary</h2>
        <div className="p-4 border rounded-lg space-y-4">
          <div className="font-medium">To-Let 🏠</div>
          <div>2 flats of the same accommodation on 3rd floor will be rented from 1st January. ( Only for family)</div>
          <div>** Bachelors are not allowed **</div>
          <div>Features: {property.summary.features.join(" ")}</div>
          <div>Rent: {property.summary.rent}/-</div>
          <div className="space-y-1">
            {property.summary.utilities.map((utility, index) => (
              <div key={index}>{utility}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h2 className="text-lg font-medium mb-2">Price</h2>
          <div className="text-2xl font-bold">{property.rent} BDT</div>
          <div className="text-sm text-gray-600">Monthly</div>
        </div>
        <BookNowButton propertyId={property.id} />
      </div>
    </div>
  )
}

