"use client";

import LinkInnovationsNavbar from "@/components/LinkInnovationsNavbar";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import MarqueeTextAnimation from "@/components/MarqueeTextAnimation";
import MagicBento from "@/components/MagicBento";
import StatsCounter from "@/components/StatsCounter";
import { motion } from "motion/react";

export default function DataAnalyticsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <PerformanceOptimizer />
            <LinkInnovationsNavbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0a0a0f] relative min-h-screen flex items-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15),transparent_50%)]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm mb-8"
                        >
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                            Data Analytics & Intelligence
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                            Transform Data Into{" "}
                            <span className="font-normal italic bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                                Actionable Insights
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
                        >
                            Unlock the power of your data with advanced analytics, business intelligence, and real-time visualization tools that drive informed decision-making.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mb-12"
                        >
                            <div className="flex items-center gap-2">
                                <span className="font-mono">#1 IN DATA ACCURACY</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono">#1 IN INSIGHTS SPEED</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono">#1 IN VISUALIZATION</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Marquee Text Animation */}
            <MarqueeTextAnimation />

            {/* Magic Bento */}
            <section className="py-24 bg-[#0a0a0f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-light text-white mb-4">
                            Analytics{" "}
                            <span className="font-normal italic bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                                Capabilities
                            </span>
                        </h2>
                    </motion.div>
                    <MagicBento
                        enableSpotlight={true}
                        enableStars={true}
                        enableBorderGlow={true}
                        glowColor="236, 72, 153"
                    />
                </div>
            </section>

            {/* Stats */}
            <StatsCounter />

            <Footer />
        </div>
    );
}





