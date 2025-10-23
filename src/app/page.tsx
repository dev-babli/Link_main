"use client";

/**
 * Link Innovations - Enterprise Homepage
 * Unified Design System - Swiss Design Principles
 * Color Palette: Cyan (#00D9FF), Indigo (#6366F1), Emerald (#10B981)
 * Typography: Mango Grotesque (Headings), Inter (Body)
 * 17 Strategic Components - Conversion & Showcase Optimized
 */

// Essential Components
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import NavigationMenuDemo from "@/components/ui/navigation-menu-demo";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { HeroPreviewWalls } from "@/components/ui/hero-preview-walls";
import { ParallaxSection } from "@/components/ui/parallax-section";
import GridFeatureDemo from "@/components/ui/grid-feature-demo";
import LinkLogoMarquee from "@/components/link-sections/logo-marquee";
import LinkTimelineSection from "@/components/link-sections/timeline-section";
import LinkTestimonialsCarousel from "@/components/link-sections/testimonials-carousel";
import { AnimatedTestimonialsDemo } from "@/components/demos/animated-testimonials-demo";
import { HeroSection4 } from "@/components/ui/hero-section-4";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

// Interactive Components
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import GalleryDemo from "@/components/ui/3d-gallery-demo";

// Additional Strategic Components
import LinkPortfolioShowcase from "@/components/link-sections/portfolio-showcase";
import { LogoSection } from "@/components/LogosSection";
import LinkDevexVideoSection from "@/components/link-sections/devex-video-section";
import { HeroParallax, portfolioProducts } from "@/components/ui/hero-parallax";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { CaseStudiesShowcase } from "@/components/CaseStudiesShowcase";
import TechnologyLogos from "@/components/TechnologyLogos";
import LazySection from "@/components/ui/lazy-section";
import { Skiper52 } from "@/components/ui/skiper-ui/skiper52";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";
import IndustrySection from "@/components/IndustrySection";

export default function Home() {
        return (
                <div className="w-full bg-black relative">
                        {/* Enhanced Background with Modern Color Palette */}
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(240,211,247,0.05), rgba(185,142,167,0.05), rgba(165,121,130,0.05))' }}></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,211,247,0.1),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,142,167,0.1),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(165,121,130,0.1),transparent_50%)]"></div>
                        {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE HOMEPAGE - 12 SECTION OPTIMIZED STRUCTURE
          Following Microsoft/IBM/Oracle patterns with progressive disclosure
          ═══════════════════════════════════════════════════════════════ */}

                        <PerformanceOptimizer />
                        <NavigationMenuDemo />

                        {/* ═══════════════════════════════════════════════════════════════
          NEW COMPONENT ORDER - MODERN COLOR PALETTE
          Following the specified order with thistle, puce, mountbatten-pink, space-cadet, russian-violet
          ═══════════════════════════════════════════════════════════════ */}

                        {/* 1. HeroGeometric with OrbitingCircles & Floating elements */}
                        <div className="relative glass-magic">
                                <HeroGeometric
                                        badge="Link Innovations - Innovation at Scale"
                                        title1="Engineering Digital Excellence"
                                        title2="That Transforms Business"
                                />

                                {/* Orbiting Circles Background Effect - Updated Colors */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                                        <OrbitingCircles className="size-[40px] border-none bg-[#f0d3f7]/30" duration={20} delay={0} radius={120}>
                                                <div className="size-3 rounded-full bg-[#f0d3f7]" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[40px] border-none bg-[#b98ea7]/30" duration={20} delay={10} radius={120}>
                                                <div className="size-3 rounded-full bg-[#b98ea7]" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[50px] border-none bg-[#a57982]/30" radius={220} duration={25} reverse>
                                                <div className="size-4 rounded-full bg-[#a57982]" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[50px] border-none bg-[#302f4d]/30" radius={220} duration={25} delay={12} reverse>
                                                <div className="size-4 rounded-full bg-[#302f4d]" />
                                        </OrbitingCircles>
                                </div>

                                {/* Strategic Floating Elements - Updated Colors */}
                                <Floating sensitivity={0.8} easingFactor={0.08} className="pointer-events-none">
                                        <FloatingElement depth={1} className="top-20 left-10 opacity-30">
                                                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
                                                        <div className="w-8 h-8 rounded-full animate-pulse bg-gradient-to-br from-[#f0d3f7] to-[#b98ea7]"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={1.5} className="top-48 left-1/4 opacity-35">
                                                <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center">
                                                        <div className="w-10 h-10 rounded-full animate-spin bg-gradient-to-br from-[#b98ea7] to-[#a57982]"></div>
                                                </div>
                                        </FloatingElement>

                                        <FloatingElement depth={1.2} className="top-80 left-12 opacity-25">
                                                <div className="w-8 h-8 glass-subtle border-2 rotate-45 animate-pulse border-[#f0d3f7]/40"></div>
                                        </FloatingElement>
                                </Floating>
                        </div>

                        {/* 2. GridFeatureDemo */}
                        <div className="glass-purple">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-[#f0d3f7]/20 to-[#b98ea7]/20", right: "from-[#b98ea7]/20 to-[#a57982]/20" }}>
                                        <GridFeatureDemo />
                                </ParallaxSection>
                        </div>

                        {/* 3. TechnologyLogos */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-[#f0d3f7]/20 to-[#b98ea7]/20", right: "from-[#b98ea7]/20 to-[#a57982]/20" }}>
                                        <TechnologyLogos />
                                </ParallaxSection>
                        </div>

                        {/* 4. ServiceShowcase */}
                        <div className="glass-purple">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-[#a57982]/20 to-[#f0d3f7]/20", right: "from-[#302f4d]/20 to-[#f0d3f7]/20" }}>
                                        <ServiceShowcase />
                                </ParallaxSection>
                        </div>

                        {/* 5. LinkTimelineSection */}
                        <div className="glass-cyan">
                                <LinkTimelineSection />
                        </div>

                        {/* 6. Skiper52 (Modified Industry Section) */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-[#f0d3f7]/20 to-[#b98ea7]/20", right: "from-[#b98ea7]/20 to-[#a57982]/20" }}>
                                        <Skiper52 />
                                </ParallaxSection>
                        </div>

                        {/* 7. HeroPreviewWalls */}
                        <div className="glass-card">
                                <HeroPreviewWalls />
                        </div>

                        {/* 8. LinkLogoMarquee */}
                        <div className="glass-subtle">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-[#f0d3f7]/10 to-[#b98ea7]/10", right: "from-[#b98ea7]/10 to-[#a57982]/10" }}>
                                        <LinkLogoMarquee />
                                </ParallaxSection>
                        </div>

                        {/* 9. AnimatedTestimonialsDemo */}
                        <LazySection>
                                <div className="glass-cyan">
                                        <AnimatedTestimonialsDemo />
                                </div>
                        </LazySection>

                        {/* 11. LogoSection */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="light" addOrbs={false}>
                                        <LogoSection />
                                </ParallaxSection>
                        </div>

                        {/* 12. LinkDevexVideoSection - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-blue">
                                        <ParallaxSection intensity="light" orbColors={{ left: "from-[#f0d3f7]/20 to-[#a57982]/20", right: "from-[#302f4d]/20 to-[#f0d3f7]/20" }}>
                                                <LinkDevexVideoSection />
                                        </ParallaxSection>
                                </div>
                        </LazySection>

                        {/* 13. CaseStudiesShowcase - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-strong">
                                        <ParallaxSection intensity="heavy" orbColors={{ left: "from-[#302f4d]/20 to-[#f0d3f7]/20", right: "from-[#a57982]/20 to-[#302f4d]/20" }}>
                                                <CaseStudiesShowcase />
                                        </ParallaxSection>
                                </div>
                        </LazySection>

                        {/* 14. LinkPortfolioShowcase - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-purple">
                                        <ParallaxSection intensity="medium" orbColors={{ left: "from-[#f0d3f7]/20 to-[#b98ea7]/20", right: "from-[#b98ea7]/20 to-[#a57982]/20" }}>
                                                <LinkPortfolioShowcase />
                                        </ParallaxSection>
                                </div>
                        </LazySection>

                        {/* 15. GalleryDemo - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-magic">
                                        <GalleryDemo />
                                </div>
                        </LazySection>

                        {/* 16. Skiper31 - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-magic">
                                        <Skiper31 />
                                </div>
                        </LazySection>

                        {/* 17. HeroSection4 */}
                        <div className="glass-magic">
                                <HeroSection4 />
                        </div>

                        {/* 18. CtaSection */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="medium" orbColors={{ left: "from-[#302f4d]/20 to-[#f0d3f7]/20", right: "from-[#f0d3f7]/20 to-[#a57982]/20" }}>
                                        <CtaSection />
                                </ParallaxSection>
                        </div>

                        {/* Footer */}
                        <Footer />
                </div>
        );
}