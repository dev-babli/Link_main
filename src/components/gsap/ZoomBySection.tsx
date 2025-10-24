'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ZoomBySectionProps {
    children: React.ReactNode;
    className?: string;
    sections: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
        zoomData: {
            scale: number;
            origin: [number, number];
        };
    }>;
}

export default function ZoomBySection({
    children,
    className = '',
    sections
}: ZoomBySectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Register the zoom effect
        gsap.registerEffect({
            name: "zoom",
            effect: (targets, config) => {
                const vars = { transformOrigin: "0px 0px", ...config };
                const { scale, origin } = config;
                const clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
                delete vars.origin;
                vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
                vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
                vars.overwrite = "auto";
                return gsap.to(targets, vars);
            },
            extendTimeline: true,
            defaults: { origin: [0.5, 0.5], scale: 2 }
        });

        const sectionElements = containerRef.current.querySelectorAll('section');

        sectionElements.forEach((section, index) => {
            const zoom = sections[index]?.zoomData || { scale: 1, origin: [0.5, 0.5] };

            ScrollTrigger.create({
                trigger: section,
                start: "top 85%",
                end: "+=125%",
                onToggle(self) {
                    if (self.isActive) {
                        gsap.effects.zoom(".photo", {
                            scale: zoom.scale,
                            origin: zoom.origin,
                            duration: 1,
                            ease: "power1.inOut"
                        });
                    }
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [sections]);

    return (
        <div ref={containerRef} className={className}>
            {sections.map((section, index) => (
                <section key={section.id} className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    <div className="photo-container relative w-full h-full">
                        <img
                            className="photo w-full h-full object-cover"
                            src={section.image}
                            alt={section.title}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-white p-8">
                                <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                                <p className="text-lg max-w-2xl">{section.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            {children}
        </div>
    );
}

