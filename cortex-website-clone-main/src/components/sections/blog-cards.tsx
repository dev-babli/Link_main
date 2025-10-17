"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Get the First Scoop of What's New at Cortex",
    href: "https://www.cortex.io/posts/get-the-first-scoop-of-what-s-new-at-cortex",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-164719-blog-hero-image-_-summer-scoop.png?",
  },
  {
    title: "Cortex Recognized by Gartner® as Representative Vendor in the 2025 Market Guide for Internal Developer Portals",
    href: "https://www.cortex.io/posts/cortex-recognized-again-as-a-representative-vendor-in-the-2025-gartner-market-guide-for-internal-developer-portals",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-372223-gartner.jpg?",
  },
  {
    title: "IDPCON 2025: The Future of Engineering Excellence Starts Here",
    href: "https://www.cortex.io/posts/idpcon-2025-the-future-of-engineering-excellence-starts-here",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-740871-idpcon-2025-postcard.jpg?",
  },
];

interface BlogCardProps {
  post: (typeof blogPosts)[0];
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={post.href}
      className="group relative block overflow-hidden rounded-lg border border-border-subtle bg-background-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/50"
    >
      <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6">
          <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-lavender backdrop-blur-sm">
            Blog
          </span>
          <h3 className="text-xl font-semibold leading-tight text-white">{post.title}</h3>
        </div>
      </div>
    </Link>
  );
};

const BlogCardsSection = () => {
    return (
        <section className="w-full bg-background pt-14 pb-[90px] text-foreground sm:pt-28 sm:pb-36">
            <div className="container">
                <div className="mb-12 grid grid-cols-1 items-end gap-x-12 gap-y-8 lg:grid-cols-2">
                    <div className="text-left">
                        <h2 className="mb-4 text-[3rem] font-bold leading-tight -tracking-[0.01em] text-text-primary">
                            Insights and case studies
                        </h2>
                        <p className="max-w-[440px] text-lg leading-relaxed text-text-secondary">
                            Subscribe to our blog and be the first to know about the latest updates, features in Cortex.
                        </p>
                    </div>
                    <div className="lg:w-full lg:max-w-[440px] lg:justify-self-end">
                        <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative w-full max-w-[300px]">
                                <Input 
                                    type="email" 
                                    placeholder="Email Address"
                                    className="h-10 rounded-md border-input bg-input placeholder:text-muted-foreground"
                                />
                            </div>
                            <Button type="submit" className="h-10 shrink-0 px-4">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.title} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogCardsSection;