import Image from "next/image"
import { translations, LangType } from "@/lib/translations"

export function TravelBanner({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].travelBanner

  return (
    <section className="relative min-h-[420px] w-full overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <Image
        src="/Imagenes/DSC_0383.jpg"
        alt="Viajes por el mundo con Zeepod"
        fill
        sizes="100vw"
        quality={75}
        className="object-cover opacity-60"
        loading="lazy"
      />

      {/* Dark & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center text-white">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {t.badge}
        </span>

        <h2 className="mt-6 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
          {t.title}
        </h2>

        <p className="mt-4 max-w-2xl text-pretty text-base sm:text-lg text-white/80 leading-relaxed">
          {t.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={lang === "en" ? "/en#registro" : "/#registro"}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
          >
            {t.ctaButton}
          </a>
          <a
            href={lang === "en" ? "/en#servicios" : "/#servicios"}
            className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/15"
          >
            {t.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}
