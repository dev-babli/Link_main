'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GrowCircleProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    markText: string;
}

export default function GrowCircle({
    children,
    className = '',
    title,
    markText
}: GrowCircleProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const markRef = useRef<HTMLSpanElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !titleRef.current || !markRef.current || !dotRef.current) return;

        const section = sectionRef.current;
        const title = titleRef.current;
        const mark = markRef.current;
        const dot = dotRef.current;

        gsap.set(dot, {
            width: "142vmax",
            height: "142vmax",
            xPercent: -50,
            yPercent: -50,
            top: "50%",
            left: "50%"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
                pin: section,
                pinSpacing: true,
                invalidateOnRefresh: true,
            },
            defaults: { ease: "none" }
        });

        tl.to(title, { opacity: 1 })
            .fromTo(dot, {
                scale: 0,
                x: () => {
                    const markBounds = mark.getBoundingClientRect();
                    const px = markBounds.left + markBounds.width * 0.54;
                    return px - section.getBoundingClientRect().width / 2;
                },
                y: () => {
                    const markBounds = mark.getBoundingClientRect();
                    const py = markBounds.top + markBounds.height * 0.73;
                    return py - section.getBoundingClientRect().height / 2;
                }
            }, {
                x: 0,
                y: 0,
                ease: "power3.in",
                scale: 1
            });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} id="section" className={className}>
            <div ref={titleRef} id="title" className="opacity-0">
                <h1>{title}</h1>
                <span ref={markRef}>{markText}</span>
            </div>
            <div ref={dotRef} className="dot bg-primary rounded-full" />
            {children}
        </section>
    );
}

