"use client"

import { Play } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

interface PresentationVideoProps {
  lang?: LangType
}

export function PresentationVideo({ lang = "es" }: PresentationVideoProps) {
  const t = translations[lang].presentationVideo

  // Resolve YouTube video ID based on active language
  const videoId = lang === "en" ? "s0N9EMdlJOI" : "Q3fy99PhzSQ"

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-2xl text-center mb-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-zeep-purple/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zeep-purple">
          <Play className="size-3 fill-current" /> {t.badge}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 text-pretty text-base text-muted-foreground leading-relaxed">
          {t.description}
        </p>
      </div>

      {/* Video Player aspect ratio container */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/80 bg-black group">
        {/* Glow overlay */}
        <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-zeep-gradient opacity-10 blur-xl group-hover:opacity-15 transition-opacity" />

        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1`}
          title={t.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </section>
  )
}
