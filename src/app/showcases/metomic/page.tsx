import AnnouncementBanner from "@/components/metomic-sections/announcement-banner";
import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import HeroSection from "@/components/metomic-sections/hero-section";
import DashboardPreview from "@/components/metomic-sections/dashboard-preview";
import ActivityFeedCarousel from "@/components/metomic-sections/activity-feed-carousel";
import TrustedBySection from "@/components/metomic-sections/trusted-by-section";
import IntegrationsHero from "@/components/metomic-sections/integrations-hero";
import IntegrationsMarquee from "@/components/metomic-sections/integrations-marquee";
import IntegrationsCta from "@/components/metomic-sections/integrations-cta";
import PlatformTagline from "@/components/metomic-sections/platform-tagline";
import SolutionsGrid from "@/components/metomic-sections/solutions-grid";
import TestimonialsSection from "@/components/metomic-sections/testimonials-section";
import Footer from "@/components/metomic-sections/footer";
import "@/styles/metomic-design.css";

export const metadata = {
    title: "Metomic Showcase | Link Innovations",
    description: "Showcase of Metomic website design and components",
};

export default function MetomicShowcase() {
    return (
        <div className="metomic-theme">
            <AnnouncementBanner />
            <EnhancedNavigation />
            <main className="min-h-screen bg-background-primary">
                <div className="pt-20">
                    <HeroSection />
                    <DashboardPreview />
                    <ActivityFeedCarousel />
                </div>
                <TrustedBySection />
                <IntegrationsHero />
                <IntegrationsMarquee />
                <IntegrationsCta />
                <PlatformTagline />
                <SolutionsGrid />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
}



