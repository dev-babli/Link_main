"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud, Server, Database, Shield, Zap, Settings,
  ArrowRight, Star, Award, CheckCircle, Lock, TrendingUp
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
 * Cloud Services Page - Enhanced
 * AWS, Azure & Google Cloud Solutions
 */
export default function CloudServicesPage() {
  const problems = [
    { text: "Risky lift-and-shift migrations and long rollback windows" },
    { text: "High cloud spend due to poor resource sizing" },
    { text: "Lack of observability and frequent outages" },
    { text: "Slow, manual infrastructure provisioning" },
  ];

  const capabilities = [
    {
      icon: "☁️",
      title: "Cloud Migration & Modernization",
      description: "Lift-and-shift or refactor strategies and execution.",
      useCases: [
        "Legacy apps",
        "Database migration",
        "Data replatforming"
      ],
      outcomes: [
        "Faster deployment",
        "Modernization path"
      ]
    },
    {
      icon: "🏗️",
      title: "Infrastructure as Code (IaC) & Automation",
      description: "Terraform, Pulumi, CDK, and automated environment provisioning.",
      useCases: [
        "Repeatable infra",
        "Blue/green deployments"
      ],
      outcomes: [
        "Lower error rate",
        "Faster spin-up of environments"
      ]
    },
    {
      icon: "💰",
      title: "Cloud Cost Optimization (FinOps)",
      description: "Rightsizing, reserved instances, autoscaling and billing automation.",
      useCases: [
        "Cost reduction programs",
        "Budget alerts"
      ],
      outcomes: [
        "20–40% cost savings typically"
      ]
    },
    {
      icon: "🔧",
      title: "Managed Cloud Operations (SRE / DevOps)",
      description: "Monitoring, incident management, on-call, and runbooks.",
      useCases: [
        "Production support",
        "Release automation"
      ],
      outcomes: [
        "Improved uptime",
        "Faster recovery"
      ]
    },
    {
      icon: "🔒",
      title: "Cloud Security & Compliance",
      description: "Secure configurations, encryption, and compliance checks.",
      useCases: [
        "PCI/GDPR readiness",
        "Security baselines"
      ],
      outcomes: [
        "Secure cloud posture",
        "Audit readiness"
      ]
    },
  ];

  const deliverySteps = [
    {
      title: "Assess",
      duration: "Week 1-2",
      description: "Cloud readiness and TCO analysis."
    },
    {
      title: "Architect",
      duration: "Week 3-4",
      description: "Migration plan and reference architectures."
    },
    {
      title: "Migrate & Modernize",
      duration: "Week 5-10",
      description: "Execution and cutover planning."
    },
    {
      title: "Operate & Optimize",
      duration: "Week 11-12",
      description: "FinOps and SRE-led operations."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Cloud Services — Migration, IaC & Managed Operations"
        subtitle="Cloud-native architecture, infrastructure automation, and cost-efficient operations for scalable systems."
        description="Migrate, modernize, and operate cloud environments with infrastructure as code, observability, and FinOps practices."
        primaryCTA={{
          text: "Schedule a Cloud Readiness Review",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "See Cloud Solutions",
          href: "#capabilities"
        }}
        imageUrl="/WhatsApp Image 2025-10-12 at 1.16.43 AM (4).jpeg"
      />

      {/* Cloud Platforms */}
      <section className="py-12 bg-gradient-to-r from-[#0a0a0a] via-[#0f1724] to-[#0a0a0a] border-y border-[#00D1BF]/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[#00D1BF] mb-8 font-semibold uppercase tracking-wider"
          >
            Multi-cloud expertise across platforms
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {["AWS", "Azure", "Google Cloud", "DigitalOcean"].map((name, i) => (
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
                Cloud Transformation Impact
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatisticCounter
              value={3}
              suffix="x"
              label="Deployment frequency"
              description="Improvement with CI/CD and IaC"
              gradient="primary"
            />
            <StatisticCounter
              value={40}
              suffix="%"
              label="Cost savings",
            description="Through FinOps measures"
            gradient="secondary"
            />
            <StatisticCounter
              value={99}
              suffix=".9%+"
              label="Uptime & reliability"
              description="With SRE practices"
              gradient="accent"
            />
            <StatisticCounter
              value={150}
              suffix="+"
              label="Migrations Completed"
              description="Successful cloud projects"
              gradient="warm"
            />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <ProblemsWeSolve
        title="Cloud Challenges We Solve"
        problems={problems}
      />

      {/* Capabilities Grid */}
      <ServiceCapabilitiesGrid
        title="Cloud Services Capabilities"
        intro="From migration strategy to ongoing optimization, we provide comprehensive cloud services across AWS, Azure, and Google Cloud."
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
                Why Choose Us for Cloud
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={<Cloud className="w-8 h-8" />}
              title="Multi-Cloud Expertise"
              description="Certified experts across AWS, Azure, and Google Cloud with proven enterprise deployments"
              variant="centered"
              gradient="primary"
            />
            <IconFeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Security First"
              description="Enterprise-grade security, compliance, and governance built into every cloud solution"
              variant="centered"
              gradient="secondary"
            />
            <IconFeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Cost Optimization"
              description="Continuous monitoring and optimization to maximize ROI and minimize cloud spend"
              variant="centered"
              gradient="accent"
            />
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <DeliveryTimeline
        title="Cloud delivery lifecycle"
        subtitle="Timeline examples: Readiness review (1–2 weeks), Migration (4–12 weeks), Ongoing managed ops (monthly)"
        steps={deliverySteps}
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Move to the Cloud?"
        subtitle="Start your cloud journey today"
        description="Schedule a free cloud assessment to discover how cloud migration can transform your infrastructure and reduce costs."
        buttons={[
          {
            text: "Schedule a Cloud Readiness Review",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "See Cloud Solutions",
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
