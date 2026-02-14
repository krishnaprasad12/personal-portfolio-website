import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

type BlogCardProps = {
  slug: string
  title: string
  description: string
  image: string
  publishedAt: string
  category: string
}

export function BlogCard({ slug, title, description, image, publishedAt, category }: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blogs/${slug}`}>
      <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <img
              src={image || "/placeholder.svg?height=200&width=400"}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="secondary">{category}</Badge>
          </div>
          <h3 className="mb-2 text-balance text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-pretty text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={publishedAt}>{formattedDate}</time>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
