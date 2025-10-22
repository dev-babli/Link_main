"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    intensity?: "light" | "medium" | "heavy";
    addOrbs?: boolean;
    orbColors?: {
        left?: string;
        right?: string;
    };
}

export const ParallaxSection = ({
    children,
    className = "",
    intensity = "medium",
    addOrbs = true,
    orbColors = {
        left: "from-blue-500/10 to-purple-500/10",
        right: "from-pink-500/10 to-rose-500/10"
    }
}: ParallaxSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Different intensity levels
    const intensityMap = {
        light: { y: [30, -30], opacity: [0.3, 0.6, 0.3], orbY: 75 },
        medium: { y: [50, -50], opacity: [0.3, 0.7, 0.3], orbY: 100 },
        heavy: { y: [100, -100], opacity: [0.2, 0.8, 0.2], orbY: 150 }
    };

    const settings = intensityMap[intensity];

    const y = useTransform(scrollYProgress, [0, 1], settings.y);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], settings.opacity);
    const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -settings.orbY]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], [0, settings.orbY]);

    return (
        <motion.div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ y, opacity }}
        >
            {addOrbs && (
                <>
                    {/* Left floating orb */}
                    <motion.div
                        className={`absolute top-20 left-10 w-64 h-64 bg-gradient-to-br ${orbColors.left} rounded-full blur-3xl pointer-events-none`}
                        style={{ y: orbY1 }}
                    />
                    {/* Right floating orb */}
                    <motion.div
                        className={`absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br ${orbColors.right} rounded-full blur-3xl pointer-events-none`}
                        style={{ y: orbY2 }}
                    />
                </>
            )}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Specialized glassmorphism card wrapper
export const GlassmorphismCard = ({
    children,
    className = "",
    hover = true
}: {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}) => {
    return (
        <motion.div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}
            whileHover={hover ? { scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};

