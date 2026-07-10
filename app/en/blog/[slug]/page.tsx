import Image from "next/image"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { postsDataEn } from "@/lib/blog-posts-data"
import { WaitlistForm } from "@/components/waitlist-form"
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPageEn({ params }: PageProps) {
  const { slug } = await params
  const post = postsDataEn[slug]

  if (!post) {
    notFound()
  }

  // Get related posts (exclude current)
  const relatedPosts = Object.values(postsDataEn)
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" />

      <main className="flex-grow bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          {/* Back Button */}
          <a
            href="/en#blog"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-zeep-purple transition-colors"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to home</span>
          </a>

          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <a href="/en" className="hover:text-foreground">Home</a>
            <ChevronRight className="size-3" />
            <a href="/en#blog" className="hover:text-foreground">Blog</a>
            <ChevronRight className="size-3" />
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          {/* Tag Category */}
          <div>
            <span className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${post.tagClass}`}>
              {post.tag}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Metadata info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border/80 pb-6">
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-full bg-zeep-gradient text-xs font-bold text-white shadow-sm">
                {post.authorAvatar}
              </div>
              <span className="font-semibold text-foreground">{post.authorName}</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="size-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Header Cover Image */}
          <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border shadow-md bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Rich Content rendering */}
          <div className="mt-10">
            {post.content.map((block, index) => {
              switch (block.type) {
                case "p":
                  return (
                    <p key={index} className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal">
                      {block.value}
                    </p>
                  )
                case "h2":
                  return (
                    <h2 key={index} className="mt-12 font-display text-2xl font-bold text-foreground leading-tight sm:text-3xl">
                      {block.value}
                    </h2>
                  )
                case "blockquote":
                  return (
                    <blockquote key={index} className="mt-8 border-l-4 border-zeep-purple bg-secondary/30 px-6 py-4 rounded-r-2xl italic text-foreground font-medium text-base sm:text-lg">
                      “{block.value}”
                    </blockquote>
                  )
                case "ul":
                  return (
                    <ul key={index} className="mt-6 space-y-3 pl-6 list-disc text-base sm:text-lg leading-relaxed text-muted-foreground">
                      {(block.value as string[]).map((li, idx) => (
                        <li key={idx}>
                          <span className="text-muted-foreground">{li}</span>
                        </li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* Bottom app download Waitlist CTA */}
          <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-zeep-gradient px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
              <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Want to know when we launch the app?
              </h2>
              <p className="mt-3 text-pretty text-sm sm:text-base text-white/95">
                We are actively preparing the release of the application. Join the waitlist today to get exclusive early access.
              </p>
              <div className="mt-6 w-full max-w-md">
                <WaitlistForm dark={true} lang="en" />
              </div>
            </div>
            <div className="absolute -inset-6 -z-0 rounded-[3rem] bg-white/5 opacity-10 blur-xl" />
          </div>

          {/* Related Articles Section */}
          <div className="mt-20 border-t border-border/80 pt-12">
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Other recommended articles
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <a
                  key={related.slug}
                  href={`/en/blog/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${related.tagClass}`}>
                      {related.tag}
                    </span>
                    <h4 className="mt-3 font-display font-bold leading-snug text-foreground group-hover:text-zeep-purple transition-colors">
                      {related.title}
                    </h4>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-zeep-purple">
                      Read article →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter lang="en" />
    </div>
  )
}
