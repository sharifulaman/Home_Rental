"use client"

import { Mail, Eye, EyeOff, User } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const data = { name, email, phone, password }

    try {
      const response = await fetch("http://localhost:3002/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        const token = responseData.toke
        router.push("/register")
        alert("Registration Done")
      } else {
        alert("Registration failed")
      }
    } catch (error) {
      console.error("Error registering:", error)
      alert("An error occurred while registering")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm">Name :</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Email :</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Phone Number :</label>
              <div className="flex gap-2">
                <Input type="text" defaultValue="+880" className="w-20" readOnly />
                <Input
                  type="tel"
                  placeholder="1812-345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Password :</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <a href="/login" className="text-sm text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
