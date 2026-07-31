import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedArticle() {
    return (
        <section
            id="featured"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-14 flex items-end justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                            Featured Inspiration
                        </p>

                        <h2 className="mt-4 text-4xl font-light font-serif text-stone-900 md:text-5xl">
                            This Week's Editor's Pick
                        </h2>

                    </div>

                    {/* <Link
                        href="/blog"
                        className="hidden text-stone-700 transition hover:text-black md:flex items-center gap-2"
                    >
                        View All
                        <ArrowRight size={18} />
                    </Link> */}

                </div>

                {/* Featured Card */}
                <div className="grid overflow-hidden rounded-[36px] bg-[#F8F6F2] shadow-sm lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative min-h-[500px]">

                        <Image
                            src="/images/blog/inspiration.webp"
                            alt="Minimalist Floating Shelf Ideas"
                            fill
                            className="object-cover transition duration-700 hover:scale-105"
                        />

                    </div>

                    {/* Content */}

                    <div className="flex flex-col justify-center p-10 md:p-16">

                        <span className="w-fit rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-stone-600">
                            Living Room
                        </span>

                        <h3 className="mt-8 text-4xl font-light font-serif leading-tight text-stone-900">
                            15 Minimalist Floating Shelf Ideas
                            for Modern Living Rooms
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-stone-600">
                            Discover elegant floating shelf styling ideas that transform
                            your living room into a calm, modern space without making it
                            feel cluttered.
                        </p>

                        <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">

                            <span>5 min read</span>

                            <span>•</span>

                            <span>July 2026</span>

                        </div>

                        <Link
                            href="/blog/minimalist-floating-shelf-ideas"
                            className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-white transition hover:bg-black"
                        >
                            Read Article

                            <ArrowRight size={18} />

                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}