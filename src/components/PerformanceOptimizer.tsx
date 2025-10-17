"use client";

import { useEffect } from "react";

export function PerformanceOptimizer() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Preload critical Link Innovations resources
        const preloadCriticalResources = () => {
            const criticalImages = [
                "/logos/Link_Innovations_transparent.png",
                "/herosectionimages/generative-ai-hero.jpg",
                "/herosectionimages/cloud-computing-illustration.jpg",
                "/herosectionimages/ai-human-collaboration.jpg",
                "/Service Cards images/AI Gen AI.webp",
                "/Service Cards images/Cloud and Application Service.webp",
                "/Service Cards images/Data Analytics.webp",
                "/Service Cards images/Digital Security.webp"
            ];

            criticalImages.forEach((src) => {
                const link = document.createElement("link");
                link.rel = "preload";
                link.as = "image";
                link.href = src;
                document.head.appendChild(link);
            });
        };

        // Optimize animations for reduced motion preference
        const optimizeAnimations = () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (prefersReducedMotion) {
                document.documentElement.style.setProperty("--animation-duration", "0.01ms");
                document.documentElement.style.setProperty("--animation-iteration-count", "1");
            }
        };

        // Optimize images for different screen densities and add fallback handling
        const optimizeImages = () => {
            const images = document.querySelectorAll("img");
            images.forEach((img) => {
                if (!img.loading) {
                    img.loading = "lazy";
                }

                // Add comprehensive error handling with fallbacks
                img.addEventListener("error", (e) => {
                    const target = e.target as HTMLImageElement;

                    // Try fallback images based on the original src
                    const fallbackMap: { [key: string]: string } = {
                        "/herosectionimages/generative-ai-hero.jpg": "/herosectionimages/cloud.webp",
                        "/herosectionimages/cloud-computing-illustration.jpg": "/herosectionimages/cloud.webp",
                        "/Service Cards images/AI Gen AI.webp": "/Service Cards images/Cloud and Application Service.webp",
                        "/Service Cards images/Cloud and Application Service.webp": "/Service Cards images/Data Analytics.webp"
                    };

                    const fallback = fallbackMap[target.src];
                    if (fallback && !target.dataset.fallbackAttempted) {
                        target.dataset.fallbackAttempted = "true";
                        target.src = fallback;
                    } else {
                        // If no fallback or fallback also failed, show placeholder
                        target.style.display = "none";
                        target.alt = "Image failed to load";
                    }
                });
            });
        };

        // Initialize performance optimizations
        preloadCriticalResources();
        optimizeAnimations();
        optimizeImages();

        // Set up intersection observer for lazy loading with performance optimizations
        let imageObserver: IntersectionObserver | null = null;

        const setupIntersectionObserver = () => {
            if ("IntersectionObserver" in window) {
                imageObserver = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const img = entry.target as HTMLImageElement;
                                if (img.dataset.src) {
                                    img.src = img.dataset.src;
                                    img.removeAttribute("data-src");
                                    imageObserver?.unobserve(img);
                                }
                            }
                        });
                    },
                    {
                        rootMargin: "50px", // Start loading 50px before image enters viewport
                        threshold: 0.1
                    }
                );

                const lazyImages = document.querySelectorAll("img[data-src]");
                lazyImages.forEach((img) => imageObserver?.observe(img));
            }
        };

        // Add performance monitoring
        const setupPerformanceMonitoring = () => {
            // Monitor Core Web Vitals
            if ('web-vital' in window) {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                    getCLS(console.log);
                    getFID(console.log);
                    getFCP(console.log);
                    getLCP(console.log);
                    getTTFB(console.log);
                });
            }
        };

        setupIntersectionObserver();
        setupPerformanceMonitoring();

        // Cleanup function
        return () => {
            if (imageObserver) {
                imageObserver.disconnect();
            }
        };
    }, []);

    return null;
}





