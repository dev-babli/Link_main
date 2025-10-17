import HeroSection from "@/components/vareto-sections/hero-section";
import FeaturesSection from "@/components/vareto-sections/features-section";
import PlanningResolutionSection from "@/components/vareto-sections/planning-resolution-section";
import ReportingViewsSection from "@/components/vareto-sections/reporting-views-section";
import MultiplayerEditingSection from "@/components/vareto-sections/multiplayer-editing-section";
import CollaborationSection from "@/components/vareto-sections/collaboration-section";
import IntegrationsSection from "@/components/vareto-sections/integrations-section";
import CustomerStoriesSection from "@/components/vareto-sections/customer-stories-section";
import ImplementationSection from "@/components/vareto-sections/implementation-section";
import CtaSection from "@/components/vareto-sections/cta-section";
import Footer from "@/components/vareto-sections/footer";
import "@/styles/vareto-design.css";

export const metadata = {
    title: "Vareto Showcase | Link Innovations",
    description: "Showcase of Vareto website design and components",
};

export default function VaretoShowcase() {
    return (
        <div className="min-h-screen vareto-theme">
            <HeroSection />
            <FeaturesSection />
            <PlanningResolutionSection />
            <ReportingViewsSection />
            <MultiplayerEditingSection />
            <CollaborationSection />
            <IntegrationsSection />
            <CustomerStoriesSection />
            <ImplementationSection />
            <CtaSection />
            <Footer />
        </div>
    );
}



