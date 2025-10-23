"use client";

import GalleryDemo from "@/components/ui/3d-gallery-demo";

export default function GalleryDemoPage() {
    return (
        <div className="w-full bg-black relative">
            {/* Enhanced Background with Glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-indigo/5 to-accent-emerald/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1),transparent_50%)]"></div>

            <GalleryDemo />
        </div>
    );
}
