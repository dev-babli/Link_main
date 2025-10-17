import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import TabbedFeatures from "@/components/sections/tabbed-features";
import CustomerStatsCards from "@/components/sections/customer-stats-cards";
import LogoMarquee from "@/components/sections/logo-marquee";
import AiCopilotsSection from "@/components/sections/ai-copilots-section";
import IdpconEventSection from "@/components/sections/idpcon-event-section";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import UseCasesAccordion from "@/components/sections/use-cases-accordion";
import MetricsGrid from "@/components/sections/metrics-grid";
import DevexVideoSection from "@/components/sections/devex-video-section";
import BlogCardsSection from "@/components/sections/blog-cards";
import FinalCtaSection from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-20 sm:pt-28">
        <HeroSection />
        
        <div className="container mx-auto px-6 py-16">
          <TabbedFeatures />
        </div>

        <LogoMarquee />

        <AiCopilotsSection />

        <IdpconEventSection />

        <TestimonialsCarousel />

        <UseCasesAccordion />

        <MetricsGrid />

        <DevexVideoSection />

        <BlogCardsSection />

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}