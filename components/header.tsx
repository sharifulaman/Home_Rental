"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, Home, Bell, List, Settings, BookmarkIcon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchDialog } from "@/components/search-dialog"
import { useAuth } from "@/contexts/auth-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">VARA</span>
            <span className="text-xl font-bold">HOBE</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Property
            </Button>
            <Button size="sm" className="hidden md:flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
              Order Now
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Bell className="h-4 w-4" />
            </Button>
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 shadow-md rounded-lg border bg-white">
                  <div className="p-3 border-b">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500">{user.phone}</p>
                  </div>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer mt-2">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" className="flex items-center gap-2" asChild>
                <Link href="/login">Login/Register</Link>
              </Button>
            )}

          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-t border-b py-2">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="flex items-center gap-2 text-sm font-medium text-blue-500">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link href="/property" className="flex items-center gap-2 text-sm font-medium">
                <List className="h-4 w-4" />
                <span>Property list</span>
              </Link>
              <Link href="/setting" className="flex items-center gap-2 text-sm font-medium">
                <Settings className="h-4 w-4" />
                <span>Setting</span>
              </Link>
              <Link href="/saved" className="flex items-center gap-2 text-sm font-medium">
                <BookmarkIcon className="h-4 w-4" />
                <span>Save</span>
              </Link>
            </nav>
            <div className="relative w-64">
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-8"
                onClick={() => setSearchOpen(true)}
                readOnly
              />
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-4 py-3">
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/category/family">Family</Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/category/bachelor">Bachelor</Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/category/sublet">Sublet</Link>
          </Button>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}

