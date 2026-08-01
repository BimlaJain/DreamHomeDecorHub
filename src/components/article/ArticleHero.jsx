import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";

export default function ArticleHero() {
    return (
        <section className="bg-[#F8F6F2] pt-16 pb-20">
            <div className="mx-auto max-w-5xl px-6">

                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-stone-600 transition hover:text-stone-900"
                >
                    <ArrowLeft size={18} />
                    Back to Blog
                </Link>

                {/* Category + Read Time */}
                <div className="mt-10 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-stone-500">
                    <span>Living Room</span>

                    <span className="h-1 w-1 rounded-full bg-stone-400" />

                    <span className="flex items-center gap-2">
                        <Clock3 size={15} />
                        8 min read
                    </span>
                </div>

                {/* Title */}
                <h1 className="mt-6 text-4xl font-light font-serif leading-tight text-stone-900 md:text-6xl">
                    15 Minimalist Floating Shelf Ideas
                    <br />
                    for Modern Living Rooms
                </h1>

                {/* Subtitle */}
                <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600">
                    Transform your living room with clean, modern floating shelf ideas
                    that add storage, style, and personality without making your space
                    feel cluttered.
                </p>

                {/* Publish Date */}
                <p className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500">
                    Updated August 2026
                </p>

                {/* Hero Image */}
                <div className="relative mt-14 h-[350px] overflow-hidden rounded-[32px] md:h-[600px]">
                    <Image
                        src="/images/blog/article/hero.webp"
                        alt="Minimalist floating shelf ideas for modern living rooms"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}