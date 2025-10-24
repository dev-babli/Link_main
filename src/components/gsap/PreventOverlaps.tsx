'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PreventOverlapsProps {
    children: React.ReactNode;
    className?: string;
    sections: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
    }>;
}

export default function PreventOverlaps({
    children,
    className = '',
    sections
}: PreventOverlapsProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sectionsElements = containerRef.current.querySelectorAll('.overlap-section');

        sectionsElements.forEach((section, index) => {
            const sectionElement = section as HTMLElement;

            ScrollTrigger.create({
                trigger: sectionElement,
                start: "top bottom",
                end: "bottom top",
                preventOverlaps: true,
                fastScrollEnd: true,
                onEnter: () => {
                    gsap.fromTo(sectionElement,
                        {
                            opacity: 0,
                            y: 50,
                            scale: 0.95
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        }
                    );
                },
                onLeave: () => {
                    gsap.to(sectionElement, {
                        opacity: 0.7,
                        scale: 0.98,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                },
                onEnterBack: () => {
                    gsap.to(sectionElement, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [sections]);

    return (
        <div ref={containerRef} className={`prevent-overlaps-container ${className}`}>
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className="overlap-section min-h-screen flex items-center justify-center py-20"
                >
                    <div className="max-w-4xl mx-auto text-center px-8">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-80 object-cover rounded-lg mb-8"
                        />
                        <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
                        <p className="text-lg leading-relaxed">{section.description}</p>
                    </div>
                </div>
            ))}
            {children}
        </div>
    );
}

