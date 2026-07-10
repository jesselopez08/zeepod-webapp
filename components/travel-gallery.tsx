import Image from "next/image"
import { translations, LangType } from "@/lib/translations"

const gallery = [
  {
    image: "/Imagenes/DSC_0332.jpg",
    tagKey: "freedom",
    locKey: "community",
    gridClass: "md:col-span-2 min-h-[240px] md:h-[300px]",
  },
  {
    image: "/Imagenes/Imagenes de influenciadores y lugares/G0167944.jpg",
    tagKey: "adventure",
    locKey: "community",
    gridClass: "md:col-span-1 min-h-[240px] md:h-[300px]",
  },
  {
    image: "/Imagenes/Imagenes de influenciadores y lugares/G0218065.jpg",
    tagKey: "culture",
    locKey: "community",
    gridClass: "md:col-span-1 min-h-[240px] md:h-[300px]",
  },
  {
    image: "/Imagenes/DSC_0592.jpg",
    tagKey: "nomad",
    locKey: "community",
    gridClass: "md:col-span-2 min-h-[240px] md:h-[300px]",
  },
  {
    image: "/Imagenes/Imagenes de influenciadores y lugares/G0298037.jpg",
    tagKey: "community",
    locKey: "community",
    gridClass: "md:col-span-2 min-h-[240px] md:h-[300px]",
  },
  {
    image: "/Imagenes/DSC_0474.jpg",
    tagKey: "frontiers",
    locKey: "destinations",
    gridClass: "md:col-span-1 min-h-[240px] md:h-[300px]",
  },
]

export function TravelGallery({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].travelGallery

  const resolvedGallery = gallery.map((item) => {
    const tagsMap: Record<string, string> = {
      freedom: t.tags.freedom,
      adventure: t.tags.adventure,
      culture: t.tags.culture,
      nomad: t.tags.nomad,
      community: t.tags.community,
      frontiers: t.tags.frontiers,
    }
    const locMap: Record<string, string> = {
      community: lang === "en" ? "Zeeper Community" : "Comunidad Zeeper",
      destinations: lang === "en" ? "Zeepod Destinations" : "Destinos Zeepod",
    }

    return {
      image: item.image,
      tag: tagsMap[item.tagKey] || item.tagKey,
      location: locMap[item.locKey] || item.locKey,
      gridClass: item.gridClass,
    }
  })

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 lg:pt-20 lg:pb-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-zeep-purple">{t.badge}</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {t.description}
        </p>
      </div>

      {/* Grid wrapper without hardcoded rows to auto-calculate height */}
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {resolvedGallery.map((item, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-3xl border border-border shadow-sm ${item.gridClass}`}
          >
            {/* Image container */}
            <Image
              src={item.image}
              alt={item.tag}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
            {/* Dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:from-black/75" />

            {/* Content overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                {item.tag}
              </span>
              <p className="mt-2 text-xs font-semibold text-white/80">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
