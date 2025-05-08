import Link from "next/link"
import { ChevronRight } from "lucide-react"
import PropertyCard from "@/components/property-card"

export default function Home() {
  const categories = ["Family", "Bachelor", "Sublet"]

  const properties: { [key: string]: { id: string; type: string; beds: number; baths: number; availableFrom: string; rent: number; location: string; imageUrl: string; }[] } = {
    Family: [
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
        type: "Family House Rent",
        beds: 3,
        baths: 3,
        availableFrom: "January",
        rent: 22000,
        location: "Modhubazar, Dhanmondi",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s5-PxYDMbk6n6xncCOJIGadHv6qWjtJvJ.webp",
      },
      {
        id: "3",
        type: "Family House Rent",
        beds: 4,
        baths: 3,
        availableFrom: "January",
        rent: 30000,
        location: "Road-9, Sector-1, Uttara, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s3-Zb8byTobFlZ7yZaOz50dqgxGe3v1f1.webp",
      },
      {
        id: "4",
        type: "Family House Rent",
        beds: 2,
        baths: 2,
        availableFrom: "January",
        rent: 18000,
        location: "Uttara, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B5-UFf0YsuUJ27FkPFmeaUCfwJbQUTAft.webp",
      },
    ],
    Bachelor: [
      {
        id: "5",
        type: "Bachelor Seat Rent",
        beds: 1,
        baths: 1,
        availableFrom: "January",
        rent: 5000,
        location: "Uttara, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B1-XrDC5K3bU0xC6zgKPJbHBF4fW6YPVx.webp",
      },
      {
        id: "6",
        type: "Bachelor Seat Rent",
        beds: 1,
        baths: 1,
        availableFrom: "January",
        rent: 5800,
        location: "Mirpur, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B3-jKAjoULeUELVWT9LGoboWREDZ3EegJ.webp",
      },
      {
        id: "7",
        type: "Bachelor Seat Rent",
        beds: 1,
        baths: 1,
        availableFrom: "January",
        rent: 6000,
        location: "Banani, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B6-98N4KPSEFJtNGbhTVeQGQRqLfZ521c.webp",
      },
      {
        id: "8",
        type: "Bachelor Seat Rent",
        beds: 1,
        baths: 1,
        availableFrom: "January",
        rent: 5500,
        location: "Mirpur, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2-eCzzj2IrehK4XnV97WUOb3OVE8uF1D.webp",
      },
    ],
    Sublet: [
      {
        id: "9",
        type: "Sublet Room Rent",
        beds: 1,
        baths: 1,
        availableFrom: "January",
        rent: 6500,
        location: "Mirpur, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B4-ol8rTTvJQ4FxwLLyENFmHTYD2cOe2P.webp",
      },
      {
        id: "10",
        type: "Sublet Room Rent",
        beds: 1,
        baths: 1,
        availableFrom: "February",
        rent: 7500,
        location: "Uttara, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s4-CLWWRVMvoQkUh8xHGev1XLx5yo7MnM.webp",
      },
      {
        id: "11",
        type: "Sublet Room Rent",
        beds: 1,
        baths: 1,
        availableFrom: "January",
        rent: 8000,
        location: "Kuratoli, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s5-PxYDMbk6n6xncCOJIGadHv6qWjtJvJ.webp",
      },
      {
        id: "12",
        type: "Sublet Room Rent",
        beds: 1,
        baths: 1,
        availableFrom: "February",
        rent: 8500,
        location: "Khilkhet, Dhaka",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s3-Zb8byTobFlZ7yZaOz50dqgxGe3v1f1.webp",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">Recent published property</h2>
      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">{category}</h2>
              <Link
                href={`/category/${category.toLowerCase()}`}
                className="flex items-center text-sm text-blue-500 hover:underline"
              >
                See more property
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties[category].map((property, index) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

