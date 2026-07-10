import Image from "next/image"
import { Globe } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const baseSocials = [
  { icon: InstagramIcon, href: "https://instagram.com/zeepod", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com/zeepod", label: "Facebook" },
  { icon: XIcon, href: "https://twitter.com/zeepod", label: "Twitter" },
  { icon: Globe, href: "https://www.zeepod.io", label: "Website" },
]

export function SiteFooter({ lang = "es" }: { lang?: LangType }) {
  const t = translations[lang].siteFooter

  const columns = [
    {
      title: lang === "en" ? "Product" : "Producto",
      links: [
        { label: "Zeepod Exchange", href: lang === "en" ? "/en#servicios" : "/#servicios" },
        { label: "Zeepod Transfer", href: lang === "en" ? "/en#servicios" : "/#servicios" },
        { label: "Zeepod Future", href: lang === "en" ? "/en#servicios" : "/#servicios" },
        { label: lang === "en" ? "How it works" : "Cómo funciona", href: lang === "en" ? "/en#como-funciona" : "/#como-funciona" },
      ],
    },
    {
      title: lang === "en" ? "Community" : "Comunidad",
      links: [
        { label: lang === "en" ? "For travelers" : "Para viajeros", href: lang === "en" ? "/en#comunidad" : "/#comunidad" },
        { label: lang === "en" ? "For locals" : "Para locales", href: lang === "en" ? "/en#comunidad" : "/#comunidad" },
        { label: lang === "en" ? "Why Zeepod" : "Por qué Zeepod", href: lang === "en" ? "/en#por-que" : "/#por-que" },
        { label: "Blog", href: lang === "en" ? "/en#blog" : "/#blog" },
      ],
    },
  ]

  const socials = baseSocials.map((s) => ({
    ...s,
    label: s.label === "Website" && lang === "es" ? "Sitio web" : s.label,
  }))

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href={lang === "en" ? "/en" : "/"} className="inline-block" aria-label="Zeepod inicio">
              <Image src="/Logos/Logo Color sin fondo.png" alt="Zeepod" width={140} height={40} className="h-8 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.description}
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-zeep-gradient hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>{t.copyright.replace("{year}", new Date().getFullYear().toString())}</p>
          <p>www.zeepod.io</p>
        </div>
      </div>
    </footer>
  )
}
