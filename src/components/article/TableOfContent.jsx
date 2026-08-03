"use client";

import Link from "next/link";
import {
    BookOpen,
    Lightbulb,
    ShoppingBag,
    Pin,
} from "lucide-react";

export default function TableOfContents({
    items = [],
    totalIdeas = 0,
    totalProducts = 0,
}) {

    if (!items.length) return null;

    return (
        <section className="bg-[#FAF7F2] py-20">

            <div className="mx-auto max-w-6xl px-6">

                <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-sm">

                    {/* Top */}

                    <div className="border-b border-stone-200 bg-[#FCFAF7] p-8">

                        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]">
                            Before You Start
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-[#4E342E]">
                            In This Guide
                        </h2>

                        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
                            Everything you need to create a warm, beautiful and
                            Pinterest-worthy living room—from decorating ideas to
                            shoppable furniture recommendations.
                        </p>

                    </div>

                    {/* Highlights */}

                    <div className="grid gap-5 border-b border-stone-200 bg-[#FFFDFB] p-8 md:grid-cols-4">

                        <div className="rounded-2xl border border-stone-200 p-5">

                            <BookOpen className="mb-4 h-7 w-7 text-[#9C6A3F]" />

                            <p className="text-3xl font-bold text-[#4E342E]">
                                {totalIdeas}
                            </p>

                            <p className="mt-1 text-sm text-stone-600">
                                Decor Ideas
                            </p>

                        </div>

                        <div className="rounded-2xl border border-stone-200 p-5">

                            <ShoppingBag className="mb-4 h-7 w-7 text-[#9C6A3F]" />

                            <p className="text-3xl font-bold text-[#4E342E]">
                                {totalProducts}+
                            </p>

                            <p className="mt-1 text-sm text-stone-600">
                                Shop The Look Products
                            </p>

                        </div>

                        <div className="rounded-2xl border border-stone-200 p-5">

                            <Lightbulb className="mb-4 h-7 w-7 text-[#9C6A3F]" />

                            <p className="text-3xl font-bold text-[#4E342E]">
                                Pro
                            </p>

                            <p className="mt-1 text-sm text-stone-600">
                                Designer Tips
                            </p>

                        </div>

                        <div className="rounded-2xl border border-stone-200 p-5">

                            <Pin className="mb-4 h-7 w-7 text-[#9C6A3F]" />

                            <p className="text-3xl font-bold text-[#4E342E]">
                                Save
                            </p>

                            <p className="mt-1 text-sm text-stone-600">
                                Pinterest Inspiration
                            </p>

                        </div>

                    </div>

                    {/* TOC */}

                    <div className="p-8">

                        <h3 className="mb-8 text-2xl font-bold text-[#4E342E]">
                            Table of Contents
                        </h3>

                        <div className="grid gap-3 md:grid-cols-2">

                            {items.map((item, index) => (

                                <Link
                                    key={index}
                                    href={`#section-${index + 1}`}
                                    className="group flex items-center gap-4 rounded-2xl border border-transparent p-4 transition hover:border-[#E9D8C8] hover:bg-[#FAF7F2]"
                                >

                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4E6D8] font-semibold text-[#9C6A3F]">

                                        {(index + 1)
                                            .toString()
                                            .padStart(2, "0")}

                                    </span>

                                    <span className="text-[17px] text-stone-700 transition group-hover:text-[#9C6A3F]">

                                        {item}

                                    </span>

                                </Link>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );

}