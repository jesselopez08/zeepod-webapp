import { translations, LangType } from "@/lib/translations"

export function Stats({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].stats

  const stats = [
    { value: lang === "en" ? "+75,000" : "+75.000", label: t.downloads },
    { value: "+50", label: t.countries },
    { value: "24/7", label: t.availability },
    { value: lang === "en" ? "10,000" : "10.000", label: t.exchanges },
  ]

  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-zeep-gradient sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
