'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ConsecutiveFlipsProps {
    children: React.ReactNode;
    className?: string;
    items: Array<{
        id: string;
        title: string;
        description: string;
        icon: string;
    }>;
}

export default function ConsecutiveFlips({
    children,
    className = '',
    items
}: ConsecutiveFlipsProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const itemsElements = containerRef.current.querySelectorAll('.flip-item');

        itemsElements.forEach((item, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(item,
                {
                    rotationY: 0,
                    opacity: 1,
                    scale: 1
                },
                {
                    rotationY: 180,
                    opacity: 0.5,
                    scale: 0.8,
                    duration: 0.5,
                    ease: "power2.inOut"
                }
            )
                .to(item,
                    {
                        rotationY: 360,
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.inOut"
                    }
                );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [items]);

    return (
        <div ref={containerRef} className={`flip-container ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div key={item.id} className="flip-item bg-white rounded-lg shadow-lg p-6 transform-gpu">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {children}
        </div>
    );
}

