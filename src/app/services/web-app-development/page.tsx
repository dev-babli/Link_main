"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code, Database, Shield, Zap, Cpu, Globe,
  ArrowRight, Star, Award, CheckCircle, Layers, Server
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
 * Web App Development Service Page - Enhanced
 * Modern, Scalable & Accessible
 */
export default function WebAppDevelopmentPage() {
  const problems = [
    { text: "Legacy systems that can't scale with business growth" },
    { text: "Poor website performance affecting user experience and SEO rankings" },
    { text: "Security vulnerabilities exposing business to cyber threats" },
    { text: "High maintenance costs for outdated technology stacks" },
    { text: "Lack of mobile responsiveness losing mobile-first audiences" },
  ];

  const capabilities = [
    {
      icon: "⚡",
      title: "Modern Web Frameworks",
      description: "Build lightning-fast applications with React, Next.js, and cutting-edge JavaScript frameworks optimized for performance and SEO.",
      useCases: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "Server-side rendered websites",
        "Static site generation"
      ],
      outcomes: [
        "90+ Lighthouse scores",
        "3x faster page loads",
        "SEO-optimized content"
      ]
    },
    {
      icon: "🗄️",
      title: "Backend & APIs",
      description: "Robust backend systems with Node.js, Python, or .NET. RESTful and GraphQL APIs designed for scalability and maintainability.",
      useCases: [
        "Microservices architecture",
        "API development and integration",
        "Database design and optimization",
        "Real-time data processing"
      ],
      outcomes: [
        "99.9% uptime SLA",
        "Auto-scaling infrastructure",
        "Optimized query performance"
      ]
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security with OWASP best practices, encryption, secure authentication, and compliance with data protection regulations.",
      useCases: [
        "PCI-DSS compliance",
        "GDPR data protection",
        "SOC 2 certification",
        "Penetration testing"
      ],
      outcomes: [
        "Zero data breaches",
        "Regulatory compliance",
        "Security audits passed"
      ]
    },
    {
      icon: "🎨",
      title: "UI/UX Excellence",
      description: "Beautiful, intuitive interfaces built with modern design systems. Responsive across all devices with accessibility built-in.",
      useCases: [
        "Design system development",
        "Responsive web design",
        "WCAG 2.1 AA compliance",
        "User research and testing"
      ],
      outcomes: [
        "Improved user engagement",
        "Higher conversion rates",
        "Reduced bounce rates"
      ]
    },
    {
      icon: "📊",
      title: "Analytics & Monitoring",
      description: "Comprehensive tracking and monitoring with real-time dashboards, error tracking, and performance analytics for data-driven decisions.",
      useCases: [
        "User behavior analytics",
        "Performance monitoring",
        "Error tracking and alerting",
        "A/B testing platforms"
      ],
      outcomes: [
        "Real-time insights",
        "Proactive issue detection",
        "Data-driven optimization"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Deploy on AWS, Azure, or Google Cloud with CI/CD pipelines, automated testing, and infrastructure as code for reliable operations.",
      useCases: [
        "Cloud migration",
        "Container orchestration",
        "Automated deployments",
        "Infrastructure management"
      ],
      outcomes: [
        "Faster deployment cycles",
        "Cost-optimized infrastructure",
        "Improved reliability"
      ]
    },
  ];

  const deliverySteps = [
    {
      title: "Discovery & Architecture",
      duration: "Week 1-2",
      description: "Deep dive into requirements, user needs, and technical constraints. Design scalable architecture and technology stack selection."
    },
    {
      title: "Design & Prototyping",
      duration: "Week 3-4",
      description: "Create wireframes, design mockups, and interactive prototypes. Establish design system and component library."
    },
    {
      title: "Development Sprints",
      duration: "Week 5-10",
      description: "Agile development with 2-week sprints. Build features incrementally with continuous integration and regular demos."
    },
    {
      title: "Testing & QA",
      duration: "Week 11-12",
      description: "Comprehensive testing including unit tests, integration tests, E2E tests, performance testing, and security audits."
    },
    {
      title: "Launch & Optimization",
      duration: "Week 13-14",
      description: "Production deployment, monitoring setup, performance optimization, and post-launch support with continuous improvements."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <EnhancedNavbar />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Web App Development"
        subtitle="Modern, Scalable & Accessible"
        description="Build fast, secure, and maintainable web platforms with React, Next.js, and API-first architectures that scale with your business."
        primaryCTA={{
          text: "Get an MVP Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Explore Solutions",
          href: "#capabilities"
        }}
        imageUrl="/WhatsApp Image 2025-10-12 at 1.16.43 AM (3).jpeg"
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
              label="Lighthouse Score"
              description="Performance & accessibility"
              gradient="primary"
            />
            <StatisticCounter
              value={99}
              suffix=".9%"
              label="Uptime SLA"
              description="Reliable infrastructure"
              gradient="secondary"
            />
            <StatisticCounter
              value={3}
              suffix="x"
              label="Faster Load Times"
              description="Optimized performance"
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
        subtitle="Common issues we solve for businesses"
        problems={problems}
      />

      {/* Capabilities Grid */}
      <ServiceCapabilitiesGrid
        title="Web Development Capabilities"
        subtitle="Full-stack expertise for modern web"
        description="From frontend to backend, we build complete web solutions that are fast, secure, and built to scale."
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
        title="Web Development Process"
        subtitle="From concept to production in 14 weeks"
        steps={deliverySteps}
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Build Your Web Platform?"
        subtitle="Let's create something extraordinary"
        description="Schedule a free consultation to discuss your web development needs. We'll help you architect and build a scalable solution."
        buttons={[
          {
            text: "Get Started Today",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "View Our Portfolio",
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
