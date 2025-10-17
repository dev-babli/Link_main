"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "motion/react";
import React, { useState } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import { cn } from "@/lib/utils";

const useRelume = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const openOnMobileDropdownMenu = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const openOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(true);
    };
    const closeOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(false);
    };
    const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
    const animateMobileMenuButtonSpan = isMobileMenuOpen
        ? ["open", "rotatePhase"]
        : "closed";
    const animateDropdownMenu = isDropdownOpen ? "open" : "close";
    const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
    return {
        toggleMobileMenu,
        openOnDesktopDropdownMenu,
        closeOnDesktopDropdownMenu,
        openOnMobileDropdownMenu,
        animateMobileMenu,
        animateMobileMenuButtonSpan,
        animateDropdownMenu,
        animateDropdownMenuIcon,
        isMobileMenuOpen,
    };
};

export function EnhancedNavbar() {
    const useActive = useRelume();
    return (
        <section className="sticky top-0 z-[999] flex w-full items-center justify-between border-b border-white/10 bg-[#0a0a0f]/98 backdrop-blur-2xl lg:min-h-[var(--spacing-phi-xl)] lg:px-[5%]" role="navigation" aria-label="Main navigation">
            <div className="size-full lg:flex lg:items-center lg:justify-between">
                <div className="lg:flex">
                    <div className="flex min-h-[var(--spacing-phi-2xl)] items-center justify-between px-[5%] md:min-h-[var(--spacing-phi-xl)] lg:min-h-full lg:px-0">
                        <Link href="/" className="group" aria-label="Link Innovations Home">
                            <img
                                src="/logos/Logo's/Logo1.png"
                                alt="Link Innovations Logo"
                                className="h-phi-xl w-auto group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                        <button
                            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
                            onClick={useActive.toggleMobileMenu}
                            aria-label={useActive.isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={useActive.isMobileMenuOpen}
                        >
                            <motion.span
                                className="my-[3px] h-0.5 w-6 bg-white"
                                animate={useActive.animateMobileMenuButtonSpan}
                                variants={{
                                    open: { translateY: 8, transition: { delay: 0.1 } },
                                    rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                                    closed: {
                                        translateY: 0,
                                        rotate: 0,
                                        transition: { duration: 0.2 },
                                    },
                                }}
                            />
                            <motion.span
                                className="my-[3px] h-0.5 w-6 bg-white"
                                animate={useActive.animateMobileMenu}
                                variants={{
                                    open: { width: 0, transition: { duration: 0.1 } },
                                    closed: {
                                        width: "1.5rem",
                                        transition: { delay: 0.3, duration: 0.2 },
                                    },
                                }}
                            />
                            <motion.span
                                className="my-[3px] h-0.5 w-6 bg-white"
                                animate={useActive.animateMobileMenuButtonSpan}
                                variants={{
                                    open: { translateY: -8, transition: { delay: 0.1 } },
                                    rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                                    closed: {
                                        translateY: 0,
                                        rotate: 0,
                                        transition: { duration: 0.2 },
                                    },
                                }}
                            />
                        </button>
                    </div>
                    <motion.div
                        variants={{
                            open: { height: "var(--height-open, 100dvh)" },
                            close: { height: "var(--height-closed, 0)" },
                        }}
                        initial="close"
                        exit="close"
                        animate={useActive.animateMobileMenu}
                        transition={{ duration: 0.4 }}
                        className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
                    >
                        <Link
                            href="/portfolio"
                            className="text-regular block py-3 text-white hover:text-purple-400 transition-all duration-300 first:pt-7 lg:px-4 lg:py-6 first:lg:pt-6 font-medium hover:translate-y-[-2px]"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            className="text-regular block py-3 text-white hover:text-purple-400 transition-all duration-300 first:pt-7 lg:px-4 lg:py-6 first:lg:pt-6 font-medium hover:translate-y-[-2px]"
                        >
                            About
                        </Link>
                        <div
                            onMouseEnter={useActive.openOnDesktopDropdownMenu}
                            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
                        >
                            <button
                                className="text-regular flex w-full items-center justify-between gap-x-2 py-3 text-center text-white hover:text-purple-400 transition-colors lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6"
                                onClick={useActive.openOnMobileDropdownMenu}
                            >
                                <span>Services</span>
                                <motion.span
                                    variants={{
                                        rotated: { rotate: 180 },
                                        initial: { rotate: 0 },
                                    }}
                                    animate={useActive.animateDropdownMenuIcon}
                                    transition={{ duration: 0.3 }}
                                >
                                    <RxChevronDown />
                                </motion.span>
                            </button>
                            <motion.div
                                variants={{
                                    open: {
                                        visibility: "visible",
                                        opacity: 1,
                                        height: "var(--height-open, auto)",
                                    },
                                    close: {
                                        visibility: "hidden",
                                        opacity: "0",
                                        height: "var(--height-close, 0)",
                                    },
                                }}
                                initial="close"
                                exit="close"
                                animate={useActive.animateDropdownMenu}
                                transition={{ duration: 0.3 }}
                                className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-black/98 backdrop-blur-2xl lg:absolute lg:w-[100vw] lg:border-b lg:border-white/10 lg:px-[5%] lg:[--height-close:auto]"
                            >
                                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                                    <div className="w-full lg:flex">
                                        <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                                            <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                                                <h4 className="text-small leading-[1.3] font-semibold text-white">
                                                    Services
                                                </h4>
                                                <Link
                                                    href="/services/web-development"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Cloud and Application Service.webp"
                                                                alt="Web Development"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-purple-400 transition-colors">Web Development</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Custom web applications and platforms
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/mobile-app-development"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Engineering and Manufacturing.webp"
                                                                alt="Mobile Apps"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Mobile App Development</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Native and cross-platform solutions
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/ai-automation"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/AI Gen AI.webp"
                                                                alt="AI & Automation"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-green-400 transition-colors">AI & Automation</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Intelligent automation solutions
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/cloud-devops"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Cloud and Application Service.webp"
                                                                alt="Cloud & DevOps"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Cloud & DevOps</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Scalable cloud infrastructure
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/data-analytics"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Data Analytics.webp"
                                                                alt="Data Analytics"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-green-400 transition-colors">Data Analytics</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Business intelligence and insights
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/cybersecurity"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Digital Security.webp"
                                                                alt="Cybersecurity"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-red-400 transition-colors">Cybersecurity</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Protect your digital assets
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                                                <h4 className="text-small leading-[1.3] font-semibold text-white">
                                                    Resources
                                                </h4>
                                                <Link
                                                    href="/portfolio"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Data Analytics.webp"
                                                                alt="Portfolio"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-red-400 transition-colors">Portfolio</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Our latest projects and work
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/about"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Healthcare and Lifesciences.webp"
                                                                alt="About"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">About</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Learn more about our company
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/contact"
                                                    className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex size-8 flex-col items-center justify-center">
                                                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src="/Service Cards images/Talent Solution.webp"
                                                                alt="Contact"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center">
                                                        <h5 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">Contact</h5>
                                                        <p className="text-small text-gray-300 hidden md:block">
                                                            Get in touch with us
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="relative flex max-w-none flex-1 p-6 md:py-8 md:pr-0 md:pl-8 lg:max-w-md">
                                            <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                                                <h4 className="text-small leading-[1.3] font-semibold text-white">
                                                    Featured
                                                </h4>
                                                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                                                    <Link
                                                        href="/services/ai-automation"
                                                        className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid hover:bg-white/5 rounded-lg transition-colors"
                                                    >
                                                        <div className="relative w-full pt-[66.66%]">
                                                            <img
                                                                src="/Service Cards images/AI Gen AI.webp"
                                                                alt="AI & Automation"
                                                                className="absolute inset-0 size-full object-cover rounded-lg"
                                                            />
                                                        </div>
                                                        <div className="mt-4 flex flex-col justify-start md:mt-0">
                                                            <h5 className="mb-1 font-semibold text-white">
                                                                AI transformation guide
                                                            </h5>
                                                            <p className="text-small text-gray-300">
                                                                Explore cutting-edge AI strategies
                                                            </p>
                                                            <div className="mt-1.5">
                                                                <Button
                                                                    title="Learn more"
                                                                    variant="link"
                                                                    className="text-small underline text-purple-400 hover:text-purple-300"
                                                                >
                                                                    Learn more
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        href="/services/cloud-devops"
                                                        className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid hover:bg-white/5 rounded-lg transition-colors"
                                                    >
                                                        <div className="relative w-full pt-[66.66%]">
                                                            <img
                                                                src="/Service Cards images/Cloud and Application Service.webp"
                                                                alt="Cloud Solutions"
                                                                className="absolute inset-0 size-full object-cover rounded-lg"
                                                            />
                                                        </div>
                                                        <div className="mt-4 flex flex-col justify-start md:mt-0">
                                                            <h5 className="mb-1 font-semibold text-white">
                                                                Cloud innovation report
                                                            </h5>
                                                            <p className="text-small text-gray-300">
                                                                Insights into modern cloud solutions
                                                            </p>
                                                            <div className="mt-1.5">
                                                                <Button
                                                                    title="Read more"
                                                                    variant="link"
                                                                    className="text-small underline text-purple-400 hover:text-purple-300"
                                                                >
                                                                    Read more
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center">
                                                    <Button
                                                        title="View all resources"
                                                        variant="link"
                                                        className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                                                    >
                                                        View all resources
                                                        <RxChevronRight />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 lg:min-w-[100vw]" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
                            <Button
                                className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                                title="Contact Us"
                                variant="default"
                                size="sm"
                            >
                                <img
                                    src="/logos/Logo's/Logo1.png"
                                    alt="Link Innovations"
                                    className="h-4 w-auto"
                                />
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
                <div className="hidden lg:flex lg:gap-4">
                    <Button
                        title="Contact Us"
                        size="sm"
                        className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3 flex items-center gap-2"
                    >
                        <img
                            src="/logos/Link_Innovations_transparent.png"
                            alt="Link Innovations"
                            className="h-4 w-auto"
                        />
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
