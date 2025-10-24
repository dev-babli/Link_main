'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface KeyholeRevealProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    description: string;
}

export default function KeyholeReveal({
    children,
    className = '',
    title,
    description
}: KeyholeRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const keyholeRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !keyholeRef.current || !arrowRef.current) return;

        const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
        const scrub = true;

        if (isAnimationOk) {
            gsap.from(keyholeRef.current, {
                "clip-path": "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: scrub,
                    markers: false
                }
            });

            gsap.to(arrowRef.current, {
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200",
                    scrub: scrub
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className={`section--primary min-h-screen flex items-center justify-center relative ${className}`}>
            <div ref={keyholeRef} className="keyhole absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20" />
            <div className="relative z-10 text-center text-white p-8">
                <h1 className="text-6xl font-bold mb-6">{title}</h1>
                <p className="text-xl max-w-2xl mx-auto">{description}</p>
            </div>
            <div ref={arrowRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="arrow w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45" />
            </div>
            {children}
        </div>
    );
}

