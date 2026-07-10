import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CurrencyCalculator } from "@/components/currency-calculator"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { PresentationVideo } from "@/components/presentation-video"
import { HowItWorks } from "@/components/how-it-works"
import { SecurityEscrow } from "@/components/security-escrow"
import { TravelBanner } from "@/components/travel-banner"
import { Community } from "@/components/community"
import { WhyZeepod } from "@/components/why-zeepod"
import { TravelGallery } from "@/components/travel-gallery"
import { BlogSection } from "@/components/blog-section"
import { DownloadCta } from "@/components/download-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" />
      <main className="flex-1">
        <Hero lang="es" />
        <CurrencyCalculator lang="es" />
        <Stats lang="es" />
        <Services lang="es" />
        <PresentationVideo lang="es" />
        <HowItWorks lang="es" />
        <SecurityEscrow lang="es" />
        <TravelBanner lang="es" />
        <Community lang="es" />
        <WhyZeepod lang="es" />
        <TravelGallery lang="es" />
        <BlogSection lang="es" />
        <DownloadCta lang="es" />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
