"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Extend window interface for Lenis
declare global {
    interface Window {
        lenis?: any;
    }
}

export const useLenisScrollTrigger = () => {
    useEffect(() => {
        // Wait for Lenis to be available
        const checkLenis = () => {
            if (window.lenis) {
                // Register ScrollTrigger plugin
                gsap.registerPlugin(ScrollTrigger);

                // Update ScrollTrigger when Lenis scrolls
                window.lenis.on('scroll', ScrollTrigger.update);

                // Sync Lenis with GSAP ticker
                gsap.ticker.add((time: number) => {
                    if (window.lenis) {
                        window.lenis.raf(time * 1000);
                    }
                });

                // Disable GSAP's lag smoothing for better performance
                gsap.ticker.lagSmoothing(0);

                console.log('Lenis integrated with ScrollTrigger');
            } else {
                // Retry after a short delay
                setTimeout(checkLenis, 100);
            }
        };

        checkLenis();

        // Cleanup
        return () => {
            if (window.lenis) {
                window.lenis.off('scroll', ScrollTrigger.update);
            }
        };
    }, []);
};




