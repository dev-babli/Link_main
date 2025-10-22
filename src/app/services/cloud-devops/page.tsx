"use client";

import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { TimelineAnimation } from "@/components/TimelineAnimation";
import MagicBento from "@/components/MagicBento";
import StatsCounter from "@/components/StatsCounter";
import { ProfessionalServiceShowcase } from "@/components/ProfessionalServiceShowcase";
import { motion } from "motion/react";

export default function CloudDevOpsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <PerformanceOptimizer />
            <EnhancedNavigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0a0a0f] relative min-h-screen flex items-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]" />

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
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Cloud & DevOps Services
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                            Scalable{" "}
                            <span className="font-normal italic bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                                Cloud Infrastructure
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
                        >
                            Build, deploy, and scale with confidence. Our cloud solutions and DevOps practices ensure your applications run smoothly, securely, and efficiently.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mb-12"
                        >
                            <div className="flex items-center gap-2">
                                <span className="font-mono">#1 IN UPTIME</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono">#1 IN SCALABILITY</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono">#1 IN SECURITY</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Animation */}
            <TimelineAnimation />

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
                            Cloud{" "}
                            <span className="font-normal italic bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                                Technologies
                            </span>
                        </h2>
                    </motion.div>
                    <MagicBento
                        enableSpotlight={true}
                        enableStars={true}
                        enableBorderGlow={true}
                        glowColor="16, 185, 129"
                    />
                </div>
            </section>

            {/* Professional Showcase */}
            <ProfessionalServiceShowcase />

            {/* Stats */}
            <StatsCounter />

            <Footer />
        </div>
    );
}





