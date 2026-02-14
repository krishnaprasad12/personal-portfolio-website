"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ExternalLink } from "lucide-react"
import { useState } from "react"
import { EXPERIENCES } from "@/lib/constants"

export function ExperienceSection() {
  return (
    <section className="border-b border-border py-16">
      <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  company,
  logo,
  role,
  status,
  website,
  technologies,
  achievements,
}: {
  company: string
  logo: string
  role: string
  status: string
  website: string
  technologies: { name: string; icon: string }[]
  achievements: string[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <Avatar className="h-12 w-12">
            <AvatarImage src={logo || "/placeholder.svg"} alt={company} />
            <AvatarFallback>{company[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{company}</h3>
                  <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
                <p className="text-muted-foreground">{role}</p>
              </div>
              <Badge variant={status === "Working" ? "default" : "secondary"}>{status}</Badge>
            </div>

            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 hover:bg-transparent">
                <span className="text-sm text-muted-foreground">{isOpen ? "Hide details" : "Show details"}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="gap-1.5">
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </div>
        </div>
      </div>
    </Collapsible>
  )
}
