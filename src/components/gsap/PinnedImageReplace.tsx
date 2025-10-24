'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedImageReplaceProps {
    children: React.ReactNode;
    className?: string;
    images: Array<{
        id: string;
        src: string;
        alt: string;
        title: string;
        description: string;
    }>;
}

export default function PinnedImageReplace({
    children,
    className = '',
    images
}: PinnedImageReplaceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pinnedImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!containerRef.current || !pinnedImageRef.current) return;

        const pinnedImage = pinnedImageRef.current;
        let currentImageIndex = 0;

        // Set initial image
        pinnedImage.src = images[0]?.src || '';
        pinnedImage.alt = images[0]?.alt || '';

        images.forEach((image, index) => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: () => `top ${index * 100}%`,
                end: () => `top ${(index + 1) * 100}%`,
                pin: true,
                pinSpacing: false,
                onEnter: () => {
                    gsap.to(pinnedImage, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            pinnedImage.src = image.src;
                            pinnedImage.alt = image.alt;
                            gsap.to(pinnedImage, {
                                opacity: 1,
                                duration: 0.3
                            });
                        }
                    });
                },
                onEnterBack: () => {
                    gsap.to(pinnedImage, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            pinnedImage.src = image.src;
                            pinnedImage.alt = image.alt;
                            gsap.to(pinnedImage, {
                                opacity: 1,
                                duration: 0.3
                            });
                        }
                    });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [images]);

    return (
        <div ref={containerRef} className={`pinned-image-container relative ${className}`}>
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="relative w-full h-full">
                    <img
                        ref={pinnedImageRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={images[0]?.src || ''}
                        alt={images[0]?.alt || ''}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                            <h2 className="text-4xl font-bold mb-4">{images[0]?.title || ''}</h2>
                            <p className="text-lg max-w-2xl">{images[0]?.description || ''}</p>
                        </div>
                    </div>
                </div>
            </div>

            {images.map((image, index) => (
                <div key={image.id} className="h-screen flex items-center justify-center">
                    <div className="text-center p-8">
                        <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
                        <p className="text-lg max-w-2xl">{image.description}</p>
                    </div>
                </div>
            ))}

            {children}
        </div>
    );
}

