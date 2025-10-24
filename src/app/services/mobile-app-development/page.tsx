"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone, Cloud, Wifi, Battery, Shield, Zap, Cpu, Code2,
  ArrowRight, Star, Award, CheckCircle, Globe, Layers, Rocket
} from "lucide-react";
import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import { Footer } from "@/components/Footer";
import {
  ServiceHero,
  ProblemsWeSolve,
  ServiceCapabilitiesGrid,
  DeliveryTimeline,
  ServiceCTA,
  GlassmorphicCard,
  IconFeatureCard,
  StatisticCounter
} from "@/components/ServiceComponents";

/**
 * Mobile App Development Service Page - Enhanced
 * Cross-Platform & Native Excellence
 */
export default function MobileAppDevelopmentPage() {
  const problems = [
    { text: "Slow time-to-market for native apps" },
    { text: "Fragmented user experiences across platforms" },
    { text: "Offline and sync challenges in low-connectivity regions" },
    { text: "Complex app store submissions and versioning" },
  ];

  const capabilities = [
    {
      icon: "📱",
      title: "Cross-Platform App Development (React Native / Flutter)",
      description: "Single codebase for Android & iOS.",
      useCases: [
        "Consumer apps",
        "Employee apps",
        "Field apps"
      ],
      outcomes: [
        "Faster delivery",
        "Lower maintenance costs"
      ]
    },
    {
      icon: "🎯",
      title: "Native App Enhancements (iOS & Android)",
      description: "Device-specific modules: camera, sensors, biometrics.",
      useCases: [
        "AR",
        "Advanced sensors",
        "Background processing"
      ],
      outcomes: [
        "Native-grade performance where needed"
      ]
    },
    {
      icon: "📡",
      title: "Offline-First & Sync Architecture",
      description: "Local-first storage and conflict resolution strategies.",
      useCases: [
        "Field data collection",
        "Intermittent networks"
      ],
      outcomes: [
        "Reliable user experience",
        "Data integrity"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud-Integrated Mobile Apps",
      description: "Real-time sync, push notifications, secure API integration.",
      useCases: [
        "Messaging apps",
        "Real-time dashboards"
      ],
      outcomes: [
        "Engaging, connected mobile experiences"
      ]
    },
    {
      icon: "📊",
      title: "App Store Deployment & Analytics",
      description: "Store listing, CI/CD, crash analytics, and A/B testing.",
      useCases: [
        "Launches",
        "Continuous improvement"
      ],
      outcomes: [
        "Smoother releases",
        "Better retention"
      ]
    },
  ];

  const deliverySteps = [
    {
      title: "Discovery & Design",
      duration: "Week 1-2",
      description: "UX, wireframes, device flows."
    },
    {
      title: "Build",
      duration: "Week 3-8",
      description: "Cross-platform/core native modules."
    },
    {
      title: "Test",
      duration: "Week 9-10",
      description: "Device lab, automation, crash monitoring."
    },
    {
      title: "Release & Monitor",
      duration: "Week 11-12",
      description: "Store release, analytics, iteration."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Mobile App Development — Cross-Platform & Native"
        subtitle="Fast-to-market mobile apps with native capabilities and cloud integration."
        description="Deliver responsive, offline-capable mobile apps with analytics and CI/CD for scalable releases."
        primaryCTA={{
          text: "Start Mobile Discovery",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "See Mobile Cases",
          href: "#capabilities"
        }}
        imageUrl="/images/services/mobile-app-development/hero-mobile-apps.jpg"
      />

      {/* Technology Logos */}
      <section className="py-12 bg-gradient-to-r from-[#0a0a0a] via-[#0f1724] to-[#0a0a0a] border-y border-[#00D1BF]/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[#00D1BF] mb-8 font-semibold uppercase tracking-wider"
          >
            Mobile-first technologies we master
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {["React Native", "Flutter", "Firebase", "App Store", "Play Store", "Expo"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-[#a8b3be] font-semibold opacity-60 hover:opacity-100 hover:text-[#00D1BF] transition-all duration-300"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D1BF_1px,transparent_1px),linear-gradient(to_bottom,#00D1BF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-['Orbitron']">
              <span className="bg-gradient-to-r from-[#ffffff] via-[#e6f0f6] to-[#00D1BF] bg-clip-text text-transparent">
                Mobile Excellence Metrics
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatisticCounter
              value={40}
              suffix="%"
              label="Time-to-market reduction"
              description="With cross-platform"
              gradient="primary"
            />
            <StatisticCounter
              value={99}
              suffix="%"
              label="Crash rate reduced"
              description="Via CI/CD and monitoring"
              gradient="secondary"
            />
            <StatisticCounter
              value={98}
              suffix="%"
              label="Field data availability"
              description="Improved retention"
              gradient="accent"
            />
            <StatisticCounter
              value={200}
              suffix="+"
              label="Apps Delivered"
              description="Across platforms"
              gradient="warm"
            />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <ProblemsWeSolve
        title="Mobile Challenges We Solve"
        problems={problems}
      />

      {/* Capabilities Grid */}
      <ServiceCapabilitiesGrid
        title="Mobile Development Capabilities"
        intro="From concept to deployment, we build mobile apps that users love and businesses depend on."
        capabilities={capabilities}
      />

      {/* Why Choose Us for Mobile */}
      <section className="py-20 bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000] relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-['Orbitron']">
              <span className="bg-gradient-to-r from-[#ffffff] via-[#e6f0f6] to-[#00D1BF] bg-clip-text text-transparent">
                Why Choose Us for Mobile
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Platform Expertise"
              description="Deep knowledge of iOS, Android, and cross-platform frameworks with proven track record"
              variant="centered"
              gradient="primary"
            />
            <IconFeatureCard
              icon={<Rocket className="w-8 h-8" />}
              title="Rapid Delivery"
              description="Agile methodology with 2-week sprints ensures fast time-to-market without compromising quality"
              variant="centered"
              gradient="secondary"
            />
            <IconFeatureCard
              icon={<Star className="w-8 h-8" />}
              title="User-Centric Design"
              description="Beautiful, intuitive interfaces that delight users and drive engagement"
              variant="centered"
              gradient="accent"
            />
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <DeliveryTimeline
        title="Mobile delivery model"
        subtitle="Typical timeline: MVP (6–10 weeks), Production (ongoing improvements)"
        steps={deliverySteps}
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Build Your Mobile App?"
        subtitle="Let's create something amazing"
        description="Schedule a free consultation to discuss your mobile app project. We'll help you choose the right technology and create a roadmap to success."
        buttons={[
          {
            text: "Start Mobile Discovery",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "See Mobile Cases",
            href: "/portfolio",
            variant: "secondary",
            icon: "arrow"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
