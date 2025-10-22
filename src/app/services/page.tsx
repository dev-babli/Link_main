"use client";

import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        description: "Custom web applications built with modern technologies. We create responsive, accessible, and performant web experiences that serve your users' needs.",
        icon: "💻",
        features: [
            "Responsive & Mobile-First Design",
            "WCAG Accessibility Compliant",
            "Performance Optimized (Core Web Vitals)",
            "SEO & Semantic HTML",
            "Progressive Enhancement"
        ],
        link: "/services/web-development",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Web App Development",
        description: "Advanced web applications and platforms with complex functionality. Enterprise-grade solutions for modern businesses.",
        icon: "🖥️",
        features: [
            "Enterprise Web Applications",
            "Complex Business Logic",
            "API Integration",
            "Real-time Features",
            "Scalable Architecture"
        ],
        link: "/services/web-app-development",
        color: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Mobile App Development",
        description: "Native iOS and Android applications with platform-specific optimizations. High-performance mobile solutions.",
        icon: "📱",
        features: [
            "Native iOS & Android Development",
            "Platform-Specific UI/UX",
            "High Performance",
            "Native API Integration",
            "App Store Optimization"
        ],
        link: "/services/mobile-app-development",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile solutions that work seamlessly across devices. Cost-effective development with native performance.",
        icon: "📲",
        features: [
            "Cross-Platform Development",
            "React Native & Flutter",
            "Single Codebase",
            "Rapid Development",
            "Consistent User Experience"
        ],
        link: "/services/mobile-apps",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "AI Solutions",
        description: "Intelligent automation that respects user privacy and provides transparent, ethical AI solutions. No hidden algorithms or data exploitation.",
        icon: "🤖",
        features: [
            "Transparent AI Decision-Making",
            "Privacy-First Machine Learning",
            "Explainable AI Models",
            "Ethical Data Usage",
            "User-Controlled Automation"
        ],
        link: "/services/ai-automation",
        color: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Cloud Services",
        description: "Scalable cloud infrastructure that grows with your business. We provide reliable, secure, and cost-effective cloud solutions.",
        icon: "☁️",
        features: [
            "AWS, Azure & GCP Expertise",
            "Auto-Scaling Infrastructure",
            "Disaster Recovery Planning",
            "Cost Optimization",
            "24/7 Monitoring & Support"
        ],
        link: "/services/cloud-services",
        color: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Cloud DevOps",
        description: "Streamlined development workflows with modern DevOps practices. Accelerate delivery with automated CI/CD pipelines.",
        icon: "⚙️",
        features: [
            "CI/CD Pipeline Setup",
            "Infrastructure as Code",
            "Automated Testing",
            "Deployment Automation",
            "Monitoring & Logging"
        ],
        link: "/services/cloud-devops",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Data Analytics",
        description: "Transform data into insights while respecting user privacy. Transparent analytics with clear data usage policies.",
        icon: "📊",
        features: [
            "Privacy-Compliant Analytics",
            "Real-Time Dashboards",
            "Custom Reporting",
            "Data Visualization",
            "Predictive Analytics"
        ],
        link: "/services/data-analytics",
        color: "from-emerald-500/20 to-blue-500/20"
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets. Transparent security practices with clear communication.",
        icon: "🔒",
        features: [
            "Security Audits & Assessments",
            "Penetration Testing",
            "Compliance (GDPR, HIPAA)",
            "Incident Response",
            "Security Training"
        ],
        link: "/services/cybersecurity",
        color: "from-red-500/20 to-pink-500/20"
    },
    {
        title: "Automation Testing",
        description: "Comprehensive testing solutions to ensure quality and reliability. Automated testing that catches issues early.",
        icon: "🧪",
        features: [
            "Automated Test Suites",
            "CI/CD Integration",
            "Performance Testing",
            "API Testing",
            "Cross-Browser Testing"
        ],
        link: "/services/automation-testing",
        color: "from-yellow-500/20 to-orange-500/20"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <PerformanceOptimizer />
            <EnhancedNavigation />

            {/* Hero Section - Clean, Clear, Purposeful */}
            <section className="pt-32 pb-20 bg-[#0a0a0f] relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_50%)]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Badge - Clear Communication */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            Our Services
                        </div>

                        {/* Clear, Benefit-Focused Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                            Digital Solutions That{" "}
                            <span className="italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                                Drive Results
                            </span>
                        </h1>

                        {/* Clear Value Proposition */}
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                            We provide comprehensive technology services focused on usability, accessibility, and measurable business outcomes. Every solution is built with ethical design principles and user needs at the forefront.
                        </p>

                        {/* Clear, Honest Call-to-Action */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 rounded-lg">
                                    Discuss Your Project
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg">
                                    View Our Work
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid - Clear Hierarchy, Easy to Scan */}
            <section className="py-24 bg-[#0a0a0f] relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Clear Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            How We Can Help
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Choose a service to learn more about our approach, process, and how we can help your business succeed.
                        </p>
                    </motion.div>

                    {/* Service Cards - Accessible, Scannable, Clear */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={service.link}>
                                    <Card className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-pointer group">
                                        {/* Icon - Clear Visual Indicator */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-5`}>
                                            {service.icon}
                                        </div>

                                        {/* Title - Clear Hierarchy */}
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description - Clear Communication */}
                                        <p className="text-white/60 leading-relaxed mb-5 text-sm">
                                            {service.description}
                                        </p>

                                        {/* Features - Scannable List */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-white/50">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3 mt-1.5 flex-shrink-0"></span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Clear CTA */}
                                        <div className="text-sm text-purple-400 group-hover:text-purple-300 font-medium flex items-center">
                                            Learn More
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Transparency & Trust */}
            <section className="py-24 bg-[#0a0a0f] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            Why Work With Us
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            We believe in transparent partnerships, ethical practices, and putting your users first.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "User-Centered Design",
                                description: "Every decision we make puts your users first. We follow ethical design principles and avoid dark patterns.",
                                icon: "👥"
                            },
                            {
                                title: "Accessibility Commitment",
                                description: "We build for everyone. All our projects meet WCAG 2.1 AA standards minimum, ensuring equal access.",
                                icon: "♿"
                            },
                            {
                                title: "Transparent Process",
                                description: "No hidden costs, no surprises. We communicate clearly and involve you in every decision.",
                                icon: "🔍"
                            },
                            {
                                title: "Privacy First",
                                description: "We respect user privacy and data. We only collect what's necessary and are always transparent about data usage.",
                                icon: "🔒"
                            },
                            {
                                title: "Performance Focus",
                                description: "Fast, efficient, sustainable. We optimize for speed without compromising quality or user experience.",
                                icon: "⚡"
                            },
                            {
                                title: "Long-term Support",
                                description: "We're here for the long haul. Ongoing support, maintenance, and improvements as your business grows.",
                                icon: "🛠️"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 bg-white/5 border border-white/10 h-full">
                                    <div className="text-3xl mb-4">{value.icon}</div>
                                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Clear, No Pressure */}
            <section className="py-20 bg-[#0a0a0f] relative">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                            Let's discuss your project. No obligations, no pressure - just an honest conversation about how we can help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 rounded-lg w-full sm:w-auto">
                                    Schedule a Call
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg w-full sm:w-auto">
                                    See Our Work
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}