import { Plane, Globe2, GraduationCap, Briefcase, Home, Users } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

export function Community({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].community

  const icons = [Plane, Globe2, Home, GraduationCap, Briefcase, Users]
  const audiences = t.audiences.map((item, i) => ({
    ...item,
    icon: icons[i] || Plane,
  }))

  return (
    <section id="comunidad" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-zeep-purple">
            {t.badge}
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>

          <div className="mt-8 rounded-3xl bg-zeep-gradient p-[1.5px]">
            <blockquote className="rounded-3xl bg-card p-6">
              <p className="text-pretty text-lg font-medium leading-relaxed">
                {t.quote}
              </p>
              <footer className="mt-4 text-sm font-semibold text-muted-foreground">
                {t.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-zeep-gradient-warm text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{a.title}</h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
