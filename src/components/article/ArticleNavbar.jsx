"use client";

import Link from "next/link";
import { Search, ChevronRight, Pin , House } from "lucide-react";

export default function ArticleNavbar({
    category,
    title,
}) {
    return (
        <>
            {/* Sticky Navbar */}

            <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#FAF7F2]/80 backdrop-blur-xl">

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}

                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8A06B] text-white shadow">
                            <House size={20} />
                        </div>

                        <div>
                            <h1 className="font-serif text-xl font-bold tracking-tight text-[#1E1E1E]">
                                DreamHomeDecorHub
                            </h1>

                            <p className="text-xs text-stone-500">
                                Home Decor Reviews
                            </p>
                        </div>
                    </Link>
                    {/* Right Side */}

                    <div className="flex items-center gap-3">

                        {/* Search */}

                        <button className="hidden h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-5 text-sm font-medium text-stone-700 transition hover:border-[#D8A06B] hover:text-[#4E342E] md:flex">

                            <Search size={18} />

                            Search

                        </button>

                        {/* Pinterest */}

                        <Link
                            href="https://in.pinterest.com/DecorHomeDecorHub/"
                            target="_blank"
                            className="flex h-11 items-center gap-2 rounded-full bg-[#D8A06B] px-6 text-sm font-medium text-white transition duration-300 hover:bg-[#C98D55]"
                        >

                            <Pin size={16} />

                            Get Daily Ideas

                        </Link>

                    </div>

                </div>

            </header>

            {/* Breadcrumb */}

            <section className="border-b border-stone-200 bg-[#FAF7F2]">

                <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-5 text-sm">

                    <Link
                        href="/"
                        className="transition hover:text-[#4E342E]"
                    >
                        Home
                    </Link>

                    <ChevronRight size={15} />

                    <Link
                        href={`/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="transition hover:text-[#4E342E]"
                    >
                        {category}
                    </Link>

                    <ChevronRight size={15} />

                    <span className="font-medium text-[#4E342E]">
                        {title}
                    </span>

                </div>

            </section>
        </>
    );
}