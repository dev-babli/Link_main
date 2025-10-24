'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
    sections: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
        width: number;
    }>;
}

export default function HorizontalScroll({
    children,
    className = '',
    sections
}: HorizontalScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !horizontalRef.current) return;

        const sectionsElements = horizontalRef.current.querySelectorAll('.horizontal-section');
        const totalWidth = sections.reduce((sum, section) => sum + section.width, 0);

        // Set the total width of the horizontal container
        gsap.set(horizontalRef.current, { width: totalWidth });

        sectionsElements.forEach((section, index) => {
            const sectionElement = section as HTMLElement;
            const sectionData = sections[index];

            gsap.set(sectionElement, { width: sectionData.width });

            ScrollTrigger.create({
                trigger: sectionElement,
                start: "left right",
                end: () => `+=${sectionData.width}`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set(sectionElement, {
                        x: progress * (window.innerWidth - sectionData.width)
                    });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [sections]);

    return (
        <div ref={containerRef} className={`horizontal-scroll-container overflow-hidden ${className}`}>
            <div ref={horizontalRef} className="horizontal-scroll flex">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="horizontal-section flex-shrink-0 h-screen flex items-center justify-center"
                        style={{ width: section.width }}
                    >
                        <div className="text-center p-8 max-w-md">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                            <p className="text-lg">{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {children}
        </div>
    );
}

