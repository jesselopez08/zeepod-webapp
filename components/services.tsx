import { Check, Coins, Send, Gift } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

const baseServices = [
  {
    icon: Coins,
    tagEs: "Disponible",
    tagEn: "Available",
    tagClass: "bg-zeep-cyan-15 text-zeep-cyan",
    progress: 100,
  },
  {
    icon: Send,
    tagEs: "Disponible",
    tagEn: "Available",
    tagClass: "bg-zeep-cyan-15 text-zeep-cyan",
    progress: 90,
  },
  {
    icon: Gift,
    tagEs: "Próximamente",
    tagEn: "Coming Soon",
    tagClass: "bg-zeep-orange-15 text-[#b5760a]",
    progress: 40,
  },
]

export function Services({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].services

  const items = t.items.map((item, index) => {
    const base = baseServices[index]
    return {
      ...item,
      icon: base.icon,
      tag: lang === "en" ? base.tagEn : base.tagEs,
      tagClass: base.tagClass,
      progress: base.progress,
    }
  })

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-zeep-purple">{t.badge}</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {t.description}
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((s) => {
          const IconComponent = s.icon
          return (
            <div
              key={s.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-zeep-gradient-warm text-white">
                  <IconComponent className="size-6" />
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${s.tagClass}`}>
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{s.description}</p>

              <ul className="mt-5 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-zeep-cyan" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span>{t.development}</span>
                  <span>{s.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-zeep-gradient" style={{ width: `${s.progress}%` }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
