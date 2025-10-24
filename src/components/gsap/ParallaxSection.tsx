'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    images: string[];
    movementFactor?: number;
}

export default function ParallaxSection({
    children,
    className = '',
    images,
    movementFactor = 0.8
}: ParallaxSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const backgrounds = containerRef.current.querySelectorAll('img.bg');

        const fitImage = (img: HTMLImageElement, marginFactor: number) => {
            const parent = img.parentNode as HTMLElement;
            const sx = parent.offsetWidth / img.naturalWidth;
            const sy = parent.offsetHeight * (1 + Math.abs(marginFactor)) / img.naturalHeight;
            const scale = Math.max(sx, sy);
            const w = Math.ceil(img.naturalWidth * scale);
            const h = Math.ceil(img.naturalHeight * scale);

            gsap.set(img, {
                width: w,
                height: h,
                top: Math.ceil((parent.offsetHeight - h) / 2),
                left: Math.ceil((parent.offsetWidth - w) / 2),
                position: "absolute"
            });
        };

        backgrounds.forEach((img, i) => {
            const imageElement = img as HTMLImageElement;

            imageElement.addEventListener("load", () => {
                fitImage(imageElement, movementFactor);

                gsap.fromTo(imageElement, {
                    y: () => i ? -movementFactor * 0.5 * imageElement.parentElement!.offsetHeight : 0
                }, {
                    y: () => movementFactor * 0.5 * imageElement.parentElement!.offsetHeight,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageElement.parentElement,
                        start: () => i ? "top bottom" : "-1px top",
                        end: "bottom top",
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                });
            });

            // Set image source
            imageElement.setAttribute("src", images[i] || `https://assets.codepen.io/16327/portrait-pattern-${i + 1}.jpg`);
        });

        const handleResize = () => {
            backgrounds.forEach(img => fitImage(img as HTMLImageElement, movementFactor));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [images, movementFactor]);

    return (
        <div ref={containerRef} className={className}>
            {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden h-screen">
                    <img
                        className="bg absolute inset-0 w-full h-full object-cover"
                        src={image}
                        alt={`Parallax background ${index + 1}`}
                    />
                </div>
            ))}
            {children}
        </div>
    );
}

