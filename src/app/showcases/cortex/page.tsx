import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import HeroSection from "@/components/cortex-sections/hero-section";
import TabbedFeatures from "@/components/cortex-sections/tabbed-features";
import CustomerStatsCards from "@/components/cortex-sections/customer-stats-cards";
import LogoMarquee from "@/components/cortex-sections/logo-marquee";
import AiCopilotsSection from "@/components/cortex-sections/ai-copilots-section";
import IdpconEventSection from "@/components/cortex-sections/idpcon-event-section";
import TestimonialsCarousel from "@/components/cortex-sections/testimonials-carousel";
import UseCasesAccordion from "@/components/cortex-sections/use-cases-accordion";
import MetricsGrid from "@/components/cortex-sections/metrics-grid";
import DevexVideoSection from "@/components/cortex-sections/devex-video-section";
import BlogCardsSection from "@/components/cortex-sections/blog-cards";
import FinalCtaSection from "@/components/cortex-sections/final-cta";
import Footer from "@/components/cortex-sections/footer";
import "@/styles/cortex-design.css";

export const metadata = {
    title: "Cortex Showcase | Link Innovations",
    description: "Showcase of Cortex website design and components",
};

export default function CortexShowcase() {
    return (
        <div className="min-h-screen bg-black text-white cortex-theme">
            <EnhancedNavigation />

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



