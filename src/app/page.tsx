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

export default function Home() {
        return (
                <div className="w-full bg-black relative">
                        {/* Enhanced Background with Glassmorphism */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-indigo/5 to-accent-emerald/5"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.1),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1),transparent_50%)]"></div>
                        {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE HOMEPAGE - 12 SECTION OPTIMIZED STRUCTURE
          Following Microsoft/IBM/Oracle patterns with progressive disclosure
          ═══════════════════════════════════════════════════════════════ */}

                        <PerformanceOptimizer />
                        <NavigationMenuDemo />

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 1: FIRST IMPRESSION (0-10 seconds)
          Goal: Capture attention and establish immediate credibility
          ═══════════════════════════════════════════════════════════════ */}

                        {/* SECTION 1: Hero */}
                        <div className="relative glass-magic">
                                <HeroGeometric
                                        badge="Link Innovations - Innovation at Scale"
                                        title1="Engineering Digital Excellence"
                                        title2="That Transforms Business"
                                />

                                {/* Orbiting Circles Background Effect */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                                        <OrbitingCircles className="size-[40px] border-none bg-accent-cyan/30" duration={20} delay={0} radius={120}>
                                                <div className="size-3 rounded-full bg-accent-cyan" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[40px] border-none bg-accent-indigo/30" duration={20} delay={10} radius={120}>
                                                <div className="size-3 rounded-full bg-accent-indigo" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[50px] border-none bg-accent-emerald/30" radius={220} duration={25} reverse>
                                                <div className="size-4 rounded-full bg-accent-emerald" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[50px] border-none bg-accent-cyan/30" radius={220} duration={25} delay={12} reverse>
                                                <div className="size-4 rounded-full bg-accent-cyan" />
                                        </OrbitingCircles>
                                </div>

                                {/* Strategic Floating Elements - Enhanced with Glassmorphism */}
                                <Floating sensitivity={0.8} easingFactor={0.08} className="pointer-events-none">
                                        {/* Primary Tech Icon - Cyan with Glass Effect */}
                                        <FloatingElement depth={1} className="top-20 left-10 opacity-30">
                                                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-indigo rounded-full animate-pulse"></div>
                                                </div>
                                        </FloatingElement>

                                        {/* Secondary Tech Element - Indigo/Emerald with Glass Effect */}
                                        <FloatingElement depth={1.5} className="top-48 left-1/4 opacity-35">
                                                <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-accent-indigo to-accent-emerald rounded-full animate-spin"></div>
                                                </div>
                                        </FloatingElement>

                                        {/* Accent Geometric Shape - Cyan with Glass Effect */}
                                        <FloatingElement depth={1.2} className="top-80 left-12 opacity-25">
                                                <div className="w-8 h-8 glass-subtle border-2 border-accent-cyan/40 rotate-45 animate-pulse"></div>
                                        </FloatingElement>
                                </Floating>
                        </div>

                        {/* SECTION 2: Hero Preview Walls */}
                        <div className="glass-card">
                                <HeroPreviewWalls />
                        </div>

                        {/* SECTION 2A: Technology Partners - Immediate Credibility */}
                        <div className="glass-subtle">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-accent-cyan/10 to-accent-indigo/10", right: "from-accent-indigo/10 to-accent-emerald/10" }}>
                                        <LinkLogoMarquee />
                                </ParallaxSection>
                        </div>

                        {/* SECTION 2B: Hero Showcase - Alternative */}
                        <div className="glass-strong">
                                <HeroSection4 />
                        </div>

                        {/* SECTION 3: Trust Signals */}
                        <div className="glass-purple">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-accent-cyan/20 to-accent-indigo/20", right: "from-accent-indigo/20 to-accent-emerald/20" }}>
                                        <GridFeatureDemo />
                                </ParallaxSection>
                        </div>

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 2: CAPABILITY DISCOVERY (10-90 seconds)
          Goal: Showcase services, technology, and detailed capabilities
          ═══════════════════════════════════════════════════════════════ */}



                        {/* SECTION 4: Development Timeline */}
                        <div className="glass-cyan">
                                <LinkTimelineSection />
                        </div>

                        {/* SECTION 6: Technology Integration */}
                        <div className="relative glass-subtle">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-accent-cyan/20 to-accent-indigo/20", right: "from-accent-emerald/20 to-accent-indigo/20" }}>
                                        <div className="py-20 text-center">
                                                <h2 className="text-4xl font-light text-white mb-4">Seamless Integration</h2>
                                                <p className="text-white/70 max-w-2xl mx-auto">Connect with your existing systems and workflows</p>
                                        </div>
                                </ParallaxSection>
                                {/* Orbiting tech icons */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                                        <OrbitingCircles className="size-[30px] border-none bg-accent-emerald/30" duration={15} radius={100}>
                                                <div className="size-2 rounded-full bg-accent-emerald" />
                                        </OrbitingCircles>
                                        <OrbitingCircles className="size-[30px] border-none bg-accent-cyan/30" duration={15} delay={7} radius={100}>
                                                <div className="size-2 rounded-full bg-accent-cyan" />
                                        </OrbitingCircles>
                                </div>
                        </div>

                        {/* SECTION 7: Service Categories Showcase */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="light" addOrbs={false}>
                                        <LogoSection />
                                </ParallaxSection>
                        </div>

                        {/* SECTION 9: Service Showcase - Secondary */}
                        <div className="glass-purple">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-accent-emerald/20 to-accent-cyan/20", right: "from-accent-indigo/20 to-accent-cyan/20" }}>
                                        <ServiceShowcase />
                                </ParallaxSection>
                        </div>

                        {/* SECTION 9.5: Technology Stack - Below Service Cards */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="light" orbColors={{ left: "from-accent-cyan/20 to-accent-indigo/20", right: "from-accent-indigo/20 to-accent-emerald/20" }}>
                                        <TechnologyLogos />
                                </ParallaxSection>
                        </div>


                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 3: PROOF & VALIDATION (90-240 seconds)
          Goal: Build trust through testimonials, case studies, and portfolio
          ═══════════════════════════════════════════════════════════════ */}

                        {/* SECTION 11: Video Proof - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-blue">
                                        <ParallaxSection intensity="light" orbColors={{ left: "from-accent-cyan/20 to-accent-emerald/20", right: "from-accent-indigo/20 to-accent-cyan/20" }}>
                                                <LinkDevexVideoSection />
                                        </ParallaxSection>
                                </div>
                        </LazySection>

                        {/* SECTION 12: Case Studies - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-strong">
                                        <ParallaxSection intensity="heavy" orbColors={{ left: "from-accent-indigo/20 to-accent-cyan/20", right: "from-accent-emerald/20 to-accent-indigo/20" }}>
                                                <CaseStudiesShowcase />
                                        </ParallaxSection>
                                </div>
                        </LazySection>

                        {/* SECTION 13: Portfolio Grid - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-purple">
                                        <ParallaxSection intensity="medium" orbColors={{ left: "from-accent-cyan/20 to-accent-indigo/20", right: "from-accent-indigo/20 to-accent-emerald/20" }}>
                                                <LinkPortfolioShowcase />
                                        </ParallaxSection>
                                </div>
                        </LazySection>

                        {/* SECTION 13.5: 3D Gallery Showcase - Interactive Portfolio */}
                        <LazySection>
                                <div className="glass-magic">
                                        <GalleryDemo />
                                </div>
                        </LazySection>

                        {/* SECTION 14: Testimonials - Lazy Loaded */}
                        <LazySection>
                                <div className="glass-cyan">
                                        <AnimatedTestimonialsDemo />
                                </div>
                        </LazySection>

                        {/* ═══════════════════════════════════════════════════════════════
          PHASE 4: CONVERSION (240+ seconds)
          Goal: Drive action with immersive portfolio and clear CTAs
          ═══════════════════════════════════════════════════════════════ */}

                        {/* SECTION 15: Portfolio Parallax */}
                        <div className="glass-magic">
                                <ParallaxSection intensity="heavy" orbColors={{ left: "from-accent-cyan/20 to-accent-indigo/20", right: "from-accent-emerald/20 to-accent-cyan/20" }}>
                                        <HeroParallax products={portfolioProducts} />
                                </ParallaxSection>
                        </div>

                        {/* SECTION 16: Conversion */}
                        <div className="glass-strong">
                                <ParallaxSection intensity="medium" orbColors={{ left: "from-accent-indigo/20 to-accent-cyan/20", right: "from-accent-cyan/20 to-accent-emerald/20" }}>
                                        <CtaSection />
                                </ParallaxSection>
                        </div>

                        {/* Footer */}
                        <Footer />
                </div>
        );
}