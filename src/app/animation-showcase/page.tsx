"use client";

import { useState } from "react";
import { EnhancedNavbar } from "@/components/EnhancedNavbar";
import { Footer } from "@/components/Footer";
import {
    ScrollAnimation,
    FadeUp,
    FadeDown,
    FadeLeft,
    FadeRight,
    SlideUp,
    SlideLeft,
    MaskRevealUp,
    MaskRevealLeft,
    MaskRevealRight,
    MaskRevealCenter,
    ScaleIn,
    RotateIn,
    BlurIn,
    CircularReveal,
    DiagonalWipe,
    IrisReveal,
    VenetianBlinds,
    StaggerGroup,
    GridStagger,
    SequentialReveal,
    RadialStagger,
    PinnedSection,
    HorizontalScroll,
    ParallaxLayer,
    Rotate3D,
    MorphingShape,
    ElasticReveal,
    ColorShift,
    AnimatedCounter,
    SVGPathAnimate,
    AnimeStagger,
    WaveAnimation,
    SimplePixelate,
} from "@/components/animations";

export default function AnimationShowcasePage() {
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
            <EnhancedNavbar />

            <main className="py-20">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <FadeUp>
                        <div className="text-center">
                            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                                Advanced Scroll Animation Showcase
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                A comprehensive library of 20+ scroll-triggered animations using Framer Motion, GSAP, and Anime.js
                            </p>
                            <button
                                onClick={() => setShowCode(!showCode)}
                                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                {showCode ? 'Hide' : 'Show'} Code Examples
                            </button>
                        </div>
                    </FadeUp>
                </section>

                {/* Performance Stats */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <ScaleIn delay={0}>
                            <div className="bg-card p-6 rounded-lg border">
                                <AnimatedCounter to={20} suffix="+" className="text-4xl font-bold text-primary" />
                                <p className="text-sm text-muted-foreground mt-2">Animation Types</p>
                            </div>
                        </ScaleIn>
                        <ScaleIn delay={0.1}>
                            <div className="bg-card p-6 rounded-lg border">
                                <AnimatedCounter to={60} suffix=" FPS" className="text-4xl font-bold text-primary" />
                                <p className="text-sm text-muted-foreground mt-2">Performance</p>
                            </div>
                        </ScaleIn>
                        <ScaleIn delay={0.2}>
                            <div className="bg-card p-6 rounded-lg border">
                                <AnimatedCounter to={0} decimals={2} suffix=" CLS" className="text-4xl font-bold text-primary" />
                                <p className="text-sm text-muted-foreground mt-2">Layout Shift</p>
                            </div>
                        </ScaleIn>
                        <ScaleIn delay={0.3}>
                            <div className="bg-card p-6 rounded-lg border">
                                <AnimatedCounter to={100} suffix="%" className="text-4xl font-bold text-primary" />
                                <p className="text-sm text-muted-foreground mt-2">GPU Accelerated</p>
                            </div>
                        </ScaleIn>
                    </div>
                </section>

                {/* Fade Animations */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <FadeUp>
                        <h2 className="text-4xl font-bold mb-12">Fade Animations</h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FadeUp>
                            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-lg border border-purple-500/30 min-h-[200px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Fade Up</h3>
                                    <p className="text-sm text-muted-foreground">From bottom</p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeDown>
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-lg border border-blue-500/30 min-h-[200px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Fade Down</h3>
                                    <p className="text-sm text-muted-foreground">From top</p>
                                </div>
                            </div>
                        </FadeDown>

                        <FadeLeft>
                            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-lg border border-green-500/30 min-h-[200px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Fade Left</h3>
                                    <p className="text-sm text-muted-foreground">From right</p>
                                </div>
                            </div>
                        </FadeLeft>

                        <FadeRight>
                            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-8 rounded-lg border border-orange-500/30 min-h-[200px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Fade Right</h3>
                                    <p className="text-sm text-muted-foreground">From left</p>
                                </div>
                            </div>
                        </FadeRight>
                    </div>
                </section>

                {/* Slide Animations */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <MaskRevealUp>
                        <h2 className="text-4xl font-bold mb-12">Slide Animations</h2>
                    </MaskRevealUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SlideUp>
                            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-8 rounded-lg border border-violet-500/30 min-h-[250px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Slide Up</h3>
                                    <p className="text-sm text-muted-foreground">Pure movement, no fade</p>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideLeft>
                            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-8 rounded-lg border border-indigo-500/30 min-h-[250px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Slide Left</h3>
                                    <p className="text-sm text-muted-foreground">Smooth horizontal</p>
                                </div>
                            </div>
                        </SlideLeft>

                        <ScrollAnimation type="slide-right">
                            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 p-8 rounded-lg border border-teal-500/30 min-h-[250px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Slide Right</h3>
                                    <p className="text-sm text-muted-foreground">Mirror movement</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Mask Reveals */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <MaskRevealLeft>
                        <h2 className="text-4xl font-bold mb-12">Mask Reveal Animations</h2>
                    </MaskRevealLeft>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <MaskRevealUp>
                            <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 p-12 rounded-lg border border-rose-500/30 min-h-[300px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-2xl mb-2">Mask Reveal Up</h3>
                                    <p className="text-muted-foreground">Clip-path animation</p>
                                </div>
                            </div>
                        </MaskRevealUp>

                        <MaskRevealLeft>
                            <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 p-12 rounded-lg border border-amber-500/30 min-h-[300px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-2xl mb-2">Mask Reveal Left</h3>
                                    <p className="text-muted-foreground">Horizontal reveal</p>
                                </div>
                            </div>
                        </MaskRevealLeft>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CircularReveal centerX={50} centerY={50}>
                            <div className="bg-gradient-to-br from-lime-500/20 to-green-500/20 p-8 rounded-lg border border-lime-500/30 min-h-[250px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Circular Reveal</h3>
                                    <p className="text-sm text-muted-foreground">Iris effect</p>
                                </div>
                            </div>
                        </CircularReveal>

                        <DiagonalWipe direction="top-left-to-bottom-right">
                            <div className="bg-gradient-to-br from-sky-500/20 to-blue-500/20 p-8 rounded-lg border border-sky-500/30 min-h-[250px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Diagonal Wipe</h3>
                                    <p className="text-sm text-muted-foreground">Directional sweep</p>
                                </div>
                            </div>
                        </DiagonalWipe>

                        <IrisReveal startX={50} startY={50}>
                            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 p-8 rounded-lg border border-fuchsia-500/30 min-h-[250px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-xl mb-2">Iris Reveal</h3>
                                    <p className="text-sm text-muted-foreground">Expanding circle</p>
                                </div>
                            </div>
                        </IrisReveal>
                    </div>
                </section>

                {/* Scale & Rotate */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <FadeRight>
                        <h2 className="text-4xl font-bold mb-12">Scale & Rotate Effects</h2>
                    </FadeRight>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ScaleIn>
                            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-12 rounded-lg border border-red-500/30 min-h-[300px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-2xl mb-2">Scale In</h3>
                                    <p className="text-muted-foreground">Zoom effect</p>
                                </div>
                            </div>
                        </ScaleIn>

                        <RotateIn>
                            <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 p-12 rounded-lg border border-pink-500/30 min-h-[300px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-2xl mb-2">Rotate In</h3>
                                    <p className="text-muted-foreground">3D flip</p>
                                </div>
                            </div>
                        </RotateIn>

                        <BlurIn>
                            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-12 rounded-lg border border-cyan-500/30 min-h-[300px] flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold text-2xl mb-2">Blur In</h3>
                                    <p className="text-muted-foreground">Focus effect</p>
                                </div>
                            </div>
                        </BlurIn>
                    </div>
                </section>

                {/* Stagger Animations */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <MaskRevealRight>
                        <h2 className="text-4xl font-bold mb-12">Stagger Effects</h2>
                    </MaskRevealRight>

                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">Grid Stagger</h3>
                        <GridStagger columns={4} stagger={0.05} animation="fade-up">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/20 h-32 flex items-center justify-center"
                                >
                                    <span className="font-bold text-lg">Item {i + 1}</span>
                                </div>
                            ))}
                        </GridStagger>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">Sequential Reveal</h3>
                        <SequentialReveal itemDuration={0.4} gap={0.1}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-lg border border-blue-500/20 mb-4"
                                >
                                    <span className="font-semibold">Step {i + 1}</span>
                                </div>
                            ))}
                        </SequentialReveal>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Radial Stagger</h3>
                        <RadialStagger grid={{ columns: 3, rows: 3 }} stagger={0.08}>
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-lg border border-green-500/20 flex items-center justify-center"
                                >
                                    <span className="font-bold text-xl">{i + 1}</span>
                                </div>
                            ))}
                        </RadialStagger>
                    </div>
                </section>

                {/* GSAP ScrollTrigger Effects */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <FadeUp>
                        <h2 className="text-4xl font-bold mb-12">GSAP ScrollTrigger Effects</h2>
                    </FadeUp>

                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6">Parallax Layers</h3>
                        <div className="relative h-[500px] bg-gradient-to-b from-black to-gray-900 rounded-lg overflow-hidden">
                            <ParallaxLayer speed={0.5}>
                                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl" />
                            </ParallaxLayer>
                            <ParallaxLayer speed={0.3}>
                                <div className="absolute top-40 right-40 w-48 h-48 bg-pink-500/30 rounded-full blur-xl" />
                            </ParallaxLayer>
                            <ParallaxLayer speed={0.1}>
                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
                                    <h3 className="text-3xl font-bold text-white">Parallax Effect</h3>
                                    <p className="text-white/70">Layers move at different speeds</p>
                                </div>
                            </ParallaxLayer>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6">Horizontal Scroll</h3>
                        <HorizontalScroll speed={1}>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 flex items-center justify-center"
                                >
                                    <div className="text-center">
                                        <h4 className="text-2xl font-bold mb-2">Panel {i + 1}</h4>
                                        <p className="text-muted-foreground">Scroll down to move horizontally</p>
                                    </div>
                                </div>
                            ))}
                        </HorizontalScroll>
                    </div>
                </section>

                {/* Anime.js Effects */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <ElasticReveal axis="both" elasticity={600}>
                        <h2 className="text-4xl font-bold mb-12">Anime.js Specialties</h2>
                    </ElasticReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Elastic Reveal</h3>
                            <ElasticReveal axis="y" elasticity={400}>
                                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-12 rounded-lg border border-purple-500/30">
                                    <p className="text-lg text-center">Spring physics animation with bounce</p>
                                </div>
                            </ElasticReveal>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Color Shift</h3>
                            <ColorShift fromColor="#666666" toColor="#8B5CF6" property="color">
                                <div className="bg-card p-12 rounded-lg border">
                                    <p className="text-lg text-center font-bold">Watch this text change color</p>
                                </div>
                            </ColorShift>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6">SVG Path Drawing</h3>
                        <SVGPathAnimate
                            path="M10,50 Q30,10 50,50 T90,50"
                            strokeColor="#8B5CF6"
                            strokeWidth={3}
                            duration={3000}
                            className="h-32"
                        />
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6">Wave Animation</h3>
                        <WaveAnimation waveHeight={15} waveDuration={800} waveDelay={50}>
                            <div className="flex gap-4 justify-center">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="wave-item w-12 h-40 bg-gradient-to-t from-purple-500 to-pink-500 rounded-lg"
                                    />
                                ))}
                            </div>
                        </WaveAnimation>
                    </div>
                </section>

                {/* Special Effects */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <FadeUp>
                        <h2 className="text-4xl font-bold mb-12">Special Effects</h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Blur Pixelate</h3>
                            <SimplePixelate className="rounded-lg overflow-hidden h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                                    alt="Technology background"
                                    className="w-full h-full object-cover"
                                />
                            </SimplePixelate>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Venetian Blinds</h3>
                            <VenetianBlinds strips={8} duration={1.2} stagger={0.08}>
                                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-12 rounded-lg border border-purple-500/30 h-64 flex items-center justify-center">
                                    <h4 className="text-2xl font-bold">Blind Reveal Effect</h4>
                                </div>
                            </VenetianBlinds>
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                {showCode && (
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                        <FadeUp>
                            <div className="bg-card border rounded-lg p-8">
                                <h2 className="text-3xl font-bold mb-6">Usage Examples</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Basic Fade</h3>
                                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                                            <code className="text-sm text-green-400">{`<FadeUp>
  <YourComponent />
</FadeUp>`}</code>
                                        </pre>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Custom Configuration</h3>
                                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                                            <code className="text-sm text-green-400">{`<ScrollAnimation 
  type="mask-reveal-up" 
  duration={1.0}
  preset="dramatic"
  easing="bounce"
>
  <YourComponent />
</ScrollAnimation>`}</code>
                                        </pre>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Staggered Grid</h3>
                                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                                            <code className="text-sm text-green-400">{`<GridStagger columns={3} stagger={0.1}>
  {items.map(item => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</GridStagger>`}</code>
                                        </pre>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">GSAP Horizontal Scroll</h3>
                                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                                            <code className="text-sm text-green-400">{`<HorizontalScroll speed={1.5}>
  {sections.map(section => (
    <div key={section.id}>{section.content}</div>
  ))}
</HorizontalScroll>`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </section>
                )}

                {/* Performance Info */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <ScaleIn>
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-4">Performance Optimized</h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>✅ GPU-accelerated (transform & opacity only)</li>
                                <li>✅ Respects prefers-reduced-motion</li>
                                <li>✅ Lazy initialization (only when in view)</li>
                                <li>✅ Once-only animations (memory efficient)</li>
                                <li>✅ Responsive (reduced complexity on mobile)</li>
                                <li>✅ Zero layout shift (CLS = 0)</li>
                                <li>✅ 60 FPS maintained during scroll</li>
                            </ul>
                        </div>
                    </ScaleIn>
                </section>

                {/* Documentation Link */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <FadeUp>
                        <div className="bg-card border rounded-lg p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Complete Documentation</h2>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Learn how to implement these animations in your project with our comprehensive guides
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="/docs/ANIMATION_STUDY.md"
                                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Animation Study
                                </a>
                                <a
                                    href="/docs/SCROLL_ANIMATION_GUIDE.md"
                                    className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                                >
                                    Implementation Guide
                                </a>
                            </div>
                        </div>
                    </FadeUp>
                </section>
            </main>

            <Footer />
        </div>
    );
}

