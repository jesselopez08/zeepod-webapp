import { UserPlus, ListChecks, Handshake, MapPinned } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

export function HowItWorks({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].howItWorks

  const icons = [UserPlus, ListChecks, MapPinned, Handshake]
  const steps = t.steps.map((step, i) => ({
    ...step,
    icon: icons[i] || UserPlus,
  }))

  return (
    <section id="como-funciona" className="bg-secondary/50 pt-14 pb-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-zeep-purple">
            {t.badge}
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <li
                key={step.title}
                className="relative rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-zeep-gradient-warm text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
