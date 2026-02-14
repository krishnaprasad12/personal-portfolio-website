"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { BLOG_POSTS } from "@/lib/constants"

export function BlogsContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBlogs = useMemo(() => {
    if (!searchQuery) return BLOG_POSTS

    const query = searchQuery.toLowerCase()
    return BLOG_POSTS.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query),
    )
  }, [searchQuery])

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">No blogs found matching your search.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      )}
    </div>
  )
}
