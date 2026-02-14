"use client"

import { Music, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type YouTubeVideo = {
  title: string
  thumbnail: string
  channel: string
  videoId: string
  publishedAt: string
}

export function YouTubeSection() {
  const [video, setVideo] = useState<YouTubeVideo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((data) => {
        if (data.video) {
          setVideo(data.video)
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="border-b border-border py-12">
        <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Currently Listening</h2>
          <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
            <div className="h-20 w-20 animate-pulse rounded-md bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !video) {
    return (
      <section className="border-b border-border py-12">
        <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Currently Listening</h2>
          <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
              <img src="/abstract-music-waves.png" alt="Music" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-medium leading-tight">Lofi Hip Hop - Beats to Study/Relax</h3>
              <p className="text-sm text-muted-foreground">Lofi Girl</p>
              <div className="flex items-center gap-2">
                <Music className="h-3 w-3 animate-pulse text-primary" />
                <span className="text-xs text-muted-foreground">Now Playing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-border py-12">
      <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Currently Listening</h2>
        <div className="flex items-center gap-4 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
            <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium leading-tight line-clamp-2">{video.title}</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0" asChild>
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch on YouTube"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{video.channel}</p>
            <div className="flex items-center gap-2">
              <Music className="h-3 w-3 animate-pulse text-primary" />
              <span className="text-xs text-muted-foreground">Currently Listening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
