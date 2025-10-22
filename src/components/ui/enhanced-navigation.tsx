"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavGridCard,
    NavSmallItem,
    NavLargeItem,
    NavItemMobile,
    type NavItemType,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const navItems: NavItemType[] = [
    { title: "Services", href: "#" },
    { title: "Industries", href: "#" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

const platformSolutions: NavItemType[] = [
    {
        title: "Web Development",
        href: "/services/web-development",
        description: "Custom web applications built with modern frameworks"
    },
    {
        title: "Mobile Apps",
        href: "/services/mobile-apps",
        description: "Native and cross-platform mobile solutions"
    },
    {
        title: "AI & Machine Learning",
        href: "/services/ai-automation",
        description: "Intelligent automation and AI-powered solutions"
    },
    {
        title: "Cloud Solutions",
        href: "/services/cloud-devops",
        description: "Scalable cloud infrastructure and DevOps"
    },
    {
        title: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Comprehensive security solutions and audits"
    },
    {
        title: "Data Analytics",
        href: "/services/data-analytics",
        description: "Data-driven insights and business intelligence"
    },
];

const platformIntegrations: NavItemType[] = [
    {
        title: "Healthcare",
        href: "/industries/healthcare",
        description: "HIPAA-compliant healthcare technology solutions"
    },
    {
        title: "Banking & Finance",
        href: "/industries/banking",
        description: "Secure financial technology and compliance"
    },
    {
        title: "Retail & E-commerce",
        href: "/industries/retail",
        description: "E-commerce platforms and retail technology"
    },
    {
        title: "Manufacturing",
        href: "/industries/manufacturing",
        description: "Industrial automation and smart manufacturing"
    },
    {
        title: "Education",
        href: "/industries/education",
        description: "Educational technology and learning platforms"
    },
];

const caseStudies = [
    {
        title: "TechCorp Solutions",
        category: "SaaS Platform",
        description: "How TechCorp increased user engagement by 300% with our custom web application",
        href: "/case-studies/techcorp",
        logo: "TECHCORP"
    },
    {
        title: "HealthFlow Systems",
        category: "Healthcare",
        description: "HealthFlow streamlined patient management with our mobile-first solution",
        href: "/case-studies/healthflow",
        logo: "HEALTHFLOW"
    },
    {
        title: "FinanceMax",
        category: "Fintech",
        description: "FinanceMax secured their platform with our comprehensive cybersecurity implementation",
        href: "/case-studies/financemax",
        logo: "FINANCEMAX"
    },
    {
        title: "EduTech Innovations",
        category: "Education",
        description: "EduTech transformed learning with our AI-powered educational platform",
        href: "/case-studies/edutech",
        logo: "EDUTECH"
    }
];

export default function EnhancedNavigation() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/10 h-20">
            <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-20">
                <Link href="/" aria-label="home" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-purple-400 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg font-bold">L</span>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                        Link Innovations
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className="bg-transparent text-white text-base font-normal hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent group border-none p-0 h-auto">
                                        <span className="flex items-center gap-1 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gradient-to-r after:from-orange-400 after:to-purple-400 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full group-data-[state=open]:after:w-full">
                                            {item.title}
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                        </span>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {item.title === "Services" ? (
                                            <div className="p-8 bg-black/95 backdrop-blur-xl border border-white/10 text-white w-[56rem] animate-in fade-in">
                                                <div className="grid grid-cols-2 gap-12">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-white mb-6">
                                                            Services
                                                        </h3>
                                                        <div className="space-y-4">
                                                            {platformSolutions.map((sol) => (
                                                                <NavSmallItem
                                                                    key={sol.title}
                                                                    item={sol}
                                                                    className="group block p-0"
                                                                >
                                                                    <div className="text-white font-medium group-hover:text-orange-400 transition-colors">
                                                                        {sol.title}
                                                                    </div>
                                                                    <div className="text-sm text-gray-400 mt-1">
                                                                        {sol.description}
                                                                    </div>
                                                                </NavSmallItem>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-white mb-6">
                                                            Featured Case Studies
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {caseStudies.slice(0, 4).map((study, index) => (
                                                                <NavGridCard
                                                                    key={index}
                                                                    link={{
                                                                        title: study.title,
                                                                        href: study.href,
                                                                        description: study.description
                                                                    }}
                                                                    className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-all"
                                                                >
                                                                    <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide mb-2">
                                                                        {study.logo}
                                                                    </div>
                                                                    <div className="text-xs text-gray-400 mb-2">
                                                                        {study.category}
                                                                    </div>
                                                                    <div className="text-sm text-white font-medium mb-3 line-clamp-2">
                                                                        {study.description}
                                                                    </div>
                                                                    <div className="flex items-center text-sm text-orange-400 group-hover:gap-2 transition-all">
                                                                        <span>Read full case study</span>
                                                                        <ArrowRight className="w-4 h-4" />
                                                                    </div>
                                                                </NavGridCard>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : item.title === "Industries" ? (
                                            <div className="p-8 bg-black/95 backdrop-blur-xl border border-white/10 text-white w-[56rem] animate-in fade-in">
                                                <div className="grid grid-cols-2 gap-12">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-white mb-6">
                                                            Industries
                                                        </h3>
                                                        <div className="space-y-4">
                                                            {platformIntegrations.map((integ) => (
                                                                <NavSmallItem
                                                                    key={integ.title}
                                                                    item={integ}
                                                                    className="group block p-0"
                                                                >
                                                                    <div className="text-white font-medium group-hover:text-orange-400 transition-colors">
                                                                        {integ.title}
                                                                    </div>
                                                                    <div className="text-sm text-gray-400 mt-1">
                                                                        {integ.description}
                                                                    </div>
                                                                </NavSmallItem>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-white mb-6">
                                                            Featured Case Studies
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {caseStudies.slice(0, 4).map((study, index) => (
                                                                <NavGridCard
                                                                    key={index}
                                                                    link={{
                                                                        title: study.title,
                                                                        href: study.href,
                                                                        description: study.description
                                                                    }}
                                                                    className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-all"
                                                                >
                                                                    <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide mb-2">
                                                                        {study.logo}
                                                                    </div>
                                                                    <div className="text-xs text-gray-400 mb-2">
                                                                        {study.category}
                                                                    </div>
                                                                    <div className="text-sm text-white font-medium mb-3 line-clamp-2">
                                                                        {study.description}
                                                                    </div>
                                                                    <div className="flex items-center text-sm text-orange-400 group-hover:gap-2 transition-all">
                                                                        <span>Read full case study</span>
                                                                        <ArrowRight className="w-4 h-4" />
                                                                    </div>
                                                                </NavGridCard>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-4 bg-black/95 backdrop-blur-xl border border-white/10 text-white w-64 animate-in fade-in">
                                                <p className="text-sm text-gray-400">
                                                    Links for {item.title}
                                                </p>
                                            </div>
                                        )}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-white hover:text-orange-400 font-medium transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-400 to-purple-400 text-white font-medium rounded-lg hover:from-orange-500 hover:to-purple-500 transition-all duration-200"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-black/95 backdrop-blur-xl border-l-white/10 text-white w-full max-w-sm p-0"
                        >
                            <div className="p-6">
                                <SheetClose asChild>
                                    <Link href="/" aria-label="home" className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-purple-400 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-lg font-bold">L</span>
                                        </div>
                                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                                            Link Innovations
                                        </span>
                                    </Link>
                                </SheetClose>
                            </div>
                            <div className="h-px bg-white/10"></div>
                            <div className="p-6">
                                <Accordion type="single" collapsible className="w-full">
                                    {navItems.map((item) => (
                                        <AccordionItem
                                            key={item.title}
                                            value={item.title}
                                            className="border-b border-white/10"
                                        >
                                            <AccordionTrigger className="py-4 text-base font-normal hover:no-underline text-white">
                                                {item.title}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="pl-4 space-y-3 py-2">
                                                    <p className="text-gray-400">
                                                        Links for {item.title}
                                                    </p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-6 space-y-3">
                                    <SheetClose asChild>
                                        <Link
                                            href="/login"
                                            className="block w-full text-center py-2 text-white hover:text-orange-400 font-medium transition-colors"
                                        >
                                            Login
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link
                                            href="/contact"
                                            className="block w-full text-center py-2 bg-gradient-to-r from-orange-400 to-purple-400 text-white font-medium rounded-lg hover:from-orange-500 hover:to-purple-500 transition-all duration-200"
                                        >
                                            Get Started
                                        </Link>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}