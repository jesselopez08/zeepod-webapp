import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"
import { translations, LangType } from "@/lib/translations"

export function DownloadCta({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].downloadCta

  return (
    <section id="registro" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-zeep-gradient px-6 py-14 text-center text-white sm:px-12 lg:py-20">
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
          <Image
            src="/Logos/Logo blanco sin fondo.png"
            alt="Zeepod"
            width={160}
            height={46}
            className="h-12 w-auto"
          />
          <h2 className="mt-6 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/95">
            {t.description}
          </p>

          <div className="mt-8 w-full max-w-md">
            <WaitlistForm dark={true} lang={lang} />
          </div>

          <p className="mt-6 text-xs text-white/80">
            {lang === "en" ? "Free and limited early access. Launching very soon." : "Acceso anticipado gratuito y limitado. Lanzamiento muy pronto."}
          </p>
        </div>
      </div>
    </section>
  )
}
