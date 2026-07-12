"use client"

import { useState } from "react"
import { Lock, ShieldAlert, Award, Star, Headset } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

export function SecurityEscrow({ lang = "es" }: { lang?: LangType }) {
  const [activePillar, setActivePillar] = useState<number>(0)

  const t = translations[lang].securityEscrow

  const pillars = [
    {
      num: "01",
      title: t.pillars[0].title,
      description: t.pillars[0].desc,
      colorClass: "border-zeep-purple text-zeep-purple bg-zeep-purple-5",
      svg: (
        <svg viewBox="0 0 200 200" className="size-full animate-fade-in" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background grid */}
          <circle cx="100" cy="100" r="80" className="stroke-zeep-purple/10" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" className="stroke-zeep-purple/20" strokeWidth="1" />
          
          {/* Dashboard Card */}
          <rect x="45" y="45" width="110" height="110" rx="16" className="fill-secondary stroke-border shadow-sm" strokeWidth="2.5" />
          
          {/* Profile Avatar inside Card */}
          <circle cx="100" cy="95" r="20" className="fill-muted-foreground/15 stroke-border" strokeWidth="2" />
          <circle cx="100" cy="90" r="8" className="fill-muted-foreground/30" />
          <path d="M88 108C88 102.5 93 100 100 100C107 100 112 102.5 112 108" className="fill-muted-foreground/30" />
          
          {/* Verified Check Badge (emerald) */}
          <circle cx="114" cy="108" r="9" className="fill-emerald-500 stroke-white" strokeWidth="1.5" />
          <path d="M110 108L113 111L118 105" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Social Network Badge (Google/Facebook colors) */}
          <circle cx="70" cy="65" r="11" className="fill-zeep-purple/10 stroke-zeep-purple animate-pulse" strokeWidth="1.5" />
          <path d="M66 65H74M70 61V69" className="stroke-zeep-purple" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Email / Mail Envelope Badge */}
          <circle cx="130" cy="65" r="11" className="fill-zeep-cyan/10 stroke-zeep-cyan animate-pulse" style={{ animationDelay: "0.5s" }} strokeWidth="1.5" />
          <rect x="125" y="61" width="10" height="7" rx="1.2" className="fill-zeep-cyan" />
          
          {/* Phone Badge */}
          <circle cx="70" cy="125" r="11" className="fill-zeep-orange/15 stroke-zeep-orange animate-pulse" style={{ animationDelay: "1s" }} strokeWidth="1.5" />
          <rect x="67" y="119" width="6" height="11" rx="1" className="fill-zeep-orange" />
          
          {/* Credit Card / USD payment validation Badge */}
          <circle cx="130" cy="125" r="11" className="fill-emerald-500/15 stroke-emerald-500 animate-bounce" style={{ animationDuration: "3s" }} strokeWidth="1.5" />
          <text x="130" y="129" textAnchor="middle" className="font-display font-black text-[10px] fill-emerald-500">$</text>
        </svg>
      ),
    },
    {
      num: "02",
      title: t.pillars[1].title,
      description: t.pillars[1].desc,
      colorClass: "border-zeep-cyan text-zeep-cyan bg-zeep-cyan-5",
      svg: (
        <svg viewBox="0 0 200 200" className="size-full animate-fade-in" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" className="stroke-zeep-cyan/10" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* User Score Card */}
          <rect x="40" y="55" width="120" height="85" rx="16" className="fill-secondary stroke-border" strokeWidth="2.5" />
          
          {/* Main big rating value */}
          <text x="100" y="92" textAnchor="middle" className="font-display font-black text-3xl fill-foreground">4.9</text>
          
          {/* 5 Stars row */}
          <g className="fill-amber-400 stroke-amber-400">
            {/* Star 1 */}
            <polygon points="60,105 61.5,108 65,108.5 62.5,111 63,114.5 60,113 57,114.5 57.5,111 55,108.5 58.5,108" className="animate-pulse" />
            {/* Star 2 */}
            <polygon points="80,105 81.5,108 85,108.5 82.5,111 83,114.5 80,113 77,114.5 77.5,111 75,108.5 78.5,108" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
            {/* Star 3 */}
            <polygon points="100,105 101.5,108 105,108.5 102.5,111 103,114.5 100,113 97,114.5 97.5,111 95,108.5 98.5,108" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
            {/* Star 4 */}
            <polygon points="120,105 121.5,108 125,108.5 122.5,111 123,114.5 120,113 117,114.5 117.5,111 115,108.5 118.5,108" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
            {/* Star 5 */}
            <polygon points="140,105 141.5,108 145,108.5 142.5,111 143,114.5 140,113 137,114.5 137.5,111 135,108.5 138.5,108" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
          </g>

          {/* Sparkle badge */}
          <path d="M150 50L152 56L158 58L152 60L150 66L148 60L142 58L148 56Z" className="fill-zeep-cyan animate-pulse" />
        </svg>
      ),
    },
    {
      num: "03",
      title: t.pillars[2].title,
      description: t.pillars[2].desc,
      colorClass: "border-zeep-orange text-zeep-orange bg-zeep-orange-5",
      svg: (
        <svg viewBox="0 0 200 200" className="size-full animate-fade-in" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" className="stroke-zeep-orange/10" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Chat Review Bubble 1 */}
          <rect x="35" y="45" width="105" height="42" rx="12" className="fill-secondary stroke-border" strokeWidth="2" />
          <circle cx="52" cy="66" r="8" className="fill-zeep-purple/15" />
          <line x1="68" y1="62" x2="125" y2="62" className="stroke-muted-foreground/45" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="68" y1="70" x2="110" y2="70" className="stroke-muted-foreground/30" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Chat Review Bubble 2 (Bouncing review) */}
          <g className="animate-bounce" style={{ animationDuration: "3.5s" }}>
            <rect x="60" y="100" width="110" height="42" rx="12" className="fill-zeep-orange/10 stroke-zeep-orange" strokeWidth="2.5" />
            <circle cx="77" cy="121" r="8" className="fill-zeep-orange/20" />
            <line x1="93" y1="117" x2="155" y2="117" className="stroke-zeep-orange" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="93" y1="125" x2="140" y2="125" className="stroke-zeep-orange/70" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Hearts / Check icons floating */}
          <path d="M152 48C154.5 45 159 45 161 47.5C163 50 161.5 54.5 158 57.5L152 62L146 57.5C142.5 54.5 141 50 143 47.5C145 45 149.5 45 152 48Z" className="fill-zeep-pink animate-pulse" />
        </svg>
      ),
    },
    {
      num: "04",
      title: t.pillars[3].title,
      description: t.pillars[3].desc,
      colorClass: "border-emerald-500 text-emerald-500 bg-emerald-500/5",
      svg: (
        <svg viewBox="0 0 200 200" className="size-full animate-fade-in" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" className="stroke-emerald-500/10" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Live Support Agent Avatar */}
          <circle cx="100" cy="95" r="26" className="fill-secondary stroke-emerald-500" strokeWidth="2.5" />
          <path d="M84 116C84 109.5 88 106 100 106C112 106 116 109.5 116 116" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="2" />
          <circle cx="100" cy="92" r="10" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1.5" />
          
          {/* Support Headset */}
          <path d="M80 95C80 84 89 75 100 75C111 75 120 84 120 95" className="stroke-emerald-500" strokeWidth="3" strokeLinecap="round" />
          <rect x="76" y="91" width="6" height="10" rx="2.5" className="fill-emerald-500" />
          <rect x="118" y="91" width="6" height="10" rx="2.5" className="fill-emerald-500" />
          <path d="M119 95C119 104 111 110 106 110" className="stroke-emerald-500" strokeWidth="2" strokeLinecap="round" />
          
          {/* Live dialogue circles (Mediating chats indicator) */}
          <circle cx="45" cy="85" r="5" className="fill-emerald-500/30 animate-ping" />
          <circle cx="45" cy="85" r="5" className="fill-emerald-500" />
          
          <circle cx="155" cy="105" r="5" className="fill-emerald-500/30 animate-ping" style={{ animationDelay: "1.2s" }} />
          <circle cx="155" cy="105" r="5" className="fill-emerald-500" />
        </svg>
      ),
    },
  ]

  return (
    <section id="seguridad" className="bg-secondary/40 pt-8 pb-14 lg:pt-10 lg:pb-20 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zeep-purple-15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zeep-purple">
            <Lock className="size-3" /> {t.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Pillar Slider */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          {/* Left: Interactive selector & descriptions */}
          <div className="space-y-4">
            {pillars.map((pillar, idx) => {
              const isActive = idx === activePillar
              return (
                <button
                  key={pillar.num}
                  type="button"
                  onClick={() => setActivePillar(idx)}
                  className={`w-full flex items-start gap-4 p-6 rounded-3xl border text-left transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? "border-border bg-card shadow-md scale-102"
                      : "border-border/40 hover:border-border bg-card/45"
                  }`}
                >
                  <span className={`flex size-11 items-center justify-center rounded-2xl font-display text-lg font-extrabold border ${
                    isActive ? pillar.colorClass : "border-border text-muted-foreground"
                  }`}>
                    {pillar.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground text-base sm:text-lg">{pillar.title}</h3>
                    {isActive && (
                      <div className="mt-2 space-y-4">
                        <p className="text-pretty text-sm leading-relaxed text-muted-foreground transition-all duration-500">
                          {pillar.description}
                        </p>
                        {/* Render SVG inside the active card on mobile/tablet */}
                        <div className="lg:hidden w-full max-w-[240px] aspect-square mx-auto rounded-2xl border border-border bg-card/50 p-4 flex items-center justify-center overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-zeep-purple/5 to-zeep-cyan/5 pointer-events-none" />
                          <div className="size-full flex items-center justify-center">
                            {pillar.svg}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: SVG animations window for Desktop */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative size-72 sm:size-80 rounded-[2.5rem] border border-border bg-card shadow-lg p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-zeep-purple/5 to-zeep-cyan/5 pointer-events-none" />
              {pillars[activePillar].svg}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
