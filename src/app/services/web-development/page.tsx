"use client";

import EnhancedNavigation from "@/components/ui/enhanced-navigation";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WebDevelopmentStickyScrollDemo } from "@/components/ui/sticky-scroll-demo";

export default function WebDevelopmentPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <PerformanceOptimizer />
            <EnhancedNavigation />

            {/* Hero Section - Clear Value Proposition */}
            <section className="pt-32 pb-20 bg-[#0a0a0f] relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        {/* Clear Service Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Web Development
                        </div>

                        {/* Benefit-Focused Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                            Build Web Applications That{" "}
                            <span className="italic bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                                Users Love
                            </span>
                        </h1>

                        {/* Clear Description - What We Do */}
                        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
                            We create modern, accessible web applications that prioritize user experience and performance. From responsive websites to complex web platforms, we build solutions that are fast, secure, and easy to use.
                        </p>

                        {/* Clear Benefits - What You Get */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-sm text-white/60">
                            <div>✓ WCAG 2.1 AA Accessible</div>
                            <div>✓ Mobile-First Responsive</div>
                            <div>✓ Optimized Performance</div>
                        </div>

                        {/* Clear, Honest CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 rounded-lg">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg">
                                    View Examples
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          WEB DEVELOPMENT SHOWCASE - STICKY SCROLL
          Goal: Interactive showcase of web development solutions
          ═══════════════════════════════════════════════════════════════ */}

            <WebDevelopmentStickyScrollDemo />

            {/* What We Offer - Clear Service Breakdown */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            What's Included
                        </h2>
                        <p className="text-lg text-white/60">
                            Comprehensive web development services tailored to your needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Custom Web Applications",
                                description: "Built with React, Next.js, or your preferred framework. Fully customized to your business logic and workflows.",
                                points: ["Scalable architecture", "Clean, maintainable code", "Documentation included", "Full ownership of code"]
                            },
                            {
                                title: "Responsive Design",
                                description: "Mobile-first approach ensuring perfect experience on all devices. Tested on real devices, not just emulators.",
                                points: ["Mobile, tablet, desktop", "Touch-friendly interfaces", "Fast loading on all connections", "Consistent experience"]
                            },
                            {
                                title: "Accessibility & Compliance",
                                description: "WCAG 2.1 AA compliant as standard. We build for everyone, ensuring equal access to your services.",
                                points: ["Keyboard navigation", "Screen reader support", "Proper contrast ratios", "Semantic HTML"]
                            },
                            {
                                title: "Performance Optimization",
                                description: "Fast loading, smooth interactions. Optimized for Core Web Vitals and real-world network conditions.",
                                points: ["Image optimization", "Code splitting", "Lazy loading", "Caching strategies"]
                            },
                            {
                                title: "SEO & Best Practices",
                                description: "Built for discoverability. Semantic HTML, proper meta tags, and search engine optimization.",
                                points: ["Semantic markup", "Meta tags & Open Graph", "Sitemap & robots.txt", "Performance for SEO"]
                            },
                            {
                                title: "Security & Privacy",
                                description: "Security best practices built-in. We protect your users' data and respect their privacy.",
                                points: ["Secure authentication", "Data encryption", "HTTPS everywhere", "Privacy compliance"]
                            }
                        ].map((offering, index) => (
                            <motion.div
                                key={offering.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 bg-white/5 border border-white/10 h-full">
                                    <h3 className="text-lg font-semibold text-white mb-3">{offering.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed mb-4">{offering.description}</p>
                                    <ul className="space-y-2">
                                        {offering.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-white/50">
                                                <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - Transparency */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-white/60">
                            Transparent, collaborative, and focused on delivering value
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: "1",
                                title: "Discovery & Planning",
                                description: "We start by understanding your goals, users, and requirements. No sales pressure - just honest conversation about what you need.",
                                duration: "1-2 weeks"
                            },
                            {
                                step: "2",
                                title: "Design & Prototyping",
                                description: "We create user-centered designs with your feedback. You'll see prototypes before any code is written.",
                                duration: "2-3 weeks"
                            },
                            {
                                step: "3",
                                title: "Development",
                                description: "Agile development with regular updates. You'll see progress every week and can provide feedback anytime.",
                                duration: "6-12 weeks"
                            },
                            {
                                step: "4",
                                title: "Testing & Quality Assurance",
                                description: "Thorough testing for functionality, accessibility, performance, and security. We test on real devices and browsers.",
                                duration: "1-2 weeks"
                            },
                            {
                                step: "5",
                                title: "Launch & Support",
                                description: "Smooth deployment with monitoring. We provide training and ongoing support to ensure your success.",
                                duration: "Ongoing"
                            }
                        ].map((process, index) => (
                            <motion.div
                                key={process.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 bg-white/5 border border-white/10 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-400 font-semibold">{process.step}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-white">{process.title}</h3>
                                            <span className="text-sm text-white/50">{process.duration}</span>
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed">{process.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Transparency */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            Transparent Pricing
                        </h2>
                        <p className="text-lg text-white/60">
                            No hidden costs. Clear pricing based on project scope.
                        </p>
                    </motion.div>

                    <Card className="p-8 bg-white/5 border border-white/10">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">How We Price Projects</h3>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    Every project is unique. We provide detailed estimates based on your specific requirements. Our pricing includes:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Discovery and planning phase",
                                        "Design and prototyping",
                                        "Development and testing",
                                        "Deployment and launch",
                                        "1 month post-launch support",
                                        "Training and documentation"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-white/60">
                                            <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-white/60 text-sm">
                                    <strong className="text-white">Typical project range:</strong> $5,000 - $50,000+ depending on complexity. We'll provide a detailed quote after discussing your needs.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* FAQ - Transparency */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            Common Questions
                        </h2>
                        <p className="text-lg text-white/60">
                            Honest answers to help you make informed decisions
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How long does a typical web project take?",
                                a: "Most projects take 2-4 months from start to finish. Timeline depends on complexity and your availability for feedback. We'll provide a detailed timeline during planning."
                            },
                            {
                                q: "Do you follow accessibility standards?",
                                a: "Yes, absolutely. We build to WCAG 2.1 AA standards minimum. Accessibility is not optional - it's built into everything we create."
                            },
                            {
                                q: "What happens after launch?",
                                a: "We provide 1 month of post-launch support included. After that, we offer flexible support plans or you can manage it yourself - your choice."
                            },
                            {
                                q: "Can I own the source code?",
                                a: "Yes. You get full ownership of all code and assets. No lock-in, no ongoing licensing fees."
                            },
                            {
                                q: "Do you use pre-built templates?",
                                a: "No. Every project is custom-built for your specific needs. We use modern frameworks but write custom code tailored to your requirements."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Card className="p-6 bg-white/5 border border-white/10">
                                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - No Dark Patterns */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl font-normal text-white mb-4">
                            Let's Talk About Your Project
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                            Free consultation, no commitments. We'll discuss your needs and see if we're a good fit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 rounded-lg w-full sm:w-auto">
                                    Schedule Free Consultation
                                </Button>
                            </Link>
                            <a href="mailto:hello@linkinnovations.ai">
                                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg w-full sm:w-auto">
                                    Email Us Directly
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}