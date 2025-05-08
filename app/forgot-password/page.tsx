"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Forget Password</h1>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Email :</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input type="email" placeholder="Email" className="pl-10" />
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Send Code
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">Remember your password? </span>
            <Link href="/login" className="text-sm text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

