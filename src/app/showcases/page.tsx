import Link from "next/link";
import { ArrowRight, Palette, Shield, TrendingUp } from "lucide-react";

export const metadata = {
    title: "Component Showcases | Link Innovations",
    description: "Explore our collection of migrated website design components",
};

const showcases = [
    {
        id: "cortex",
        title: "Tech-Forward Showcase",
        description: "Dark theme with purple accents showcasing Link Innovations' services across AI, Cloud, and Cybersecurity with modern developer-focused aesthetics.",
        theme: "Dark",
        primaryColor: "#7C3AED",
        icon: Palette,
        features: ["7 Services", "6 Industries", "Client Testimonials"],
        href: "/showcases/cortex",
    },
    {
        id: "metomic",
        title: "Enterprise Showcase",
        description: "Dark theme with coral/purple accents highlighting Link Innovations' enterprise solutions with clean, professional design for corporate clients.",
        theme: "Dark",
        primaryColor: "#FF7A59",
        icon: Shield,
        features: ["Service Grid", "Industry Focus", "Professional Design"],
        href: "/showcases/metomic",
    },
    {
        id: "vareto",
        title: "Modern Light Showcase",
        description: "Light theme with yellow accent demonstrating Link Innovations' capabilities with clean, contemporary design perfect for diverse industries.",
        theme: "Light",
        primaryColor: "#E8FF7A",
        icon: TrendingUp,
        features: ["Clean Design", "8 Industries", "Modern Aesthetics"],
        href: "/showcases/vareto",
    },
];

export default function ShowcasesIndex() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                        Link Innovations Showcases
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-slate-300">
                        Explore three distinct design themes showcasing Link Innovations' services, industries, and capabilities.
                        Each showcase demonstrates a unique visual approach while maintaining our consistent brand message.
                    </p>
                </div>

                {/* Showcase Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {showcases.map((showcase) => {
                        const Icon = showcase.icon;
                        return (
                            <Link
                                key={showcase.id}
                                href={showcase.href}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl"
                            >
                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${showcase.primaryColor}, transparent)`,
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="mb-6 inline-flex rounded-xl p-3"
                                        style={{ backgroundColor: `${showcase.primaryColor}20` }}
                                    >
                                        <Icon
                                            className="h-8 w-8"
                                            style={{ color: showcase.primaryColor }}
                                        />
                                    </div>

                                    {/* Title & Theme Badge */}
                                    <div className="mb-3 flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-white">
                                            {showcase.title.replace(" Showcase", "")}
                                        </h2>
                                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                                            {showcase.theme}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="mb-6 text-slate-300">
                                        {showcase.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {showcase.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center text-white transition-transform duration-300 group-hover:translate-x-2">
                                        <span className="mr-2 font-semibold">Explore</span>
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Design System Overview */}
                <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                    <h2 className="mb-6 text-3xl font-bold text-white">
                        Three Distinct Design Approaches
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div>
                            <h3 className="mb-3 text-xl font-semibold text-purple-400">
                                Tech-Forward (Dark)
                            </h3>
                            <ul className="space-y-2 text-slate-300">
                                <li>• Modern developer aesthetics</li>
                                <li>• Purple gradient branding</li>
                                <li>• Service & industry focus</li>
                                <li>• Interactive components</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 text-xl font-semibold text-orange-400">
                                Enterprise (Dark)
                            </h3>
                            <ul className="space-y-2 text-slate-300">
                                <li>• Professional corporate design</li>
                                <li>• Coral/Purple accents</li>
                                <li>• Solutions-oriented layout</li>
                                <li>• Glassmorphism effects</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 text-xl font-semibold text-yellow-400">
                                Modern Light
                            </h3>
                            <ul className="space-y-2 text-slate-300">
                                <li>• Clean contemporary design</li>
                                <li>• Yellow accent highlights</li>
                                <li>• Data-driven presentation</li>
                                <li>• Smooth animations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}


