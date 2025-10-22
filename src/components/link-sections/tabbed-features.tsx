"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const tabData = [
    {
        id: 0,
        number: '01',
        label: 'AI & Gen AI',
        title: ['Transform your business with ', 'artificial intelligence solutions'],
        subtitle: 'Intelligent Automation',
        description: 'Harness the power of AI and machine learning to automate processes, gain insights, and make data-driven decisions that drive business growth.',
        features: ['Machine Learning Models', 'Natural Language Processing', 'Predictive Analytics'],
        image: '/herosectionimages/Agentic Ai.webp',
        fallback: '/herosectionimages/ai-human-collaboration.jpg',
    },
    {
        id: 1,
        number: '02',
        label: 'Cloud & Application',
        title: ['Scale seamlessly with ', 'enterprise cloud infrastructure'],
        subtitle: 'Scalable Infrastructure',
        description: 'Build resilient, scalable cloud infrastructure on AWS, Azure, and GCP with DevOps best practices and automated deployment pipelines.',
        features: ['Cloud Migration', 'DevOps Automation', 'Microservices Architecture'],
        image: '/herosectionimages/Intellectt SE Sliders/Cloud Application.webp',
        fallback: '/herosectionimages/cloud-computing-illustration.jpg',
    },
    {
        id: 2,
        number: '03',
        label: 'Data Analytics',
        title: ['Unlock insights with ', 'advanced data analytics solutions'],
        subtitle: 'Business Intelligence',
        description: 'Turn your data into actionable insights with custom dashboards, real-time analytics, and advanced data visualization tools.',
        features: ['Data Warehousing', 'Real-time Analytics', 'Business Intelligence'],
        image: '/herosectionimages/Intellectt SE Sliders/Data & Analytics.webp',
        fallback: '/herosectionimages/Data & Analytics.webp',
    },
    {
        id: 3,
        number: '04',
        label: 'Digital Security',
        title: ['Secure your digital assets with ', 'advanced protection systems'],
        subtitle: 'Enterprise Security',
        description: 'Implement robust security measures, compliance frameworks, and threat protection to safeguard your digital assets and customer data.',
        features: ['Cybersecurity Assessment', 'Compliance Management', 'Threat Detection'],
        image: '/herosectionimages/Intellectt SE Sliders/Cyber security.webp',
        fallback: '/herosectionimages/Cyber Security.webp',
    },
];

const ProgressNotch = () => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0L6 3L3 6H0V0H3Z" fill="currentColor" className="text-[#4a7856]"></path>
        <path d="M6 3L8 5V1L6 3Z" fill="currentColor" className="text-[#4a7856]/50"></path>
    </svg>
);


const ProgressBar: React.FC<{ status: 'past' | 'present' | 'future'; progress: number }> = ({ status, progress }) => {
    const baseClasses = "relative mb-3 h-1.5 w-full overflow-hidden rounded-[1.5px]";

    if (status === 'past') {
        return (
            <div className={baseClasses}>
                <div className="absolute inset-0 bg-[#4a7856] opacity-50" />
            </div>
        );
    }
    if (status === 'present') {
        return (
            <div className={`${baseClasses} bg-[#1e3f20]/20`}>
                <div
                    className="h-full bg-[#4a7856] flex justify-end items-center"
                    style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                >
                    <div className="h-1.5 w-2 flex-shrink-0" style={{ transform: 'translateX(100%)' }}>
                        {progress > 0 && <ProgressNotch />}
                    </div>
                </div>
            </div>
        );
    }
    // 'future' status
    return <div className={`${baseClasses} bg-[#1e3f20]/20`} />;
}

const LinkTabbedFeatures = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const requestRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);
    const duration = 5000;

    // Scroll reveal animations
    const headerRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
    const isTabsInView = useInView(tabsRef, { once: true, margin: "-50px" });
    const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

    const handleNextTab = useCallback(() => {
        setActiveTab((prev) => (prev + 1) % tabData.length);
    }, []);

    const animate = useCallback((time: number) => {
        if (startTimeRef.current === undefined) {
            startTimeRef.current = time;
        }
        const elapsed = time - startTimeRef.current;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (elapsed < duration) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            handleNextTab();
        }
    }, [handleNextTab]);

    useEffect(() => {
        if (!isPaused) {
            setProgress(0);
            startTimeRef.current = undefined;
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [activeTab, isPaused, animate]);

    const handleTabClick = (index: number) => {
        if (index !== activeTab) {
            setActiveTab(index);
        }
    };

    const getTabStatus = (index: number) => {
        if (index === activeTab) return 'present';
        if (index < activeTab) return 'past';
        return 'future';
    }

    return (
        <section className="py-16 bg-black">
            {/* Swiss Typography Header - Minimal & Functional */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-6 mb-12"
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-8 h-0.5 bg-[#4a7856]"></div>
                        <span className="text-xs font-mono text-white tracking-[0.2em] uppercase">Services</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight leading-none"
                    >
                        Technology Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base text-white font-light leading-relaxed max-w-2xl"
                    >
                        Comprehensive technology services for modern businesses
                    </motion.p>
                </div>
            </motion.div>

            {/* Swiss Grid System */}
            <motion.div
                ref={tabsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 container mx-auto px-6"
            >
                <div
                    className="max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Enhanced Tab Navigation */}
                    <div className="grid grid-cols-4 gap-1 mb-12 border-b border-gray-800/50">
                        {tabData.map((tab, index) => (
                            <motion.button
                                key={tab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                onClick={() => handleTabClick(tab.id)}
                                className={`relative py-6 text-center transition-all duration-500 group ${tab.id === activeTab
                                    ? 'text-white border-b-2 border-[#4a7856] bg-[#1e3f20]/10'
                                    : 'text-white hover:text-white hover:bg-[#1e3f20]/5'
                                    }`}
                            >
                                <div className="text-xs font-mono tracking-wider mb-2 transition-colors duration-300">
                                    {tab.number}
                                </div>
                                <div className="text-sm font-medium transition-colors duration-300">
                                    {tab.label}
                                </div>
                                {tab.id === activeTab && (
                                    <ProgressBar
                                        status={getTabStatus(tab.id)}
                                        progress={progress}
                                    />
                                )}
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#4a7856]/5 to-[#345830]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Swiss Content Layout - Premium Design */}
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative min-h-[600px]"
                    >
                        {tabData.map((tab) => (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={tab.id === activeTab ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`absolute inset-0 ${tab.id === activeTab ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
                                    {/* Swiss Typography Content - Left Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={tab.id === activeTab ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className="space-y-8"
                                    >
                                        {/* Swiss Number Badge */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#4a7856] rounded-full flex items-center justify-center">
                                                <span className="text-white font-mono text-sm font-bold">{tab.number}</span>
                                            </div>
                                            <div className="w-16 h-0.5 bg-[#4a7856]"></div>
                                        </div>

                                        {/* Swiss Typography Hierarchy */}
                                        <div className="space-y-6">
                                            <h3 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
                                                {tab.subtitle}
                                            </h3>
                                            <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                                                {tab.description}
                                            </p>
                                        </div>

                                        {/* Swiss Grid for Features */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={tab.id === activeTab ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="grid grid-cols-1 gap-4"
                                        >
                                            {tab.features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={tab.id === activeTab ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                                    className="flex items-center gap-3 text-white"
                                                >
                                                    <div className="w-2 h-2 bg-[#4a7856] rounded-full flex-shrink-0"></div>
                                                    <span className="text-base font-light">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>

                                    {/* Swiss Image Presentation - Right Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={tab.id === activeTab ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="relative"
                                    >
                                        {/* Main Image Container */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={tab.image}
                                                alt={tab.label}
                                                fill
                                                className="object-cover object-center"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = tab.fallback;
                                                }}
                                            />
                                            {/* Swiss Design Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7856]/10 to-transparent"></div>
                                        </div>

                                        {/* Swiss Design Elements */}
                                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4a7856]/20 rounded-full blur-xl"></div>
                                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#345830]/30 rounded-full blur-lg"></div>

                                        {/* Swiss Accent Line */}
                                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-[#4a7856] to-[#345830]"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default LinkTabbedFeatures;
