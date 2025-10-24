'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedZoomSectionProps {
    children: React.ReactNode;
    className?: string;
    sections: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
    }>;
}

export default function PinnedZoomSection({
    children,
    className = '',
    sections
}: PinnedZoomSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sectionsElements = containerRef.current.querySelectorAll('section');

        sectionsElements.forEach((section, index) => {
            const text = section.querySelector('p');
            const image = section.querySelector('.img');

            if (text && image) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        anticipatePin: 1,
                        scrub: 1,
                        start: "top top",
                        end: "bottom top"
                    }
                });

                tl.from(text, { opacity: 0, y: 100 })
                    .from(image, {
                        scale: 0,
                        ease: "expoScale(0.01, 1, expo.out)",
                        duration: 1
                    })
                    .to(text, { opacity: 0, y: -100, ease: "power1.in" });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [sections]);

    return (
        <div ref={containerRef} className={`box-container ${className}`}>
            {sections.map((section, index) => (
                <section key={section.id} className={`section-${index + 1}`}>
                    <div
                        className="img"
                        style={{
                            backgroundImage: `url(${section.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <p>{section.title}</p>
                </section>
            ))}
            {children}
        </div>
    );
}

