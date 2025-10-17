"use client";

/**
 * Link Innovations - Enhanced Homepage
 * 15 Strategic Components - Conversion & Showcase Optimized
 */

// Essential Components
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { EnhancedNavbar } from "@/components/EnhancedNavbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import LinkMetomicTrustedBySection from "@/components/link-sections/metomic-trusted-by-section";
import InfiniteMenuSection from "@/components/InfiniteMenuSection";
import LinkLogoMarquee from "@/components/link-sections/logo-marquee";
import LinkTabbedFeatures from "@/components/link-sections/tabbed-features";
import LinkTestimonialsCarousel from "@/components/link-sections/testimonials-carousel";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

// Additional Strategic Components
import { TimelineSection } from "@/components/TimelineSection";
import LinkUseCasesAccordion from "@/components/link-sections/use-cases-accordion";
import LinkCustomerStatsCards from "@/components/link-sections/customer-stats-cards";
import LinkPortfolioShowcase from "@/components/link-sections/portfolio-showcase";
import { LogoSection } from "@/components/LogosSection";
import LinkDevexVideoSection from "@/components/link-sections/devex-video-section";
import { HeroParallax, portfolioProducts } from "@/components/ui/hero-parallax";

export default function Home() {
        return (
                <div className="w-full bg-black">
                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 1: IMMEDIATE IMPACT (0-3 seconds)
          Goal: Capture attention and establish credibility
          ═══════════════════════════════════════════════════════════════ */}

                        <PerformanceOptimizer />
                        <EnhancedNavbar />
                        <HeroGeometric
                                badge="Link Innovations - Digital Excellence"
                                title1="Transform Your Business"
                                title2="With Cutting-Edge Technology"
                        />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 2: TRUST BUILDING (3-10 seconds)
          Goal: Establish credibility with metrics and trust indicators
          ═══════════════════════════════════════════════════════════════ */}

                        <LinkMetomicTrustedBySection />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 3: SERVICE DISCOVERY (10-30 seconds)
          Goal: Showcase all services and technology stack
          ═══════════════════════════════════════════════════════════════ */}

                        <InfiniteMenuSection />
                        <LinkLogoMarquee />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 4: DETAILED SHOWCASE (30-60 seconds)
          Goal: Deep dive into service-specific capabilities
          ═══════════════════════════════════════════════════════════════ */}

                        <LinkTabbedFeatures />
                        <TimelineSection />
                        <LinkDevexVideoSection />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 5: INDUSTRY EXPERTISE (60-90 seconds)
          Goal: Show industry-specific solutions and use cases
          ═══════════════════════════════════════════════════════════════ */}

                        <LinkUseCasesAccordion />
                        <LogoSection />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 6: SOCIAL PROOF & PORTFOLIO (90-120 seconds)
          Goal: Build trust through testimonials and showcase work
          ═══════════════════════════════════════════════════════════════ */}

                        <LinkCustomerStatsCards />
                        <LinkTestimonialsCarousel />
                        <LinkPortfolioShowcase />
                        <HeroParallax products={portfolioProducts} />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 7: CONVERSION (120+ seconds)
          Goal: Drive action with clear call-to-action
          ═══════════════════════════════════════════════════════════════ */}

                        <CtaSection />

                        {/* Footer */}
                        <Footer />
                </div>
        );
}