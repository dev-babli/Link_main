import React from 'react';
import {
    CodeIcon,
    Grid2x2PlusIcon,
    GlobeIcon,
    LayersIcon,
    UserPlusIcon,
    Users,
    Star,
    FileText,
    Shield,
    RotateCcw,
    Handshake,
    Leaf,
    HelpCircle,
    DollarSign,
    BarChart,
    PlugIcon,
    MenuIcon,
    XIcon,
} from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    type NavItemType,
    NavGridCard,
    NavSmallItem,
    NavLargeItem,
    NavItemMobile,
} from '@/components/ui/navigation-menu';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export const productLinks: NavItemType[] = [
    {
        title: 'Web Development',
        href: '/services/web-development',
        description: 'Create responsive websites with modern frameworks',
        icon: GlobeIcon,
    },
    {
        title: 'Cloud Infrastructure',
        href: '/services/cloud-infrastructure',
        description: 'Deploy and scale apps in the cloud',
        icon: LayersIcon,
    },
    {
        title: 'AI Solutions',
        href: '/services/ai-automation',
        description: 'Harness the power of artificial intelligence',
        icon: UserPlusIcon,
    },
    {
        title: 'Data Analytics',
        href: '/services/data-analytics',
        icon: BarChart,
    },
    {
        title: 'Integrations',
        href: '/services/integrations',
        icon: PlugIcon,
    },
    {
        title: 'E-Commerce',
        href: '/services/ecommerce',
        icon: DollarSign,
    },
    {
        title: 'Cybersecurity',
        href: '/services/cybersecurity',
        icon: Shield,
    },
    {
        title: 'API Development',
        href: '/services/api-development',
        icon: CodeIcon,
    },
];

export const companyLinks: NavItemType[] = [
    {
        title: 'About Us',
        href: '/about',
        description: 'Learn more about our story and team',
        icon: Users,
    },
    {
        title: 'Case Studies',
        href: '/case-studies',
        description: 'See how we have helped our clients succeed',
        icon: Star,
    },
    {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Understand how we operate',
        icon: FileText,
    },
    {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'How we protect your information',
        icon: Shield,
    },
    {
        title: 'Refund Policy',
        href: '/refund',
        description: 'Details about refunds and cancellations',
        icon: RotateCcw,
    },
    {
        title: 'Partnerships',
        href: '/partnerships',
        icon: Handshake,
        description: 'Collaborate with us for mutual growth',
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: Leaf,
        description: 'Insights, tutorials, and company news',
    },
    {
        title: 'Help Center',
        href: '/help',
        icon: HelpCircle,
        description: 'Find answers to your questions',
    },
];

export default function NavigationMenuDemo() {
    return (
        <div className="relative w-full">
            <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 sticky top-0 z-[9999] w-full">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Grid2x2PlusIcon className="size-6 text-[var(--primary)]" />
                        <p className="font-mono text-lg font-bold">Link Innovations</p>
                    </div>
                    <DesktopMenu />

                    <div className="flex items-center gap-2">
                        <Button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]">
                            Get Started
                        </Button>
                        <MoileNav />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DesktopMenu() {
    return (
        <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
                            <ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
                                {productLinks.slice(0, 3).map((link) => (
                                    <li key={link.href}>
                                        <NavGridCard link={link} />
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-1 p-4">
                                {productLinks.slice(3).map((link) => (
                                    <li key={link.href}>
                                        <NavSmallItem
                                            item={link}
                                            href={link.href}
                                            className="gap-x-1"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.40fr]">
                            <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
                                {companyLinks.slice(0, 2).map((link) => (
                                    <li key={link.href}>
                                        <NavGridCard link={link} className="min-h-36" />
                                    </li>
                                ))}
                                <div className="col-span-2 grid grid-cols-3 gap-x-4">
                                    {companyLinks.slice(2, 5).map((link) => (
                                        <li key={link.href}>
                                            <NavLargeItem href={link.href} link={link} />
                                        </li>
                                    ))}
                                </div>
                            </ul>
                            <ul className="space-y-2 p-4">
                                {companyLinks.slice(5, 10).map((link) => (
                                    <li key={link.href}>
                                        <NavLargeItem href={link.href} link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className="cursor-pointer">
                        Pricing
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function MoileNav() {
    const sections = [
        {
            id: 'services',
            name: 'Services',
            list: productLinks,
        },
        {
            id: 'company',
            name: 'Company',
            list: companyLinks,
        },
    ];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full lg:hidden">
                    <MenuIcon className="size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent
                className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg"
                showClose={false}
            >
                <div className="flex h-14 items-center justify-end border-b px-4">
                    <SheetClose asChild>
                        <Button size="icon" variant="ghost" className="rounded-full">
                            <XIcon className="size-5" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </SheetClose>
                </div>
                <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
                    <Accordion type="single" collapsible>
                        {sections.map((section) => (
                            <AccordionItem key={section.id} value={section.id}>
                                <AccordionTrigger className="capitalize hover:no-underline">
                                    {section.id}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-1">
                                    <ul className="grid gap-1">
                                        {section.list.map((link) => (
                                            <li key={link.href}>
                                                <SheetClose asChild>
                                                    <NavItemMobile item={link} href={link.href} />
                                                </SheetClose>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </SheetContent>
        </Sheet>
    );
}