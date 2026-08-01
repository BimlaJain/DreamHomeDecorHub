"use client";
import Link from "next/link";

import { styles } from "@/data/Blog";

export default function BrowseByStyle() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Browse by Style
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Discover floating shelf inspiration that perfectly matches your
                        interior design style.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {styles.map((style) => (
                        <Link
                            key={style.slug}
                            href={`/blog/style/${style.slug}`}
                            className="group overflow-hidden rounded-3xl"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                                <img
                                    src={style.image}
                                    alt={style.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Title */}
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-semibold text-white">
                                        {style.title}
                                    </h3>

                                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        Explore
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12h14m-6-6 6 6-6 6"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}