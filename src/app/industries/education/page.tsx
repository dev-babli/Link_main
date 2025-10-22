"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-20">
                <Link href="/" className="inline-flex items-center text-accent-cyan hover:text-accent-indigo mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                    <span className="bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-emerald bg-clip-text text-transparent">
                        Education
                    </span>
                </h1>

                <p className="text-xl text-white mb-8 max-w-3xl font-body">
                    E-learning platforms that engage students and enhance educational outcomes through innovative learning technology.
                </p>

                <div className="bg-neutral-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h2 className="text-2xl font-bold mb-4 font-heading">Coming Soon</h2>
                    <p className="text-white/80 font-body">
                        We're building comprehensive education solutions. Contact us to learn more about our educational technology services.
                    </p>
                </div>
            </div>
        </div>
    );
}
