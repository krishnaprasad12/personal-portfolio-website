import { BlogsContent } from "@/components/blogs-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Portfolio",
  description: "Read my latest thoughts on web development, design, and technology",
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container px-4 md:px-8">
        <div className="mb-8 space-y-3">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on web development, design, and technology
          </p>
        </div>
        <BlogsContent />
      </div>
    </main>
  )
}
