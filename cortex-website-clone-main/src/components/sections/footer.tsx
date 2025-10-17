import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = {
  products: [
    { name: "What is Cortex", href: "#" },
    { name: "Scorecard", href: "#" },
    { name: "Eng Intelligence", href: "#" },
    { name: "Engineering Homepage", href: "#" },
    { name: "Developer Self-Service", href: "#" },
    { name: "Catalog", href: "#" },
    { name: "Plugins", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  solutions: [
    { name: "Eng Excellence", href: "#" },
    { name: "Production Readiness", href: "#" },
    { name: "Incident Management", href: "#" },
    { name: "Self-Service", href: "#" },
    { name: "Developer Onboarding", href: "#" },
    { name: "Software Modernization", href: "#" },
    { name: "Migrate from Backstage", href: "#" },
  ],
  resources: [
    { name: "Docs", href: "#" },
    { name: "Cortex Academy", href: "#" },
    { name: "Explore", href: "#" },
    { name: "IDPCON", href: "#" },
    { name: "Resources & Events", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Compare Alternatives", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#", badge: "We're hiring" },
    { name: "Press", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Security Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const navSections = [
  { title: "Products", links: footerLinks.products },
  { title: "Solutions", links: footerLinks.solutions },
  { title: "Resources", links: footerLinks.resources },
  { title: "Company", links: footerLinks.company },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-8 lg:w-1/4">
            <Link href="/" aria-label="Home">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/logo-cortex-35.svg?"
                alt="Cortex logo"
                width={110}
                height={29}
                className="h-auto"
              />
            </Link>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/cortex-platform/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-tertiary hover:text-white transition-colors">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/logo-linkedin-monochrome-16-36.svg?"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </a>
              <a href="https://x.com/getcortexapp" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-text-tertiary hover:text-white transition-colors">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/logo-twitter-x-16-37.svg?"
                  alt="X/Twitter"
                  width={16}
                  height={16}
                />
              </a>
            </div>
            <div className="space-y-4 text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/yc.39479e82-38.svg?"
                  alt="Y Combinator"
                  width={20}
                  height={20}
                />
                <span>Y Combinator Company</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-063045-soc.086d7821.png?"
                  alt="SOC Type 2 Certified"
                  width={20}
                  height={20}
                />
                <span>SOC Type 2 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-323469-iso.d78726dc.png?"
                  alt="ISO/IEC 27001:2022 Certified"
                  width={20}
                  height={20}
                />
                <span>ISO/IEC 27001:2022 Certified</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 lg:mt-0 lg:w-3/4">
            {navSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-text-secondary tracking-wide">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-text-tertiary hover:text-white transition-colors">
                        {item.name}
                        {item.badge && (
                          <span className="ml-2 inline-block rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-purple-300">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-border-subtle pt-8 lg:mt-24">
          <p className="text-sm text-text-tertiary">
            © 2025 Cortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}