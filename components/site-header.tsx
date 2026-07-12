"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

export function SiteHeader({ lang = "es" }: { lang?: LangType }) {
  const [open, setOpen] = useState(false)
  const t = translations[lang].header

  const navLinks = [
    { label: t.services, href: lang === "en" ? "/en#servicios" : "/#servicios" },
    { label: t.process, href: lang === "en" ? "/en#como-funciona" : "/#como-funciona" },
    { label: lang === "en" ? "Community" : "Comunidad", href: lang === "en" ? "/en#comunidad" : "/#comunidad" },
    { label: t.whyUs, href: lang === "en" ? "/en#por-que" : "/#por-que" },
    { label: t.blog, href: lang === "en" ? "/en#blog" : "/#blog" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href={lang === "en" ? "/en" : "/"} className="flex items-center gap-2" aria-label="Zeepod inicio">
          <Image
            src="/Logos/Logo Color sin fondo.png"
            alt="Zeepod"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {/* Language Selector */}
          <a
            href={lang === "es" ? "/en" : "/"}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-muted-foreground border border-border/60 hover:bg-secondary hover:text-foreground transition-all duration-300"
          >
            <span>{lang === "es" ? "🇺🇸" : "🇪🇸"}</span>
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </a>

          {/* Social Links */}
          <a
            href="https://www.instagram.com/zeepod/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="size-4" />
          </a>

          <a
            href={lang === "en" ? "/en#registro" : "/#registro"}
            className="rounded-full bg-zeep-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
          >
            {t.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden cursor-pointer"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Language Switcher */}
            {/* Mobile Language Switcher */}
            <a
              href={lang === "es" ? "/en" : "/"}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-border/60 py-2.5 text-center text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <span>{lang === "es" ? "🇺🇸" : "🇪🇸"}</span>
              <span>{lang === "es" ? "English" : "Español"}</span>
            </a>

            {/* Mobile Instagram Social Link */}
            <a
              href="https://www.instagram.com/zeepod/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-border/60 py-2.5 text-center text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Instagram className="size-4" />
              <span>Instagram</span>
            </a>
            
            <a
              href={lang === "en" ? "/en#registro" : "/#registro"}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-zeep-gradient px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
