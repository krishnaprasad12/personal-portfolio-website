"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { PERSONAL_INFO } from "@/lib/constants"

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PERSONAL_INFO.aboutStatements.length)
        setFade(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full">
      {/* Banner/Wallpaper */}
      <div className="h-48 w-full bg-gradient-to-br from-muted/50 via-muted/30 to-background md:h-64" />

      {/* Profile Content */}
      <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
        <div className="relative -mt-16 flex flex-col items-start gap-4 md:-mt-20 md:flex-row md:items-end md:gap-6">
          <Avatar className="h-32 w-32 border-4 border-background shadow-xl md:h-40 md:w-40">
            <AvatarImage src={PERSONAL_INFO.profileImage || "/placeholder.svg"} alt="Profile" />
            <AvatarFallback className="text-3xl">{PERSONAL_INFO.initials}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2 pb-2">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">{PERSONAL_INFO.name}</h1>
            <p
              className={`text-pretty text-lg text-muted-foreground transition-opacity duration-300 md:text-xl ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {PERSONAL_INFO.aboutStatements[currentIndex]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
