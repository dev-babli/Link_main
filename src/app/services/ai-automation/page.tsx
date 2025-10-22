"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot, Zap, BarChart3, Settings, Eye, Users, Clock, Target,
  CheckCircle, ArrowRight, Star, Award, Sparkles, TrendingUp
} from "lucide-react";
import { AIIcon, CertifiedIcon, GrowthIcon } from "@/components/LottieAnimatedIcons";
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
 * AI & Automation Service Page - Enhanced with Modern Design
 * Features: Glassmorphism, Gradient Typography, Floating Animations
 * WCAG 2.1 AA Compliant | Optimized Performance
 */
export default function AIAutomationPage() {
  // Problems data
  const problems = [
    { text: "Manual processes consuming valuable time and resources" },
    { text: "Difficulty extracting actionable insights from massive data volumes" },
    { text: "Repetitive tasks reducing team productivity and morale" },
    { text: "Inconsistent decision-making across business operations" },
    { text: "High operational costs with limited scalability options" },
  ];

  // Capabilities data
  const capabilities = [
    {
      icon: "🤖",
      title: "Agentic AI Systems",
      description: "Build autonomous AI agents that plan, reason, and execute complex workflows with minimal human intervention. Perfect for enterprise automation.",
      useCases: [
        "Autonomous customer service agents",
        "Intelligent process orchestration",
        "Self-optimizing workflows",
        "Multi-agent collaboration systems"
      ],
      outcomes: [
        "80% reduction in manual intervention",
        "24/7 autonomous operations",
        "Scalable intelligent automation"
      ]
    },
    {
      icon: "🧠",
      title: "Generative AI Solutions",
      description: "Leverage cutting-edge LLMs and generative models to create content, code, and intelligent assistance at scale.",
      useCases: [
        "Content generation and personalization",
        "Code generation and review",
        "Document analysis and summarization",
        "Conversational AI interfaces"
      ],
      outcomes: [
        "10x faster content creation",
        "90% accuracy in document processing",
        "Enhanced user experiences"
      ]
    },
    {
      icon: "⚡",
      title: "Process Automation",
      description: "Streamline operations with RPA and intelligent workflow orchestration that adapts to your business needs.",
      useCases: [
        "Invoice and document processing",
        "Data entry and validation",
        "Report generation",
        "System integration workflows"
      ],
      outcomes: [
        "70% reduction in processing time",
        "99% accuracy in data handling",
        "Significant cost savings"
      ]
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Deploy ML models that forecast trends, predict outcomes, and provide actionable insights for strategic decision-making.",
      useCases: [
        "Demand forecasting",
        "Customer churn prediction",
        "Risk assessment",
        "Inventory optimization"
      ],
      outcomes: [
        "85% prediction accuracy",
        "Proactive decision-making",
        "Optimized resource allocation"
      ]
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Implement visual AI systems for image recognition, object detection, and video analysis across industries.",
      useCases: [
        "Quality control inspection",
        "Security and surveillance",
        "Retail analytics",
        "Medical image analysis"
      ],
      outcomes: [
        "95% defect detection rate",
        "Real-time monitoring",
        "Enhanced safety protocols"
      ]
    },
    {
      icon: "💬",
      title: "Natural Language Processing",
      description: "Build intelligent systems that understand, interpret, and generate human language for enhanced communication.",
      useCases: [
        "Sentiment analysis",
        "Chatbots and virtual assistants",
        "Language translation",
        "Text classification"
      ],
      outcomes: [
        "Improved customer satisfaction",
        "Multi-language support",
        "Automated content moderation"
      ]
    },
  ];

  // Delivery timeline
  const deliverySteps = [
    {
      title: "AI Readiness Assessment",
      duration: "Week 1-2",
      description: "Comprehensive evaluation of your current infrastructure, data quality, and AI readiness. We identify opportunities and create a strategic roadmap."
    },
    {
      title: "Solution Design & Architecture",
      duration: "Week 3-4",
      description: "Design custom AI solutions tailored to your specific needs. Define architecture, select models, and plan integration strategies."
    },
    {
      title: "Development & Training",
      duration: "Week 5-10",
      description: "Build and train AI models using your data. Develop automation workflows and integrate with existing systems."
    },
    {
      title: "Testing & Optimization",
      duration: "Week 11-12",
      description: "Rigorous testing, performance optimization, and fine-tuning to ensure accuracy, reliability, and scalability."
    },
    {
      title: "Deployment & Monitoring",
      duration: "Week 13-14",
      description: "Seamless deployment to production with comprehensive monitoring, alerting, and continuous improvement mechanisms."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000]">
      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <ServiceHero
        title="AI & Automation Excellence"
        subtitle="Transform your business with intelligent automation"
        description="Empower your organization with autonomous AI agents, generative intelligence, and workflow automation that delivers real business impact and measurable ROI."
        primaryCTA={{
          text: "Request AI Readiness Review",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Explore AI Solutions",
          href: "#capabilities"
        }}
        imageUrl="/WhatsApp Image 2025-10-12 at 1.16.43 AM.jpeg"
        className=""
      />

      {/* Partner Logos Bar */}
      <section className="py-12 bg-gradient-to-r from-[#0a0a0a] via-[#0f1724] to-[#0a0a0a] border-y border-[#00D1BF]/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[#00D1BF] mb-8 font-semibold uppercase tracking-wider"
          >
            Trusted by leading enterprises worldwide
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {["Microsoft", "Google", "Amazon", "IBM", "Oracle", "SAP"].map((name, i) => (
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

      {/* Statistics Section */}
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
                AI Impact By The Numbers
              </span>
            </h2>
            <p className="text-lg text-[#a8b3be] max-w-3xl mx-auto">
              Real results from AI implementations across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatisticCounter
              value={80}
              suffix="%"
              label="Process Automation"
              description="Average reduction in manual work"
              gradient="primary"
              size="lg"
            />
            <StatisticCounter
              value={10}
              suffix="x"
              label="Faster Operations"
              description="Speed improvement with AI"
              gradient="secondary"
              size="lg"
            />
            <StatisticCounter
              value={95}
              suffix="%"
              label="Accuracy Rate"
              description="In predictive analytics"
              gradient="accent"
              size="lg"
            />
            <StatisticCounter
              value={60}
              suffix="%"
              label="Cost Reduction"
              description="In operational expenses"
              gradient="warm"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <ProblemsWeSolve
        title="Challenges we solve with AI"
        problems={problems}
      />

      {/* Service Capabilities Grid */}
      <ServiceCapabilitiesGrid
        title="AI & Automation Capabilities"
        intro="Comprehensive solutions for intelligent enterprise"
        capabilities={capabilities}
      />

      {/* Technology Stack */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#000000] via-[#0f1724] to-[#000000] relative overflow-hidden">
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
                Our AI Technology Stack
              </span>
            </h2>
            <p className="text-lg text-[#a8b3be] max-w-3xl mx-auto">
              Enterprise-grade tools and frameworks for robust AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "AWS SageMaker",
              "Google Cloud AI", "Azure AI", "Anthropic", "Pinecone", "Weaviate", "LlamaIndex"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <GlassmorphicCard
                  variant="colorful"
                  size="sm"
                  className="text-center hover:border-[#00D1BF]/40"
                >
                  <p className="text-[#e6f0f6] font-semibold text-sm">{tech}</p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                Why Choose Link Innovations for AI
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={<AIIcon size={32} className="text-white" />}
              title="AI Expertise"
              description="Deep experience in ML, LLMs, and autonomous systems with proven enterprise deployments"
              variant="centered"
              gradient="primary"
            />
            <IconFeatureCard
              icon={<CertifiedIcon size={32} className="text-white" />}
              title="Enterprise Security"
              description="Bank-grade security, compliance, and data privacy for mission-critical AI applications"
              variant="centered"
              gradient="secondary"
            />
            <IconFeatureCard
              icon={<GrowthIcon size={32} className="text-white" />}
              title="Measurable ROI"
              description="Focus on business outcomes with clear KPIs and continuous optimization strategies"
              variant="centered"
              gradient="accent"
            />
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <DeliveryTimeline
        title="AI Implementation Process"
        subtitle="From assessment to production in 14 weeks"
        steps={deliverySteps}
      />

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Transform with AI?"
        subtitle="Start your AI journey"
        description="Schedule a free AI readiness assessment and discover how artificial intelligence can revolutionize your business operations."
        buttons={[
          {
            text: "Request AI Assessment",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "View Case Studies",
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
