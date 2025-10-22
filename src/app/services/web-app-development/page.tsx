"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code, Database, Shield, Zap, Cpu, Globe,
  ArrowRight, Star, Award, CheckCircle, Layers, Server
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
 * Web App Development Service Page - Enhanced
 * Modern, Scalable & Accessible
 */
export default function WebAppDevelopmentPage() {
  const problems = [
    { text: "Slow, unmaintainable legacy web platforms" },
    { text: "Poor user experience and accessibility gaps" },
    { text: "Monolithic architectures that hinder scaling" },
    { text: "Fragmented data and poor integrations" },
  ];

  const capabilities = [
    {
      icon: "⚡",
      title: "Custom Web Application Development",
      description: "Tailored applications using React, Next.js, and TypeScript.",
      useCases: [
        "SaaS platforms",
        "Marketplaces",
        "Internal tools"
      ],
      outcomes: [
        "Modular, testable, scalable codebases"
      ]
    },
    {
      icon: "📝",
      title: "CMS & Content Platforms",
      description: "Headless CMS using Sanity, Strapi, or custom API-first CMS.",
      useCases: [
        "Marketing sites",
        "Blogs",
        "Knowledge bases"
      ],
      outcomes: [
        "Easy content management",
        "Multi-language support"
      ]
    },
    {
      icon: "📊",
      title: "Enterprise Portals & Dashboards",
      description: "Data-driven portals with BI integrations and role-based access.",
      useCases: [
        "Operations portals",
        "Executive dashboards"
      ],
      outcomes: [
        "Actionable insights",
        "Secure access controls"
      ]
    },
    {
      icon: "🔗",
      title: "API Development & System Integration",
      description: "REST/GraphQL APIs, microservices architecture, and secure integrations.",
      useCases: [
        "Payment gateways",
        "Third-party integrations"
      ],
      outcomes: [
        "Reliable backend",
        "Integration stability"
      ]
    },
    {
      icon: "🎨",
      title: "UI/UX Design & Accessibility",
      description: "Responsive design, accessibility audits, and interaction design.",
      useCases: [
        "Conversion-focused landing pages",
        "Inclusive enterprise UX"
      ],
      outcomes: [
        "Improved conversions",
        "Accessibility compliance"
      ]
    },
  ];

  const deliverySteps = [
    {
      title: "Discover & Design",
      duration: "Week 1-2",
      description: "UX, flows, prototypes."
    },
    {
      title: "Build",
      duration: "Week 3-8",
      description: "Component-driven frontend, API-first backend."
    },
    {
      title: "Test",
      duration: "Week 9-10",
      description: "Automated testing, performance tuning."
    },
    {
      title: "Deploy & Monitor",
      duration: "Week 11-12",
      description: "CI/CD, observability, feature flags."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Web App Development — Scalable, Fast & Accessible"
        subtitle="Modern web apps with robust APIs, inclusive UX, and cloud-native deployment."
        description="Build web applications and dashboards that are fast, secure, and maintainable using modern frameworks and CI/CD."
        primaryCTA={{
          text: "Get an MVP Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Explore Web Solutions",
          href: "#capabilities"
        }}
        imageUrl="/herosectionimages/Scalable Cloud and Application.webp"
      />

      {/* Technology Stack */}
      <section className="py-12 bg-gradient-to-r from-[#0a0a0a] via-[#0f1724] to-[#0a0a0a] border-y border-[#00D1BF]/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[#00D1BF] mb-8 font-semibold uppercase tracking-wider"
          >
            Modern web technologies we excel at
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL"].map((name, i) => (
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
                Web Development Excellence
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatisticCounter
              value={95}
              suffix="+"
              label="Page load improvements"
              description="LCP/FID and Core Web Vitals"
              gradient="primary"
            />
            <StatisticCounter
              value={3}
              suffix="x"
              label="Faster time-to-market"
              description="For features via component reuse"
              gradient="secondary"
            />
            <StatisticCounter
              value={100}
              suffix="%"
              label="Accessibility compliance"
              description="Improvements achieved"
              gradient="accent"
            />
            <StatisticCounter
              value={300}
              suffix="+"
              label="Projects Delivered"
              description="Web apps & platforms"
              gradient="warm"
            />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <ProblemsWeSolve
        title="Web Development Challenges"
        problems={problems}
      />

      {/* Capabilities Grid */}
      <ServiceCapabilitiesGrid
        title="Web Development Capabilities"
        intro="From frontend to backend, we build complete web solutions that are fast, secure, and built to scale."
        capabilities={capabilities}
      />

      {/* Why Choose Us */}
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
                Why Choose Us for Web Development
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={<Code className="w-8 h-8" />}
              title="Full-Stack Expertise"
              description="End-to-end development from database to UI with modern best practices and clean code"
              variant="centered"
              gradient="primary"
            />
            <IconFeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Performance First"
              description="Lightning-fast load times, optimized for Core Web Vitals and superior user experience"
              variant="centered"
              gradient="secondary"
            />
            <IconFeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Security by Design"
              description="Built-in security, regular audits, and compliance with industry standards"
              variant="centered"
              gradient="accent"
            />
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <DeliveryTimeline
        title="Web delivery process"
        subtitle="Typical timeline: MVP (4–8 weeks), Enterprise portal (8–16 weeks)"
        steps={deliverySteps}
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Build Your Web Platform?"
        subtitle="Let's create something extraordinary"
        description="Schedule a free consultation to discuss your web development needs. We'll help you architect and build a scalable solution."
        buttons={[
          {
            text: "Get an MVP Quote",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "Explore Web Solutions",
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
