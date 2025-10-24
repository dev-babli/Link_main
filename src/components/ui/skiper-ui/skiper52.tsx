"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Building2, ShoppingCart, Heart, Briefcase, GraduationCap, Plane, Factory, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const industries = [
    {
      src: "/Industry%20Card%20images/Aerospace%20and%20Defense.webp",
      alt: "Aerospace Technology",
      title: "Aerospace & Defense",
      description: "Advanced aerospace and defense solutions",
      icon: Building2,
      projects: "50+ Projects",
      color: "from-[#f0d3f7] to-[#b98ea7]",
    },
    {
      src: "/Industry%20Card%20images/Retail%20and%20Ecommerce.webp",
      alt: "E-Commerce Solutions",
      title: "E-Commerce",
      description: "Online stores and marketplace solutions",
      icon: ShoppingCart,
      projects: "80+ Projects",
      color: "from-[#b98ea7] to-[#a57982]",
    },
    {
      src: "/Industry%20Card%20images/Healthcar%20and%20Lifesciences.webp",
      alt: "Healthcare Technology",
      title: "Healthcare",
      description: "HIPAA-compliant medical platforms",
      icon: Heart,
      projects: "40+ Projects",
      color: "from-[#a57982] to-[#302f4d]",
    },
    {
      src: "/Industry%20Card%20images/Baking%20and%20Financial.webp",
      alt: "Financial Technology",
      title: "FinTech",
      description: "Secure financial technology solutions",
      icon: Briefcase,
      projects: "60+ Projects",
      color: "from-[#302f4d] to-[#120d31]",
    },
    {
      src: "/Industry%20Card%20images/Education%20and%20Training.webp",
      alt: "Educational Technology",
      title: "Education",
      description: "E-learning platforms and educational tech",
      icon: GraduationCap,
      projects: "45+ Projects",
      color: "from-[#120d31] to-[#f0d3f7]",
    },
    {
      src: "/Industry%20Card%20images/Logotstic%20and%20Transportation.webp",
      alt: "Logistics Technology",
      title: "Logistics",
      description: "Transportation and logistics management",
      icon: Plane,
      projects: "35+ Projects",
      color: "from-[#f0d3f7] to-[#b98ea7]",
    },
    {
      src: "/Industry%20Card%20images/Manufacturing%20and%20Automotive.webp",
      alt: "Manufacturing Technology",
      title: "Manufacturing",
      description: "IoT and automation solutions",
      icon: Factory,
      projects: "55+ Projects",
      color: "from-[#b98ea7] to-[#a57982]",
    },
    {
      src: "/Industry%20Card%20images/Energy%20and%20Utilities.webp",
      alt: "Energy & Utilities",
      title: "Energy & Utilities",
      description: "Smart grid and energy management",
      icon: Zap,
      projects: "30+ Projects",
      color: "from-[#a57982] to-[#302f4d]",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#120d31] via-[#302f4d] to-[#a57982]">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Industries{' '}
            <span className="font-normal italic bg-gradient-to-r from-[#f0d3f7] via-[#b98ea7] to-[#a57982] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We deliver tailored technology solutions across diverse industries, helping businesses transform digitally and achieve measurable results.
          </p>
        </div>
        <HoverExpand_001 className="" industries={industries} />
      </div>
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  industries,
  className,
}: {
  industries: {
    src: string;
    alt: string;
    title: string;
    description: string;
    icon: any;
    projects: string;
    color: string;
  }[];
  className?: string;
}) => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-3xl glass-card"
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                  width: activeIndustry === index ? "24rem" : "5rem",
                  height: activeIndustry === index ? "24rem" : "24rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setActiveIndustry(index)}
                onHoverStart={() => setActiveIndustry(index)}
              >
                <AnimatePresence>
                  {activeIndustry === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute h-full w-full bg-black/70 z-10"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeIndustry === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute flex h-full w-full flex-col items-start justify-end p-6 z-20"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex items-center gap-3 mb-3"
                      >
                        <div className={`p-2 rounded-full bg-gradient-to-br ${industry.color} text-white shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium text-white bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                          {industry.projects}
                        </span>
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-2xl font-bold text-white mb-2 drop-shadow-lg"
                      >
                        {industry.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-sm text-white/90 leading-relaxed drop-shadow-md"
                      >
                        {industry.description}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={industry.src}
                  className="size-full object-cover"
                  alt={industry.alt}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
