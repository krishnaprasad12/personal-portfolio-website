"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter, Code2, FileText } from "lucide-react"
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants"

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  X: Twitter,
  GitHub: Github,
  LeetCode: Code2,
} as const

export function InfoPanel() {
  return (
    <section className="border-b border-border py-12">
      <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.name as keyof typeof SOCIAL_ICONS]
              return (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              )
            })}
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <FileText className="h-4 w-4" />
                  Resume / CV
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] max-w-4xl overflow-auto">
                <DialogHeader>
                  <DialogTitle>Resume / CV</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-[8.5/11] w-full rounded-lg border bg-muted" />
                  <Button className="w-full bg-transparent" variant="outline">
                    Download PDF
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get in Touch</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
