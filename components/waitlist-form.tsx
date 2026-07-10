"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { translations, LangType } from "@/lib/translations"

interface WaitlistFormProps {
  dark?: boolean
  lang?: LangType
}

export function WaitlistForm({ dark = false, lang = "es" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const t = translations[lang].waitlistForm

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMsg(t.errorInvalidEmail)
      return
    }

    setStatus("loading")

    fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, lang }),
    })
      .then(async (res) => {
        if (res.ok) {
          setStatus("success")
          setEmail("")
        } else {
          const errData = await res.json().catch(() => ({}))
          setStatus("error")
          setErrorMsg(errData.error || (lang === "en" ? "Failed to join waitlist. Please try again." : "No se pudo registrar. Inténtalo de nuevo."))
        }
      })
      .catch(() => {
        setStatus("error")
        setErrorMsg(lang === "en" ? "Connection error. Please try again." : "Error de conexión. Inténtalo de nuevo.")
      })
  }

  if (status === "success") {
    return (
      <div className={`mx-auto w-full max-w-md rounded-2xl p-4 flex items-start gap-3 animate-fade-in border ${
        dark 
          ? "bg-white/15 border-white/20 text-white" 
          : "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
      }`}>
        <CheckCircle className={`size-5 shrink-0 mt-0.5 ${dark ? "text-white animate-pulse" : "text-emerald-500"}`} />
        <div className="leading-tight text-left">
          <p className="text-sm font-bold">{t.successTitle}</p>
          <p className="text-xs mt-1 opacity-90 leading-relaxed font-medium">
            {t.successDesc}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="relative flex-1">
          <input
            type="email"
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className={`w-full px-5 py-3 rounded-full border text-sm focus:outline-none transition-colors ${
              dark
                ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15 focus:border-white/40"
                : "bg-secondary/40 border-border text-foreground placeholder-muted-foreground focus:bg-card focus:border-zeep-purple/45"
            }`}
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
            dark
              ? "bg-white text-zeep-purple hover:bg-neutral-100"
              : "bg-zeep-gradient text-white hover:opacity-95"
          }`}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> {t.buttonLoading}
            </>
          ) : (
            t.buttonIdle
          )}
        </button>
      </form>

      {/* Validation Errors */}
      {status === "error" && errorMsg && (
        <p className={`mt-2 text-xs font-semibold flex items-center gap-1 pl-1 ${
          dark ? "text-white/90" : "text-rose-500"
        }`}>
          <AlertCircle className="size-3.5 shrink-0" /> {errorMsg}
        </p>
      )}
    </div>
  )
}
