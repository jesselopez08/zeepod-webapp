import { Apple, Play } from "lucide-react"

type StoreBadgesProps = {
  variant?: "light" | "dark"
  className?: string
}

export function StoreBadges({ variant = "dark", className = "" }: StoreBadgesProps) {
  const isLight = variant === "light"
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
  const styles = isLight
    ? "bg-white text-foreground border border-border shadow-sm"
    : "bg-foreground text-background"

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href="https://apps.apple.com/app/zeepod"
        className={`${base} ${styles}`}
        aria-label="Descargar Zeepod en el App Store"
      >
        <Apple className="size-7 shrink-0" />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] opacity-80">Descárgala en el</span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=io.zeepod"
        className={`${base} ${styles}`}
        aria-label="Descargar Zeepod en Google Play"
      >
        <Play className="size-7 shrink-0" />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] opacity-80">Disponible en</span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
