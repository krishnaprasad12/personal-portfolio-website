"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"

export function ShareButtons({ title }: { title: string }) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(title)
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      <Button variant="outline" size="icon" onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnTwitter} aria-label="Share on Twitter">
        <Twitter className="h-4 w-4" />
      </Button>
    </div>
  )
}
