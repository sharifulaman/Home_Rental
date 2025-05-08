"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [propertyId, setPropertyId] = useState("")
  const [category, setCategory] = useState("")
  const [division, setDivision] = useState("")
  const [district, setDistrict] = useState("")
  const [area, setArea] = useState("")

  const handleSearch = () => {
    // Implement search functionality
    console.log({ propertyId, category, division, district, area })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Property search</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Input placeholder="Property ID" value={propertyId} onChange={(e) => setPropertyId(e.target.value)} />
          </div>

          <div>
            <p className="text-sm text-center text-muted-foreground mb-2">OR</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <div className="flex flex-wrap gap-2">
                  {["Family", "Bachelor",  "Sublet"].map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Division</label>
                  <Select value={division} onValueChange={setDivision}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select division" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                      <SelectItem value="chittagong">Chittagong</SelectItem>
                      <SelectItem value="rajshahi">Rajshahi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">District</label>
                  <Select value={district} onValueChange={setDistrict}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select division first" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                      <SelectItem value="gazipur">Gazipur</SelectItem>
                      <SelectItem value="narayanganj">Narayanganj</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Area / Thana</label>
                  <Select value={area} onValueChange={setArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select division first" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mirpur">Mirpur</SelectItem>
                      <SelectItem value="uttara">Uttara</SelectItem>
                      <SelectItem value="gulshan">Gulshan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

