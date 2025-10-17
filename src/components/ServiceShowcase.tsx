"use client";

import React from 'react';
import {
    CardCurtainReveal,
    CardCurtainRevealBody,
    CardCurtainRevealDescription,
    CardCurtainRevealFooter,
    CardCurtainRevealTitle,
    CardCurtain
} from "@/components/ui/card-curtain-reveal";
import { Button } from "@/components/ui/button";
import {
    Code,
    Smartphone,
    Brain,
    Cloud,
    Shield,
    BarChart3,
    ArrowUpRight,
    Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
    {
        id: "web-development",
        title: "Web Development",
        icon: <Code size={24} />,
        description: "Transform your digital presence with cutting-edge web applications. We build responsive, scalable, and performant websites that drive business growth.",
        imageUrl: "/herosectionimages/Digital Technology.webp",
        features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
    },
    {
        id: "mobile-apps",
        title: "Mobile Apps",
        icon: <Smartphone size={24} />,
        description: "Create powerful mobile experiences that engage users and drive results. From iOS to Android, we deliver native and cross-platform solutions.",
        imageUrl: "/herosectionimages/3.webp",
        features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"]
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        icon: <Brain size={24} />,
        description: "Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions that adapt to your business needs.",
        imageUrl: "/herosectionimages/Agentic Ai.webp",
        features: ["Machine Learning", "Process Automation", "NLP", "Computer Vision"]
    },
    {
        id: "cloud-services",
        title: "Cloud Services",
        icon: <Cloud size={24} />,
        description: "Scale your infrastructure with cloud solutions that provide reliability, security, and cost-effectiveness for your growing business.",
        imageUrl: "/herosectionimages/cloud.webp",
        features: ["AWS & Azure", "Serverless", "DevOps", "Container Orchestration"]
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        icon: <Shield size={24} />,
        description: "Protect your digital assets with comprehensive security solutions. From threat assessment to incident response, we keep your business secure.",
        imageUrl: "/herosectionimages/Cyber Security.webp",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        icon: <BarChart3 size={24} />,
        description: "Turn your data into actionable insights with advanced analytics solutions. Make data-driven decisions that drive business success.",
        imageUrl: "/herosectionimages/Data & Analytics.webp",
        features: ["Business Intelligence", "Real-time Processing", "Predictive Modeling", "Data Visualization"]
    }
];

export const ServiceShowcase: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                            Our Services
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover how our cutting-edge technology solutions can transform your business and drive unprecedented growth
                    </p>
                    <div className="flex justify-center mt-8">
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <CardCurtainReveal className="h-[500px] w-full border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm text-white shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                <CardCurtainRevealBody className="relative">
                                    {/* Service Icon */}
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                                            <div className="text-blue-400">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    </div>

                                    {/* Service Title */}
                                    <CardCurtainRevealTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {service.title}
                                    </CardCurtainRevealTitle>

                                    {/* Service Description */}
                                    <CardCurtainRevealDescription className="mb-6">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardCurtainRevealDescription>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                                            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                                            Key Features
                                        </h4>
                                        <div className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                                                    <span className="text-gray-400 text-xs">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="aspect-square rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Button>

                                    {/* Curtain Effect */}
                                    <CardCurtain className="bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                </CardCurtainRevealBody>

                                {/* Service Image */}
                                <CardCurtainRevealFooter className="mt-auto">
                                    <img
                                        width="100%"
                                        height="100%"
                                        alt={`${service.title} showcase`}
                                        className="object-cover h-32"
                                        src={service.imageUrl}
                                    />
                                </CardCurtainRevealFooter>
                            </CardCurtainReveal>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button
                        size="lg"
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                        Explore All Services
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
