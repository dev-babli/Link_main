'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitHeaderProps {
    children: React.ReactNode;
    className?: string;
    heroImage: string;
    title: string;
    subtitle: string;
}

export default function SplitHeader({
    children,
    className = '',
    heroImage,
    title,
    subtitle
}: SplitHeaderProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const smootherRef = useRef<any>(null);

    useEffect(() => {
        if (!wrapperRef.current || !contentRef.current) return;

        // Animate swipe elements
        gsap.to(".anim-swipe", {
            yPercent: 300,
            delay: 0.2,
            duration: 3,
            stagger: {
                from: "random",
                each: 0.1
            },
            ease: "sine.out"
        });

        // Hero image scroll effect
        gsap.to(".hero__image-cont > img", {
            scale: 1.5,
            xPercent: 20,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "+=3000px",
                scrub: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={wrapperRef} id="wrapper" className={className}>
            <div ref={contentRef} id="content">
                <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
                    <div className="hero__image-cont absolute inset-0">
                        <img
                            src={heroImage}
                            alt="Hero background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-6xl font-bold mb-6 anim-swipe">{title}</h1>
                        <p className="text-xl anim-swipe">{subtitle}</p>
                    </div>
                </section>
                {children}
            </div>
        </div>
    );
}
