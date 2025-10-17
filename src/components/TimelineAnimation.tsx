"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

declare global {
    interface Window {
        gsap: any;
        ScrollTrigger: any;
        Lenis: any;
    }
}

const TimelineAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dynamically load GSAP and plugins
        const loadScript = (src: string) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve(true);
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const initializeAnimation = async () => {
            try {
                // Load external dependencies
                await Promise.all([
                    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
                    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
                    loadScript('https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/bundled/lenis.min.js')
                ]);

                // Wait for GSAP to be available
                if (!window.gsap || !window.ScrollTrigger) {
                    console.error('GSAP or ScrollTrigger not loaded');
                    return;
                }

                const { gsap, ScrollTrigger } = window;

                // Register GSAP plugins
                gsap.registerPlugin(ScrollTrigger);

                // Setup smooth scrolling with Lenis
                const lenis = new window.Lenis({
                    duration: 1.2,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    direction: 'vertical',
                    gestureDirection: 'vertical',
                    smooth: true,
                    mouseMultiplier: 1,
                    smoothTouch: false,
                    touchMultiplier: 2,
                    infinite: false,
                });

                // Update ScrollTrigger on scroll
                lenis.on('scroll', ScrollTrigger.update);

                gsap.ticker.add((time: number) => {
                    lenis.raf(time * 1000);
                });

                gsap.ticker.lagSmoothing(0);

                // Text fill animation for animated text elements
                const animatedTextElements = gsap.utils.toArray('.animate-text');

                animatedTextElements.forEach((element: any) => {
                    const text = element.textContent;
                    element.setAttribute('data-text', text);

                    ScrollTrigger.create({
                        trigger: element,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                        onUpdate: (self: any) => {
                            const progress = self.progress;
                            const clipProgress = 100 - (progress * 100);
                            element.style.setProperty('--clip-progress', `${clipProgress}%`);
                        }
                    });
                });

                // Services header animation - sliding in from opposite directions
                ScrollTrigger.create({
                    trigger: '.services-section',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                    onUpdate: (self: any) => {
                        const progress = self.progress;
                        const headers = gsap.utils.toArray('.services-header');

                        headers.forEach((header: any, index: number) => {
                            let targetX = 0;

                            if (index === 0 || index === 2) {
                                // Left and right headers slide in from right
                                targetX = (1 - progress) * 100;
                            } else {
                                // Middle header slides in from left
                                targetX = -(1 - progress) * 100;
                            }

                            gsap.set(header, { xPercent: targetX });
                        });
                    }
                });

                // Pin section and add vertical movement + scaling
                ScrollTrigger.create({
                    trigger: '.services-section',
                    start: 'top top',
                    end: '+=200vh',
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    onUpdate: (self: any) => {
                        const progress = self.progress;
                        const headers = gsap.utils.toArray('.services-header');

                        // First half: vertical movement
                        if (progress <= 0.5) {
                            const halfProgress = progress * 2;
                            const topHeader = headers[0];
                            const bottomHeader = headers[2];

                            if (topHeader) gsap.set(topHeader, { yPercent: halfProgress * 50 });
                            if (bottomHeader) gsap.set(bottomHeader, { yPercent: -halfProgress * 50 });
                        } else {
                            // Second half: scaling
                            const scaleProgress = (progress - 0.5) * 2;
                            const minScale = window.innerWidth < 768 ? 0.3 : 0.2;
                            const scale = 1 - (scaleProgress * (1 - minScale));

                            headers.forEach((header: any) => {
                                gsap.set(header, { scale });
                            });
                        }
                    }
                });

                // Cleanup function
                return () => {
                    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
                    lenis.destroy();
                };

            } catch (error) {
                console.error('Error initializing timeline animation:', error);
            }
        };

        initializeAnimation();
    }, []);

    return (
        <div className="timeline-container relative" ref={containerRef}>
            {/* Hero Section */}
            <section className="hero-section h-screen flex items-center justify-center bg-gradient-to-br from-black-100 to-black-200 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }} />
                </div>

                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop"
                            alt="Hero"
                            className="w-80 h-96 object-cover rounded-2xl mx-auto shadow-2xl border border-white/10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section h-screen flex items-center justify-center bg-gradient-to-br from-black-200 to-black-100 relative">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <motion.h2
                        className="animate-text text-7xl md:text-9xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We Build
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </motion.h2>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section h-screen flex items-center justify-center bg-gradient-to-br from-black-100 via-black-200 to-black-100 relative">
                <div className="services-container flex flex-col items-center justify-center space-y-12 relative z-10">
                    <div className="services-header">
                        <div className="text-8xl md:text-9xl font-bold text-white tracking-tight">
                            WEB
                        </div>
                    </div>

                    <div className="services-header relative z-20">
                        <div className="text-8xl md:text-9xl font-bold text-white tracking-tight">
                            DEVELOPMENT
                        </div>
                    </div>

                    <div className="services-header">
                        <div className="text-8xl md:text-9xl font-bold text-white tracking-tight">
                            SERVICES
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Services Copy Section */}
            <section className="services-copy-section bg-gradient-to-br from-black-200 to-black-100 py-32 relative">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <motion.h2
                        className="animate-text text-5xl md:text-7xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Design that
                        <br />
                        <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            tells your story
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mt-12 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We create digital experiences that connect with your audience,
                        drive engagement, and deliver measurable results. Every project
                        is crafted with precision and purpose.
                    </motion.p>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }} />
                </div>
            </section>

            {/* Outro Section */}
            <section className="outro-section h-screen flex items-center justify-center bg-gradient-to-br from-black-100 to-black-200 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }} />
                </div>

                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop"
                            alt="Outro"
                            className="w-80 h-96 object-cover rounded-2xl mx-auto shadow-2xl border border-white/10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        .animate-text {
          position: relative;
          color: #666;
          background: linear-gradient(90deg, #666 0%, #666 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .animate-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: white;
          background: linear-gradient(90deg, white 0%, white 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          clip-path: inset(0 calc(var(--clip-progress, 100%)) 0 0);
          transition: clip-path 0.1s ease-out;
        }
        
        @media (max-width: 768px) {
          .animate-text {
            font-size: 4rem !important;
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
};

export { TimelineAnimation };