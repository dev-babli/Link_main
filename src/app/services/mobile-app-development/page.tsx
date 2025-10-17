"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone, Cloud, Wifi, Battery, Shield, Zap, Cpu, Code2,
  ArrowRight, Star, Award, CheckCircle, Globe, Layers, Rocket
} from "lucide-react";
import { EnhancedNavbar } from "@/components/EnhancedNavbar";
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
    { text: "Need to reach both iOS and Android users without double development costs" },
    { text: "Poor app performance leading to high uninstall rates and negative reviews" },
    { text: "Difficulty maintaining feature parity across multiple platforms" },
    { text: "Challenges with offline functionality and data synchronization" },
    { text: "Long development cycles delaying time-to-market" },
  ];

  const capabilities = [
    {
      icon: "📱",
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter. Reach both iOS and Android users with a single, maintainable codebase.",
      useCases: [
        "Consumer mobile apps",
        "Enterprise mobility solutions",
        "E-commerce applications",
        "Social networking platforms"
      ],
      outcomes: [
        "40% faster development",
        "Single codebase maintenance",
        "Native-like performance"
      ]
    },
    {
      icon: "🎯",
      title: "Native iOS & Android",
      description: "Pure native development for apps requiring maximum performance, platform-specific features, or complex hardware integration.",
      useCases: [
        "High-performance gaming",
        "AR/VR applications",
        "Hardware-intensive apps",
        "Platform-specific features"
      ],
      outcomes: [
        "Maximum performance",
        "Full platform access",
        "Optimal user experience"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud Integration",
      description: "Seamless backend integration with Firebase, AWS, Azure, and custom APIs for real-time data sync and scalability.",
      useCases: [
        "Real-time collaboration",
        "Cloud storage solutions",
        "Push notifications",
        "Backend as a Service"
      ],
      outcomes: [
        "Real-time synchronization",
        "Scalable infrastructure",
        "Reduced backend costs"
      ]
    },
    {
      icon: "📡",
      title: "Offline-First Architecture",
      description: "Build apps that work flawlessly without internet connectivity. Local-first data storage with intelligent sync mechanisms.",
      useCases: [
        "Field service applications",
        "Travel and transportation",
        "Healthcare apps",
        "Remote work tools"
      ],
      outcomes: [
        "100% offline functionality",
        "Improved user experience",
        "Higher app reliability"
      ]
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Lightning-fast apps with optimized rendering, efficient memory management, and battery-conscious design.",
      useCases: [
        "Media and entertainment",
        "Data-intensive apps",
        "Gaming applications",
        "Real-time processing"
      ],
      outcomes: [
        "60fps smooth animations",
        "Reduced battery drain",
        "Faster load times"
      ]
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security with encryption, secure authentication, and compliance with GDPR, HIPAA, and industry standards.",
      useCases: [
        "Banking and fintech",
        "Healthcare applications",
        "Enterprise solutions",
        "Payment processing"
      ],
      outcomes: [
        "Bank-level security",
        "Regulatory compliance",
        "Data protection"
      ]
    },
  ];

  const deliverySteps = [
    {
      title: "Discovery & Planning",
      duration: "Week 1-2",
      description: "Comprehensive requirement gathering, user research, and technical feasibility analysis. Define app architecture and create detailed project roadmap."
    },
    {
      title: "UX/UI Design",
      duration: "Week 3-4",
      description: "Create wireframes, interactive prototypes, and pixel-perfect designs following iOS Human Interface Guidelines and Material Design principles."
    },
    {
      title: "Development Sprint",
      duration: "Week 5-10",
      description: "Agile development with bi-weekly sprints. Build features iteratively with continuous feedback and testing on real devices."
    },
    {
      title: "Testing & QA",
      duration: "Week 11-12",
      description: "Comprehensive testing including unit tests, integration tests, UI tests, and device-specific testing across multiple screen sizes and OS versions."
    },
    {
      title: "Deployment & Support",
      duration: "Week 13-14",
      description: "App Store and Play Store submission, launch support, performance monitoring, and continuous improvement based on user feedback."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <EnhancedNavbar />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Mobile App Development"
        subtitle="Cross-Platform & Native Excellence"
        description="Deliver seamless mobile experiences with React Native, Flutter, or native iOS/Android. Built for performance, offline capabilities, and cloud integration."
        primaryCTA={{
          text: "Start Mobile Discovery",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Mobile Cases",
          href: "#capabilities"
        }}
        imageUrl="/WhatsApp Image 2025-10-12 at 1.16.43 AM (5).jpeg"
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
              label="Faster Development"
              description="With cross-platform approach"
              gradient="primary"
            />
            <StatisticCounter
              value={4}
              suffix=".8"
              label="Average Rating"
              description="On app stores"
              gradient="secondary"
            />
            <StatisticCounter
              value={99}
              suffix="%"
              label="Crash-Free Rate"
              description="Post-launch stability"
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
        subtitle="Common pain points in mobile development"
        problems={problems}
      />

      {/* Capabilities Grid */}
      <ServiceCapabilitiesGrid
        title="Mobile Development Capabilities"
        subtitle="End-to-end mobile solutions"
        description="From concept to deployment, we build mobile apps that users love and businesses depend on."
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
        title="Mobile App Development Process"
        subtitle="From idea to App Store in 14 weeks"
        steps={deliverySteps}
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Build Your Mobile App?"
        subtitle="Let's create something amazing"
        description="Schedule a free consultation to discuss your mobile app project. We'll help you choose the right technology and create a roadmap to success."
        buttons={[
          {
            text: "Start Your Project",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "See Our Work",
            href: "/portfolio",
            variant: "secondary",
            icon: "ArrowRight"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
