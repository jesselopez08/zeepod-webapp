import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Zeepod — Exchange currency with travelers worldwide',
  description:
    'Zeepod is the app that helps travelers find, exchange, and transfer currencies at the best rate, in any country, 24/7. Exchange money for experiences with the Zeeper community.',
}

export default function HomeEn() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" />
      <main className="flex-1">
        <Hero lang="en" />
        <CurrencyCalculator lang="en" />
        <Stats lang="en" />
        <Services lang="en" />
        <PresentationVideo lang="en" />
        <HowItWorks lang="en" />
        <SecurityEscrow lang="en" />
        <TravelBanner lang="en" />
        <Community lang="en" />
        <WhyZeepod lang="en" />
        <TravelGallery lang="en" />
        <BlogSection lang="en" />
        <DownloadCta lang="en" />
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
