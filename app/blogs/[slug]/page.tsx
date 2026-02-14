import { notFound } from "next/navigation"
import { BlogContent } from "@/components/blog-content"
import { ShareButtons } from "@/components/share-buttons"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"
import { BLOG_CONTENT } from "@/lib/constants"

type BlogParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const { slug } = await params
  const blog = BLOG_CONTENT[slug]

  if (!blog) {
    return {
      title: "Blog Not Found",
    }
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.publishedAt,
      images: [blog.image],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(BLOG_CONTENT).map((slug) => ({
    slug,
  }))
}

export default async function BlogPage({ params }: BlogParams) {
  const { slug } = await params
  const blog = BLOG_CONTENT[slug]

  if (!blog) {
    notFound()
  }

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen py-16">
      <article className="container max-w-4xl px-4 md:px-8">
        <header className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">{blog.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={blog.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">{blog.title}</h1>
          <p className="text-pretty text-xl text-muted-foreground">{blog.description}</p>

          <ShareButtons title={blog.title} />
        </header>

        <div className="mb-10 aspect-video w-full overflow-hidden rounded-lg">
          <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="h-full w-full object-cover" />
        </div>

        <BlogContent content={blog.content} />
      </article>
    </main>
  )
}
