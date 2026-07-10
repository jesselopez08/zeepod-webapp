import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { translations, LangType } from "@/lib/translations"
import { postsDataEs, postsDataEn } from "@/lib/blog-posts-data"

export function BlogSection({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].blogSection
  const posts = Object.values(lang === "en" ? postsDataEn : postsDataEs)

  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 pt-8 pb-14 sm:px-6 lg:pt-10 lg:pb-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-zeep-purple">{t.badge}</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {t.description}
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
          >
            {/* Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-6">
              <div>
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${post.tagClass}`}>
                  {post.tag}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-zeep-purple">
                <a href={lang === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </a>
              </h3>

              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>

              {/* Divider */}
              <div className="mt-6 border-t border-border/80" />

              {/* Author & Footer info */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zeep-gradient text-[10px] font-bold text-white shadow-sm">
                    {post.authorAvatar}
                  </div>
                  <span className="text-xs font-semibold text-foreground">{post.authorName}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Hover arrow trigger */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-zeep-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>{lang === "en" ? "Read article" : "Leer artículo"}</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
