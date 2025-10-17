"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronsUpDown, X, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-[14px] py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    >
        {children}
    </Link>
);

const NavButton = ({ children }: { children: React.ReactNode }) => (
    <button
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-[14px] py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    >
        {children}
    </button>
);


const Navigation = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerMarginTopClass = isBannerVisible ? 'sm:mt-8' : 'mt-0';

    return (
        <>
            {isBannerVisible && (
                <div className="fixed left-0 top-0 z-[101] hidden w-full items-center justify-center bg-[#E9D5FF] sm:flex sm:min-h-8">
                    <div className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-center px-6 py-1 text-center">
                        <p className="text-sm text-black">
                            IDPCON is back! 🎉{" "}
                            <a
                                className="relative font-medium text-primary transition-all duration-300 bg-[linear-gradient(theme(colors.primary),theme(colors.primary))] bg-left-bottom bg-no-repeat bg-[length:0%_1px] hover:bg-[length:100%_1px]"
                                href="https://idpcon.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join us in NYC
                            </a>{" "}
                            for the only in-person event dedicated to Internal Developer Portals.
                        </p>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
                            aria-label="Close advertisement"
                            onClick={() => setIsBannerVisible(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}
            
            <header className={cn(
                "fixed z-[100] flex w-full items-center justify-center border-b border-white/10 bg-black/80 px-4 text-white shadow-md backdrop-blur-lg transition-[margin] duration-300",
                "h-20", 
                headerMarginTopClass
            )}>
                 <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/logo-cortex-35.svg"
                            alt="Cortex Logo"
                            width={125}
                            height={32}
                            priority
                        />
                    </Link>

                    <nav className="relative z-10 hidden flex-1 items-center justify-center lg:flex">
                        <ul className="group flex list-none items-center justify-center space-x-1">
                            <li><NavButton>Product <ChevronsUpDown className="relative top-[1px] ml-1 h-3 w-3" /></NavButton></li>
                            <li><NavButton>Solutions <ChevronsUpDown className="relative top-[1px] ml-1 h-3 w-3" /></NavButton></li>
                            <li><NavButton>Resources <ChevronsUpDown className="relative top-[1px] ml-1 h-3 w-3" /></NavButton></li>
                            <li><NavLink href="/compare/spotify-backstage-break-up">Break up with Backstage</NavLink></li>
                            <li><NavLink href="/case-studies">Customers</NavLink></li>
                            <li><NavLink href="https://app.getcortexapp.com/">Login</NavLink></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden items-center gap-2 sm:flex">
                            <Link
                                href="https://app.demo.cortex.io/admin/home?userpilot=ZXhwZXJpZW5jZTpZY2laRGNYdEdX&utm_source=demo-trial"
                                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-border bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/80"
                            >
                                See it in action
                            </Link>

                            <Link
                                href="/demo"
                                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Book a live demo
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="rounded-md p-2 text-white hover:bg-accent"
                                aria-label="Open main menu"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cn("absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm lg:hidden",
                    isMobileMenuOpen ? "block" : "hidden"
                )}>
                    <div className="flex flex-col space-y-1 p-4">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Product</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Solutions</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resources</a>
                        <Link href="/compare/spotify-backstage-break-up" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Break up with Backstage</Link>
                        <Link href="/case-studies" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Customers</Link>
                        <a href="https://app.getcortexapp.com/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</a>
                         <div className="mt-4 flex flex-col space-y-3 border-t border-border pt-4">
                             <Link
                                 href="https://app.demo.cortex.io/admin/home?userpilot=ZXhwZXJpZW5jZTpZY2laRGNYdEdX&utm_source=demo-trial"
                                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-border bg-accent px-4 py-2 text-sm font-medium text-white"
                             >
                                 See it in action
                             </Link>
                             <Link
                                 href="/demo"
                                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                             >
                                 Book a live demo
                             </Link>
                         </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navigation;