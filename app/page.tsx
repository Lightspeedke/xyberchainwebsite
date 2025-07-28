import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CallToActionSection from "@/components/cta-section"
import AboutSection from "@/components/about-section"
import MetamaskSection from "@/components/metamask-section" // Import the new component

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <MetamaskSection /> {/* Add the new section here */}
        <CallToActionSection />
      </main>
      <SiteFooter />
    </div>
  )
}
