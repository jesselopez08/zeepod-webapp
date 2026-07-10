import Image from "next/image"
import { X, Check } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

export function WhyZeepod({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].whyZeepod

  return (
    <section id="por-que" className="relative overflow-hidden py-20 lg:py-28">
      {/* Blurred Background Image */}
      <Image
        src="/Imagenes/DSC_0592.jpg"
        alt="Por qué elegir Zeepod"
        fill
        sizes="100vw"
        quality={50}
        className="object-cover opacity-10 filter blur-[3px]"
        loading="lazy"
      />

      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold">{t.problemsTitle}</h3>
            <ul className="mt-6 space-y-4">
              {t.problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-zeep-pink/10 text-zeep-pink">
                    <X className="size-4" />
                  </span>
                  <span className="text-pretty leading-relaxed text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-zeep-gradient p-8 text-white">
            <h3 className="font-display text-xl font-bold">{t.solutionsTitle}</h3>
            <ul className="mt-6 space-y-4">
              {t.solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="size-4" />
                  </span>
                  <span className="text-pretty leading-relaxed text-white/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
