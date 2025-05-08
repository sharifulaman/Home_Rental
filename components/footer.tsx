import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Button variant="outline" className="w-32">English</Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>House # 01, Road # 2/E, Block # J, Baridhara,</p>
              <p>Dhaka-1212, Bangladesh.</p>
              <p>+88 01622889666 (8am - 5pm)</p>
              <p>+88 01622888555</p>
              <p>info@gmail.com</p>
              <p>support@gmail.com</p>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Weekly newsletter</h3>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/terms" className="hover:underline">Terms of Use</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/refund" className="hover:underline">Refund Policy</Link>
        </div>
      </div>
    </footer>
  )
}

