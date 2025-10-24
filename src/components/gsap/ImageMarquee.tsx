'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageMarqueeProps {
    children: React.ReactNode;
    className?: string;
    images: string[];
    speed?: number;
}

export default function ImageMarquee({
    children,
    className = '',
    images,
    speed = 1
}: ImageMarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!marqueeRef.current || !contentRef.current) return;

        const marquee = marqueeRef.current;
        const content = contentRef.current;
        const items = content.querySelectorAll('.marquee__item');
        const tlLength = items.length * 2;

        // Animation timeline
        const tl = gsap.timeline();
        tl.to(content, tlLength, {
            xPercent: -100,
            repeat: -1,
            ease: "none"
        });
        tlRef.current = tl;

        let currentScale = 1;
        let scaleTl: gsap.core.Timeline | null = null;

        // Scroll trigger
        ScrollTrigger.create({
            trigger: marquee,
            onUpdate: (self) => {
                if (self.direction === 1) {
                    const tScale = self.getVelocity() / 200;
                    if (tScale > currentScale) {
                        currentScale = tScale;
                        scaleTl && scaleTl.kill();
                        scaleTl = gsap.timeline({
                            defaults: {
                                ease: "power2.out"
                            },
                            onComplete: () => {
                                currentScale = 1;
                                scaleTl && scaleTl.kill();
                            }
                        })
                            .to(tl, {
                                duration: 0.2,
                                timeScale: tScale,
                                ease: "power2.out"
                            })
                            .to(tl, {
                                timeScale: 1,
                                duration: 1,
                                ease: "none"
                            }, "+=1");
                    }
                }
            }
        });

        return () => {
            if (tlRef.current) {
                tlRef.current.kill();
            }
            if (scaleTl) {
                scaleTl.kill();
            }
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [images, speed]);

    return (
        <div ref={marqueeRef} className={`marquee overflow-hidden ${className}`}>
            <div ref={contentRef} className="marquee__content flex">
                {images.map((image, index) => (
                    <div key={index} className="marquee__item flex-shrink-0 w-64 h-48 mx-4">
                        <img
                            src={image}
                            alt={`Marquee image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {images.map((image, index) => (
                    <div key={`duplicate-${index}`} className="marquee__item flex-shrink-0 w-64 h-48 mx-4">
                        <img
                            src={image}
                            alt={`Marquee image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
            {children}
        </div>
    );
}

