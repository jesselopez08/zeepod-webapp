import Image from "next/image"
import { MapPin, ArrowLeftRight, Star } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"
import { translations, LangType } from "@/lib/translations"

export function Hero({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].hero

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-20">
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
            <span className="size-2 rounded-full bg-zeep-orange animate-pulse" />
            {t.badge}
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t.titlePre}{" "}
            <span className="text-zeep-gradient">{t.titleGradient}</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>

          <div className="mt-8 w-full max-w-md">
            <WaitlistForm lang={lang} />
          </div>

          <p className="mt-4 text-xs font-medium text-muted-foreground">
            {t.subText}
          </p>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] isolate">
            {/* Background Image Collage */}
            {/* Collage Item 1: Influencer left */}
            <div className="absolute -left-[55px] sm:-left-[100px] top-[40px] sm:top-[80px] -z-20 w-20 h-28 sm:w-28 sm:h-36 rotate-[-12deg] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg transition-transform duration-500 hover:rotate-[-6deg] hover:scale-105">
              <Image
                src="/Imagenes/Imagenes de influenciadores y lugares/G0167944.jpg"
                alt="Comunidad viajera Zeepod"
                fill
                sizes="(max-width: 640px) 80px, 112px"
                className="object-cover"
              />
            </div>
            
            {/* Collage Item 2: Influencer right */}
            <div className="absolute -right-[55px] sm:-right-[100px] top-[70px] sm:top-[120px] -z-20 w-20 h-28 sm:w-28 sm:h-36 rotate-[12deg] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg transition-transform duration-500 hover:rotate-[6deg] hover:scale-105">
              <Image
                src="/Imagenes/Imagenes de influenciadores y lugares/G0218065.jpg"
                alt="Zeeper por el mundo"
                fill
                sizes="(max-width: 640px) 80px, 112px"
                className="object-cover"
              />
            </div>

            {/* Collage Item 3: Landscape bottom */}
            <div className="absolute -left-[20px] sm:-left-[40px] -bottom-[25px] sm:-bottom-[40px] -z-20 w-28 h-20 sm:w-36 sm:h-24 rotate-[-6deg] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg transition-transform duration-500 hover:rotate-[0deg] hover:scale-105">
              <Image
                src="/Imagenes/DSC_0474.jpg"
                alt="Destinos Zeepod"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover"
              />
            </div>

            {/* Floating Graphic 1: Yellow Star */}
            <div className="absolute -right-8 -top-8 -z-10 w-12 h-12 rotate-[15deg] animate-pulse pointer-events-none hidden sm:block">
              <Image
                src="/Iconos/Estrella amarilla con 7 puntas.png"
                alt=""
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            
            {/* Floating Graphic 2: Purple/Orange Circle */}
            <div className="absolute -right-12 -bottom-6 -z-10 w-14 h-14 rotate-[-15deg] animate-bounce pointer-events-none hidden sm:block" style={{ animationDuration: "4s" }}>
              <Image
                src="/Iconos/circulo morado con estrella de lienas naranaja.png"
                alt=""
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>

            {/* gradient glow frame */}
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-zeep-gradient opacity-20 blur-2xl" />

            <div className="rounded-[2.5rem] border border-border bg-white p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-zeep-gradient">
                <div className="flex flex-col items-center px-6 py-10 text-white">
                  <Image
                    src="/Logos/zeepod-app-icon.png"
                    alt="Ícono de la app Zeepod"
                    width={96}
                    height={96}
                    className="size-20 rounded-2xl shadow-lg"
                  />
                  <p className="mt-5 text-sm font-medium text-white/80">
                    {lang === "en" ? "You are in" : "Estás en"}
                  </p>
                  <p className="flex items-center gap-1.5 text-lg font-bold">
                    <MapPin className="size-4" /> {t.location}
                  </p>

                  <div className="mt-8 w-full space-y-3">
                    <OfferRow flag="🇪🇺" name={t.userBadge1} have="450 EUR" want="MXN" rate={t.userBadge1Rate} />
                    <OfferRow flag="🇺🇸" name={t.userBadge2} have="500 USD" want="MXN" rate={t.userBadge2Rate} />
                    <OfferRow flag="🇨🇴" name={t.userBadge3} have="1.2M COP" want="USD" rate={t.userBadge3Rate} />
                  </div>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -left-4 top-16 hidden items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl sm:flex">
              <span className="flex size-9 items-center justify-center rounded-full bg-zeep-gradient-warm text-white">
                <Star className="size-4 fill-current" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-foreground">{t.ratingText}</p>
                <p className="text-[11px] text-muted-foreground">{t.ratingSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OfferRow({
  flag,
  name,
  have,
  want,
  rate,
}: {
  flag: string
  name: string
  have: string
  want: string
  rate: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-3 py-2.5 backdrop-blur-sm">
      <span className="text-xl" aria-hidden>
        {flag}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{name}</p>
        <p className="flex items-center gap-1 text-xs text-white/80">
          {have} <ArrowLeftRight className="size-3" /> {want}
        </p>
      </div>
      <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-semibold">{rate}</span>
    </div>
  )
}
