// Personal Information
export const PERSONAL_INFO = {
  name: "Krishna Prasad",
  initials: "KP",
  email: "kparjun12@gmail.com",
  profileImage: "/professional-profile.png",
  avatarImage: "/abstract-profile.png",
  aboutStatements: [
    "Full-Stack Developer",
    "AI/ML Professional",
    "Data Engineering"
  ],
}

// Navigation Links
export const NAV_LINKS = [
  {
    label: "Blogs",
    href: "/blogs",
  },
]

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/krishnaprasad24/",
    ariaLabel: "LinkedIn",
  },
  {
    name: "X",
    url: "https://x.com/yash119229",
    ariaLabel: "X",
  },
  {
    name: "GitHub",
    url: "https://github.com/krishnaprasad12",
    ariaLabel: "GitHub",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/krishnaprasad24/",
    ariaLabel: "LeetCode",
  },
]

// Experience Data
export const EXPERIENCES = [
  {
    company: "Tiger Analytics",
    logo: "/ta-logo.png",
    role: "Machine Learning Engineer",
    status: "Working",
    website: "https://www.tigeranalytics.com/",
    technologies: [
      { name: "Python", icon: "🐍" },
      { name: "Pyspark", icon: "🔥" },
      { name: "Azure", icon: "☁️" },
      { name: "Databricks", icon: "🧱" },
      { name: "GitHub", icon: "🐙" },
      { name: "GitLab", icon: "🦊" },
      ],
      achievements: [
        "1CPL → 1Stream Data Migration – Migrating Marsgroup datasets from ABFSS storage to Delta tables with schema and logic redesign.",
        "Tigerml Package Upgrade – Expanded Python compatibility to versions 3.10–3.12, improving maintainability and developer flexibility.",
        "Single Customer View (SCV) Solution – Built a graph-based deduplication approach to unify customer identities across data sources.",
        "Single Customer View (SCV) Solution – Built a graph-based deduplication approach to unify customer identities across data sources.",
      ],
    },
    {
      company: "Busyness App",
      logo: "/busyness-app-logo.jpg",
      role: "Full-Stack Developer Developer",
      status: "Past",
      website: "https://busyness.app/",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "🌬️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "AWS", icon: "☁️" },
    ],
    achievements: [
      "Built customizable landing pages using the MERN stack for small-scale businesses.",
      "Implemented inline editing features for vendor admins with role-based authorization for secure access.",
      "Integrated AWS S3 storage for managing image files, storing public links in MongoDB for seamless retrieval and display."
    ],
  },
]

// Projects Data
export const PROJECTS = [
  {
    name: "E-Commerce Platform",
    icon: "/ecommerce-shopping.png",
    url: "https://example.com",
    status: "Done",
    technologies: [
      { name: "Next.js", icon: "▲" },
      { name: "Stripe", icon: "💳" },
      { name: "Prisma", icon: "⬡" },
    ],
    description: [
      "Built a full-featured e-commerce platform with payment processing",
      "Implemented real-time inventory management",
      "Integrated email notifications and order tracking",
    ],
  },
  {
    name: "Social Media Dashboard",
    icon: "/analytics-dashboard.png",
    url: "https://example.com",
    status: "Ongoing",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "D3.js", icon: "📊" },
      { name: "MongoDB", icon: "🍃" },
    ],
    description: [
      "Creating analytics dashboard with interactive visualizations",
      "Implementing data aggregation from multiple social platforms",
      "Building custom charting components for real-time data",
    ],
  },
  {
    name: "AI Content Generator",
    icon: "/ai-robot.png",
    url: "https://example.com",
    status: "Done",
    technologies: [
      { name: "Python", icon: "🐍" },
      { name: "OpenAI", icon: "🤖" },
      { name: "FastAPI", icon: "⚡" },
    ],
    description: [
      "Developed AI-powered content generation tool",
      "Integrated multiple language models for diverse outputs",
      "Built REST API with rate limiting and caching",
    ],
  },
]

// Blog Posts List
export const BLOG_POSTS = [
  {
    slug: "building-modern-web-apps",
    title: "Building Modern Web Applications with Next.js 15",
    description: "Learn how to leverage the latest features in Next.js 15 to build fast, scalable web applications.",
    image: "/blog-nextjs.jpg",
    publishedAt: "2024-12-01",
    category: "Web Development",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    description: "Discover advanced techniques and best practices for working with Tailwind CSS in your projects.",
    image: "/blog-tailwind.jpg",
    publishedAt: "2024-11-28",
    category: "CSS & Design",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    description:
      "Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.",
    image: "/blog-typescript.jpg",
    publishedAt: "2024-11-25",
    category: "TypeScript",
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    description:
      "A deep dive into React Server Components and how they're changing the way we build React applications.",
    image: "/blog-react.jpg",
    publishedAt: "2024-11-20",
    category: "React",
  },
  {
    slug: "api-design-principles",
    title: "RESTful API Design Principles",
    description: "Learn the fundamentals of designing clean, scalable, and maintainable REST APIs.",
    image: "/blog-api.jpg",
    publishedAt: "2024-11-15",
    category: "Backend",
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Techniques",
    description: "Practical strategies to improve your website's loading speed and overall performance.",
    image: "/blog-performance.jpg",
    publishedAt: "2024-11-10",
    category: "Performance",
  },
]

// Blog Posts Full Content
export const BLOG_CONTENT: Record<
  string,
  {
    title: string
    description: string
    image: string
    publishedAt: string
    category: string
    readTime: string
    content: string
  }
> = {
  "building-modern-web-apps": {
    title: "Building Modern Web Applications with Next.js 15",
    description: "Learn how to leverage the latest features in Next.js 15 to build fast, scalable web applications.",
    image: "/blog-nextjs.jpg",
    publishedAt: "2024-12-01",
    category: "Web Development",
    readTime: "8 min read",
    content: `
Next.js 15 introduces powerful new features that make building modern web applications easier and more efficient than ever. In this comprehensive guide, we'll explore the key improvements and how to leverage them in your projects.

## Server Components by Default

One of the most significant changes in Next.js 15 is that all components are Server Components by default. This means your components render on the server, reducing the JavaScript bundle sent to the client and improving performance.

### Benefits of Server Components

- Reduced bundle size
- Better SEO performance
- Improved initial page load
- Direct access to backend resources

## Improved Caching Mechanisms

Next.js 15 introduces more granular control over caching with the new caching APIs. You can now fine-tune how your data is cached and revalidated.

\`\`\`typescript
import { cache } from 'next/cache'

export const getUser = cache(async (id: string) => {
  const user = await db.user.findUnique({ where: { id } })
  return user
})
\`\`\`

## Turbopack Stability

Turbopack, the Rust-based bundler, is now stable in Next.js 15. It offers significantly faster build times compared to Webpack, especially for large applications.

### Performance Improvements

- Up to 700x faster updates than Webpack
- Native TypeScript support
- Better error messages

## Conclusion

Next.js 15 represents a major leap forward in web development tooling. By embracing these new features, you can build faster, more efficient applications that provide better user experiences.
    `,
  },
  "mastering-tailwind-css": {
    title: "Mastering Tailwind CSS: Tips and Tricks",
    description: "Discover advanced techniques and best practices for working with Tailwind CSS in your projects.",
    image: "/blog-tailwind.jpg",
    publishedAt: "2024-11-28",
    category: "CSS & Design",
    readTime: "6 min read",
    content: `
Tailwind CSS has revolutionized how we approach styling in modern web development. This guide will help you master advanced techniques and best practices.

## Custom Design Tokens

Instead of using arbitrary values, create custom design tokens in your configuration:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
        }
      }
    }
  }
}
\`\`\`

## Component Patterns

Learn to create reusable component patterns with Tailwind:

### Button Component Example

\`\`\`jsx
const Button = ({ variant = 'primary', children }) => {
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }
  
  return (
    <button className={\`px-4 py-2 rounded \${variants[variant]}\`}>
      {children}
    </button>
  )
}
\`\`\`

## Performance Optimization

Use PurgeCSS to remove unused styles in production, keeping your CSS bundle small and efficient.

## Conclusion

Mastering these techniques will help you write cleaner, more maintainable Tailwind CSS code.
    `,
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices for 2024",
    description:
      "Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.",
    image: "/blog-typescript.jpg",
    publishedAt: "2024-11-25",
    category: "TypeScript",
    readTime: "7 min read",
    content: `
TypeScript continues to evolve, and staying up-to-date with best practices is crucial for writing maintainable, type-safe code.

## Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

## Type Inference Over Explicit Types

Let TypeScript infer types when possible:

\`\`\`typescript
// Good
const numbers = [1, 2, 3]

// Unnecessary
const numbers: number[] = [1, 2, 3]
\`\`\`

## Utility Types

Leverage TypeScript's built-in utility types:

- \`Partial<T>\` - Make all properties optional
- \`Pick<T, K>\` - Select specific properties
- \`Omit<T, K>\` - Exclude specific properties
- \`Record<K, T>\` - Create object type with specific keys

## Avoid Type Assertions

Type assertions should be a last resort. Instead, use type guards and proper typing.

## Conclusion

Following these best practices will help you write more robust TypeScript code that's easier to maintain and refactor.
    `,
  },
  "react-server-components": {
    title: "Understanding React Server Components",
    description:
      "A deep dive into React Server Components and how they're changing the way we build React applications.",
    image: "/blog-react.jpg",
    publishedAt: "2024-11-20",
    category: "React",
    readTime: "10 min read",
    content: `
React Server Components represent a paradigm shift in how we build React applications. Let's explore what they are and why they matter.

## What Are Server Components?

Server Components are React components that render exclusively on the server. They never send JavaScript to the client, resulting in smaller bundle sizes and faster initial page loads.

## Key Benefits

### Zero Bundle Size

Server Components don't add to your JavaScript bundle, which means faster page loads and better performance on slower devices.

### Direct Backend Access

Access databases, file systems, and other backend resources directly without needing API routes:

\`\`\`tsx
async function UserProfile({ userId }: { userId: string }) {
  const user = await db.user.findUnique({ where: { userId } })
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
\`\`\`

## When to Use Client Components

You still need Client Components for:
- Interactive features (onClick, onChange)
- Browser APIs (localStorage, window)
- State management (useState, useReducer)
- Effects (useEffect)

## Mixing Server and Client Components

You can compose Server and Client Components together seamlessly:

\`\`\`tsx
// Server Component
async function Page() {
  const data = await fetchData()
  
  return (
    <div>
      <ServerComponent data={data} />
      <ClientComponent />
    </div>
  )
}
\`\`\`

## Conclusion

React Server Components are a powerful addition to the React ecosystem, enabling better performance and simpler data fetching patterns.
    `,
  },
  "api-design-principles": {
    title: "RESTful API Design Principles",
    description: "Learn the fundamentals of designing clean, scalable, and maintainable REST APIs.",
    image: "/blog-api.jpg",
    publishedAt: "2024-11-15",
    category: "Backend",
    readTime: "9 min read",
    content: `
Designing a great API is both an art and a science. Let's explore the key principles that make REST APIs maintainable and developer-friendly.

## Use Proper HTTP Methods

- GET: Retrieve resources
- POST: Create new resources
- PUT: Update entire resources
- PATCH: Partial updates
- DELETE: Remove resources

## Consistent Naming Conventions

Use plural nouns for endpoints:

\`\`\`
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id
\`\`\`

## Proper Status Codes

Use appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Versioning

Always version your API:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## Error Handling

Return consistent error responses:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [...]
  }
}
\`\`\`

## Pagination

Implement pagination for large datasets:

\`\`\`
GET /users?page=1&limit=20
\`\`\`

## Conclusion

Following these principles will help you design APIs that are intuitive, scalable, and easy to maintain.
    `,
  },
  "web-performance-optimization": {
    title: "Web Performance Optimization Techniques",
    description: "Practical strategies to improve your website's loading speed and overall performance.",
    image: "/blog-performance.jpg",
    publishedAt: "2024-11-10",
    category: "Performance",
    readTime: "8 min read",
    content: `
Web performance directly impacts user experience and conversion rates. Let's explore practical techniques to make your website faster.

## Image Optimization

Images are often the largest assets on a page. Optimize them by:

- Using modern formats (WebP, AVIF)
- Implementing lazy loading
- Serving responsive images
- Compressing without quality loss

## Code Splitting

Break your JavaScript into smaller chunks that load on demand:

\`\`\`javascript
// Dynamic imports
const Component = lazy(() => import('./Component'))
\`\`\`

## Reduce JavaScript Bundle Size

- Tree shake unused code
- Remove unused dependencies
- Use lighter alternatives
- Minimize and compress

## Caching Strategies

Implement proper caching headers:

\`\`\`
Cache-Control: public, max-age=31536000, immutable
\`\`\`

## Critical CSS

Inline critical CSS for above-the-fold content to eliminate render-blocking resources.

## Performance Metrics

Monitor these key metrics:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Conclusion

Performance optimization is an ongoing process. Regular monitoring and incremental improvements will keep your site fast and responsive.
    `,
  },
}
