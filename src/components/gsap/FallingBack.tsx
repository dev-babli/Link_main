'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FallingBackProps {
    children: React.ReactNode;
    className?: string;
    panels: Array<{
        id: string;
        title: string;
        content: string;
    }>;
}

export default function FallingBack({
    children,
    className = '',
    panels
}: FallingBackProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const panelElements = containerRef.current.querySelectorAll('.panel');
        const panelsArray = Array.from(panelElements);

        // Remove the last panel for the loop
        const panelsToAnimate = panelsArray.slice(0, -1);

        panelsToAnimate.forEach((panel, i) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: "bottom bottom",
                    pinSpacing: false,
                    pin: true,
                    scrub: true,
                    onRefresh: () => gsap.set(panel, {
                        transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px"
                    })
                }
            });

            tl.fromTo(panel, 1,
                { y: 0, rotate: 0, scale: 1, opacity: 1 },
                { y: 0, rotateX: 0, scale: 0.5, opacity: 0.5 }, 0
            )
                .to(panel, 0.1, { opacity: 0 });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [panels]);

    return (
        <div ref={containerRef} className={className}>
            {panels.map((panel, index) => (
                <div key={panel.id} className="panel h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">{panel.title}</h2>
                        <p className="text-lg">{panel.content}</p>
                    </div>
                </div>
            ))}
            {children}
        </div>
    );
}

