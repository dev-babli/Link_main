'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StackingHeadersProps {
    children: React.ReactNode;
    className?: string;
    headers: Array<{
        id: string;
        title: string;
        content: string;
    }>;
}

export default function StackingHeaders({
    children,
    className = '',
    headers
}: StackingHeadersProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const allTitles = containerRef.current.querySelectorAll('.row');
        let offsets: number[];
        let totalOffset: number;

        const calculateOffsets = () => {
            totalOffset = 0;
            offsets = Array.from(allTitles).map(title => {
                const prev = totalOffset;
                const heading = title.querySelector("h1");
                if (heading) {
                    totalOffset += heading.offsetHeight;
                }
                return prev;
            });
        };

        calculateOffsets();
        window.addEventListener("resize", calculateOffsets);

        allTitles.forEach((title, i) => {
            const heading = title.querySelector(".left");
            if (heading) {
                ScrollTrigger.create({
                    trigger: heading,
                    endTrigger: ".row-wrap",
                    start: () => "top " + offsets[i],
                    end: () => "bottom " + totalOffset,
                    pin: heading,
                    pinSpacing: false
                });
            }
        });

        return () => {
            window.removeEventListener("resize", calculateOffsets);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [headers]);

    return (
        <div ref={containerRef} className={`row-wrap ${className}`}>
            {headers.map((header, index) => (
                <div key={header.id} className="row min-h-screen flex items-center">
                    <div className="left w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4">{header.title}</h1>
                        <p className="text-lg">{header.content}</p>
                    </div>
                    <div className="right w-1/2 p-8">
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Content {index + 1}</span>
                        </div>
                    </div>
                </div>
            ))}
            {children}
        </div>
    );
}

