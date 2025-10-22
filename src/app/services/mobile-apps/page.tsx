"use client";

import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { TimelineAnimation } from "@/components/TimelineAnimation";
import NeuralNetwork from "@/components/NeuralNetwork";
import StatsCounter from "@/components/StatsCounter";
import { motion } from "motion/react";

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <PerformanceOptimizer />
      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]" />

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
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Mobile App Development
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Native & Cross-Platform{" "}
              <span className="font-normal italic bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Mobile Solutions
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
            >
              Build powerful mobile applications for iOS and Android. From concept to App Store, we deliver mobile experiences that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mb-12"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono">#1 IN USER ENGAGEMENT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono">#1 IN APP PERFORMANCE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono">#1 IN APP RATINGS</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Animation */}
      <TimelineAnimation />

      {/* Neural Network Visualization */}
      <section className="py-24 bg-[#0a0a0f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-4">
              Our{" "}
              <span className="font-normal italic bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-white/60">
              Visualizing complex workflows with intelligent automation
            </p>
          </motion.div>
          <NeuralNetwork
            width={800}
            height={400}
            layers={[3, 5, 5, 3]}
            colors={['#3B82F6', '#8B5CF6', '#EC4899', '#10B981']}
          />
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0f] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Launch Your{" "}
              <span className="font-normal italic bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Mobile App?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Let's create an app that your users will love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 rounded-lg transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}





