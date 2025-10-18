"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud, Server, Database, Shield, Zap, Settings,
  ArrowRight, Star, Award, CheckCircle, Lock, TrendingUp
} from "lucide-react";
import LinkInnovationsNavbar from "@/components/LinkInnovationsNavbar";
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
    { text: "High infrastructure costs with limited scalability" },
    { text: "Difficulty managing and securing on-premise servers" },
    { text: "Lack of disaster recovery and business continuity plans" },
    { text: "Slow deployment cycles hindering innovation" },
    { text: "Inability to handle traffic spikes and seasonal demands" },
  ];

  const capabilities = [
    {
      icon: "☁️",
      title: "Cloud Migration",
      description: "Seamless migration from on-premise to cloud with zero downtime. Strategy, planning, and execution for AWS, Azure, or Google Cloud.",
      useCases: [
        "Lift-and-shift migrations",
        "Re-platforming applications",
        "Cloud-native transformation",
        "Hybrid cloud setup"
      ],
      outcomes: [
        "40% cost reduction",
        "Zero downtime migration",
        "Improved scalability"
      ]
    },
    {
      icon: "🏗️",
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning with Terraform, CloudFormation, or Pulumi. Version-controlled, repeatable infrastructure.",
      useCases: [
        "Automated provisioning",
        "Multi-environment setup",
        "Disaster recovery automation",
        "Infrastructure templating"
      ],
      outcomes: [
        "90% faster provisioning",
        "Reduced human errors",
        "Consistent environments"
      ]
    },
    {
      icon: "🚀",
      title: "DevOps & CI/CD",
      description: "Build automated pipelines for continuous integration and deployment. Accelerate releases with GitLab CI, GitHub Actions, or Jenkins.",
      useCases: [
        "Automated testing",
        "Blue-green deployments",
        "Rollback strategies",
        "Release automation"
      ],
      outcomes: [
        "10x faster deployments",
        "Reduced deployment failures",
        "Continuous delivery"
      ]
    },
    {
      icon: "🔒",
      title: "Cloud Security",
      description: "Implement enterprise-grade security with identity management, encryption, compliance monitoring, and threat detection.",
      useCases: [
        "IAM and access control",
        "Data encryption at rest/transit",
        "Compliance automation",
        "Security audits"
      ],
      outcomes: [
        "Zero security breaches",
        "Compliance certification",
        "Reduced vulnerabilities"
      ]
    },
    {
      icon: "📊",
      title: "Monitoring & Optimization",
      description: "Real-time monitoring, alerting, and cost optimization. CloudWatch, Azure Monitor, or Datadog for complete visibility.",
      useCases: [
        "Performance monitoring",
        "Cost optimization",
        "Log aggregation",
        "Automated alerting"
      ],
      outcomes: [
        "99.99% uptime",
        "30% cost savings",
        "Proactive issue detection"
      ]
    },
    {
      icon: "🐳",
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes, ECS, or AKS. Scalable microservices architecture.",
      useCases: [
        "Kubernetes clusters",
        "Container registry",
        "Service mesh",
        "Auto-scaling workloads"
      ],
      outcomes: [
        "Elastic scaling",
        "Improved resource utilization",
        "Simplified deployments"
      ]
    },
  ];

  const deliverySteps = [
    {
      title: "Cloud Assessment",
      duration: "Week 1-2",
      description: "Evaluate current infrastructure, identify migration candidates, assess cloud readiness, and create migration strategy."
    },
    {
      title: "Architecture Design",
      duration: "Week 3-4",
      description: "Design cloud architecture, select services, plan security controls, and define cost optimization strategies."
    },
    {
      title: "Migration & Setup",
      duration: "Week 5-10",
      description: "Execute migration plan, configure infrastructure, set up monitoring, and implement security controls."
    },
    {
      title: "Testing & Validation",
      duration: "Week 11-12",
      description: "Comprehensive testing, performance validation, security audits, and disaster recovery testing."
    },
    {
      title: "Go-Live & Optimization",
      duration: "Week 13-14",
      description: "Production cutover, post-migration optimization, cost analysis, and ongoing support setup."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <LinkInnovationsNavbar />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="Cloud Services & DevOps"
        subtitle="AWS, Azure & Google Cloud Excellence"
        description="Modernize your infrastructure with enterprise cloud solutions. Migration, DevOps automation, and managed services for scalable, secure operations."
        primaryCTA={{
          text: "Request Cloud Assessment",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Explore Cloud Solutions",
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
              value={40}
              suffix="%"
              label="Cost Reduction"
              description="Average infrastructure savings"
              gradient="primary"
            />
            <StatisticCounter
              value={99}
              suffix=".99%"
              label="Uptime Achieved"
              description="Highly available systems"
              gradient="secondary"
            />
            <StatisticCounter
              value={10}
              suffix="x"
              label="Faster Deployments"
              description="With automation"
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
        title="Cloud Migration Process"
        subtitle="From assessment to optimization in 14 weeks"
        steps={deliverySteps}
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Move to the Cloud?"
        subtitle="Start your cloud journey today"
        description="Schedule a free cloud assessment to discover how cloud migration can transform your infrastructure and reduce costs."
        buttons={[
          {
            text: "Request Assessment",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "Learn More",
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
