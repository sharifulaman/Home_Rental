"use client"

import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface LockedContentProps {
  requiredCredits: number
}

export function LockedContent({ requiredCredits }: LockedContentProps) {
  return (
    <Card className="bg-muted/50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span className="text-sm">Locked information</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm">
                Buy Package
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Purchase Credits</DialogTitle>
                <DialogDescription>
                  You need {requiredCredits} credits to unlock this information. You can purchase credits using
                  Card/Mobile banking/Net banking.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Available Packages</h3>
                  <div className="grid gap-2">
                    <Button className="w-full justify-between" variant="outline">
                      <span>10 Credits</span>
                      <span>৳100</span>
                    </Button>
                    <Button className="w-full justify-between" variant="outline">
                      <span>50 Credits</span>
                      <span>৳450</span>
                    </Button>
                    <Button className="w-full justify-between" variant="outline">
                      <span>100 Credits</span>
                      <span>৳800</span>
                    </Button>
                  </div>
                </div>
                <Button className="w-full">Proceed to Payment</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

