"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies",
        image: "/images/services/development-typographic-header-presenting-content-web-pages-website-layout-composition-color-develop (1)/site_design_12.jpg",
        fallback: "/images/services/li-service-web-development-hero-v1.jpg"
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android",
        image: "/images/services/li-service-mobile-app-development-hero-v1.webp",
        fallback: "/images/services/li-service-mobile-app-development-hero-v1.jpg"
    },
    {
        id: 3,
        title: "AI Automation",
        description: "Intelligent automation solutions powered by artificial intelligence",
        image: "/images/services/li-service-ai-automation-hero-v1.webp",
        fallback: "/images/services/li-service-ai-automation-hero-v1.jpg"
    },
    {
        id: 4,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration solutions",
        image: "/images/services/li-service-cloud-services-hero-v1.webp",
        fallback: "/images/services/li-service-cloud-services-hero-v1.jpg"
    },
    {
        id: 5,
        title: "Data Analytics",
        description: "Advanced analytics and business intelligence solutions",
        image: "/images/services/li-service-data-analytics-hero-v1.webp",
        fallback: "/images/services/li-service-data-analytics-hero-v1.jpg"
    },
    {
        id: 6,
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets",
        image: "/images/services/li-service-cybersecurity-hero-v1.webp",
        fallback: "/images/services/li-service-cybersecurity-hero-v1.jpg"
    },
    {
        id: 7,
        title: "Cloud DevOps",
        description: "Streamlined development and deployment with DevOps practices",
        image: "/images/services/li-service-cloud-devops-hero-v1.webp",
        fallback: "/images/services/li-service-cloud-devops-hero-v1.jpg"
    },
    {
        id: 8,
        title: "Automation Testing",
        description: "Comprehensive testing solutions to ensure software quality",
        image: "/images/services/li-service-automation-testing-hero-v1.webp",
        fallback: "/images/services/li-service-automation-testing-hero-v1.jpg"
    }
];

const LinkPortfolioShowcase = () => {
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email subscription logic here
        console.log('Email submitted:', email);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // pixels per frame - increased for smoother movement
        let maxScroll = 0;
        let animationId: number;

        const updateMaxScroll = () => {
            maxScroll = container.scrollWidth / 2; // Half because we duplicate the array
        };

        const autoScroll = () => {
            if (!isHovered && container) {
                scrollAmount += scrollSpeed;
                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0; // Reset to beginning for infinite scroll
                }
                container.scrollLeft = scrollAmount;
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        updateMaxScroll();
        animationId = requestAnimationFrame(autoScroll);

        // Update max scroll on resize
        const handleResize = () => {
            updateMaxScroll();
            scrollAmount = 0; // Reset scroll position on resize
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [isHovered]);

    return (
        <section className="bg-gray-50 py-20 lg:py-32">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Newsletter Section - Exact match to reference */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-2">
                        Get weekly top websites delivered to your inbox, every monday.
                    </h2>
                    <p className="text-sm text-gray-500 mb-8">
                        No spam, only inspiration.
                    </p>
                    <p className="text-xs text-gray-400 mb-8">
                        Unsubscribe anytime.
                    </p>

                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-0 justify-center items-center max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
                        >
                            Subscribe now
                        </button>
                    </form>
                </div>

                {/* Auto-scrolling Services Carousel */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <style jsx>{`
            .carousel-container::-webkit-scrollbar {
              display: none;
            }
            .carousel-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
                    <div
                        ref={scrollContainerRef}
                        className="carousel-container flex gap-4 overflow-x-hidden"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {/* Duplicate the services array for infinite scroll effect */}
                        {[...services, ...services].map((service, index) => (
                            <div
                                key={`${service.id}-${index}`}
                                className="flex-shrink-0 w-80 lg:w-96 relative group"
                            >
                                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-64 lg:h-80">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = service.fallback;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                        {/* Overlay Content - Matching reference style */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-xs opacity-90 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade edges for smooth infinite scroll effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default LinkPortfolioShowcase;