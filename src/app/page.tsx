"use client";

/**
 * Link Innovations - Enhanced Homepage
 * 15 Strategic Components - Conversion & Showcase Optimized
 */

// Essential Components
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import LinkInnovationsNavbar from "@/components/LinkInnovationsNavbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import LinkMetomicTrustedBySection from "@/components/link-sections/metomic-trusted-by-section";
import InfiniteMenuSection from "@/components/InfiniteMenuSection";
import LinkLogoMarquee from "@/components/link-sections/logo-marquee";
import LinkTabbedFeatures from "@/components/link-sections/tabbed-features";
import LinkTestimonialsCarousel from "@/components/link-sections/testimonials-carousel";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

// Interactive Components
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

// Additional Strategic Components
import LinkUseCasesAccordion from "@/components/link-sections/use-cases-accordion";
import LinkCustomerStatsCards from "@/components/link-sections/customer-stats-cards";
import LinkPortfolioShowcase from "@/components/link-sections/portfolio-showcase";
import { LogoSection } from "@/components/LogosSection";
import LinkDevexVideoSection from "@/components/link-sections/devex-video-section";
import { HeroParallax, portfolioProducts } from "@/components/ui/hero-parallax";
import { HomepageStickyTabs } from "@/components/HomepageStickyTabs";
import IndustryExpandableSection from "@/components/IndustryExpandableSection";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { CaseStudiesShowcase } from "@/components/CaseStudiesShowcase";
import { LinkInnovationsHeroDemo } from "@/components/ui/hero-gallery-demo";

export default function Home() {
        return (
                <div className="w-full bg-black">
                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 1: IMMEDIATE IMPACT (0-3 seconds)
          Goal: Capture attention and establish credibility
          ═══════════════════════════════════════════════════════════════ */}

                        <PerformanceOptimizer />
                        <LinkInnovationsNavbar />

                        {/* Hero Section with Interactive Parallax Elements */}
                        <div className="relative">
                                <HeroGeometric
                                        badge="Link Innovations - Digital Excellence"
                                        title1="Transform Your Business"
                                        title2="With Cutting-Edge Technology"
                                />

                                {/* Interactive Parallax Floating Elements */}
                                <Floating sensitivity={0.8} easingFactor={0.08} className="pointer-events-none">
                                        {/* Floating Tech Icons */}
                                        <FloatingElement depth={1} className="top-20 left-10 opacity-20">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={2} className="top-32 right-16 opacity-15">
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded animate-bounce"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={1.5} className="top-48 left-1/4 opacity-25">
                                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-spin"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={0.8} className="top-64 right-1/3 opacity-20">
                                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                                        <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-cyan-400 rounded animate-pulse"></div>
                                                </div>
                                        </FloatingElement>

                                        {/* Floating Geometric Shapes */}
                                        <FloatingElement depth={1.2} className="top-80 left-12 opacity-15">
                                                <div className="w-8 h-8 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
                                        </FloatingElement>

                                        <FloatingElement depth={0.6} className="top-96 right-20 opacity-20">
                                                <div className="w-6 h-6 border-2 border-purple-400/30 rounded-full animate-bounce"></div>
                                        </FloatingElement>

                                        <FloatingElement depth={1.8} className="top-72 left-1/2 opacity-10">
                                                <div className="w-10 h-10 border-2 border-cyan-400/20 transform rotate-12 animate-spin"></div>
                                        </FloatingElement>
                                </Floating>
                        </div>

                        {/* ═══════════════════════════════════════════════════════════════
          HERO GALLERY SCROLL ANIMATION
          Goal: Showcase technology and innovation with scroll-triggered animations
          ═══════════════════════════════════════════════════════════════ */}

                        <LinkInnovationsHeroDemo />

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

                        {/* Service Showcase with Interactive Elements */}
                        <div className="relative">
                                <ServiceShowcase />

                                {/* Subtle floating elements for service section */}
                                <Floating sensitivity={0.5} easingFactor={0.06} className="pointer-events-none">
                                        <FloatingElement depth={0.8} className="top-10 left-8 opacity-10">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/5">
                                                        <div className="w-6 h-6 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full m-3 animate-pulse"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={1.2} className="top-20 right-12 opacity-8">
                                                <div className="w-8 h-8 border border-cyan-400/20 rounded-lg rotate-45 animate-spin"></div>
                                        </FloatingElement>

                                        <FloatingElement depth={0.6} className="top-32 left-1/3 opacity-12">
                                                <div className="w-6 h-6 border-2 border-green-400/15 rounded-full animate-bounce"></div>
                                        </FloatingElement>
                                </Floating>
                        </div>

                        <HomepageStickyTabs />
                        <LinkDevexVideoSection />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 5: INDUSTRY EXPERTISE (60-90 seconds)
          Goal: Show industry-specific solutions and use cases
          ═══════════════════════════════════════════════════════════════ */}

                        <IndustryExpandableSection />
                        <LinkUseCasesAccordion />
                        <LogoSection />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 6: SOCIAL PROOF & PORTFOLIO (90-120 seconds)
          Goal: Build trust through testimonials and showcase work
          ═══════════════════════════════════════════════════════════════ */}

                        <LinkCustomerStatsCards />
                        <LinkTestimonialsCarousel />
                        <CaseStudiesShowcase />

                        {/* Portfolio Showcase with Interactive Elements */}
                        <div className="relative">
                                <LinkPortfolioShowcase />

                                {/* Portfolio floating elements */}
                                <Floating sensitivity={0.6} easingFactor={0.07} className="pointer-events-none">
                                        <FloatingElement depth={1.1} className="top-16 left-16 opacity-12">
                                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/15 to-pink-500/15 backdrop-blur-sm border border-white/8">
                                                        <div className="w-7 h-7 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded m-3.5 animate-pulse"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={0.9} className="top-24 right-20 opacity-10">
                                                <div className="w-10 h-10 border-2 border-blue-400/25 rounded-full animate-bounce"></div>
                                        </FloatingElement>

                                        <FloatingElement depth={1.4} className="top-40 left-1/4 opacity-8">
                                                <div className="w-8 h-8 border border-cyan-400/20 transform rotate-45 animate-spin"></div>
                                        </FloatingElement>
                                </Floating>
                        </div>

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