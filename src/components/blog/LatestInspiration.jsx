"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles/Index";

export default function LatestInspiration() {

    const [currentPage, setCurrentPage] = useState(1);

    const articlesPerPage = 3;

    const sortedArticles = [...articles].sort(
        (a, b) =>
            new Date(b.updated) - new Date(a.updated)
    );

    const totalPages = Math.ceil(
        sortedArticles.length / articlesPerPage
    );

    const startIndex =
        (currentPage - 1) * articlesPerPage;

    const currentArticles = sortedArticles.slice(
        startIndex,
        startIndex + articlesPerPage
    );

    return (
        <section className="py-20">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-14 text-center">

                    <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                        Latest Inspiration
                    </p>

                    <h2 className="mt-4 text-4xl font-light text-stone-900 md:text-5xl">
                        Fresh Ideas for Every Space
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                        Explore our newest decorating ideas,
                        styling guides, and inspiration to elevate
                        every room in your home.
                    </p>

                </div>


                {/* Articles */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {currentArticles.map((article) => (

                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group"
                        >

                            <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">

                                <div className=" overflow-hidden">

                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={700}
                                        height={500}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                </div>

                                <div className="p-6">

                                    <p className="text-sm uppercase tracking-widest text-stone-500">
                                        {article.category}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                                        {article.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-stone-500">
                                        {article.readTime}
                                    </p>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-14 flex items-center justify-center gap-2">

                        {/* Previous Button */}
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className={`
                flex h-11 w-11 items-center justify-center
                rounded-full text-lg transition
                ${currentPage === 1
                                    ? "cursor-not-allowed bg-stone-100 text-stone-300"
                                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                                }
            `}
                            aria-label="Previous page"
                        >
                            ←
                        </button>


                        {/* Pagination Numbers */}
                        <div className="flex items-center gap-2">

                            {/* First page */}
                            <button
                                onClick={() => setCurrentPage(1)}
                                className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-full text-sm transition
                    ${currentPage === 1
                                        ? "bg-stone-900 text-white shadow-md"
                                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                    }
                `}
                            >
                                1
                            </button>


                            {/* Left dots */}
                            {currentPage > 3 && (
                                <span className="px-1 text-stone-400">
                                    ...
                                </span>
                            )}


                            {/* Middle pages */}
                            {Array.from(
                                { length: totalPages },
                                (_, index) => index + 1
                            )
                                .filter((page) => {

                                    // First page already shown
                                    if (page === 1) return false;

                                    // Last page separately shown
                                    if (page === totalPages) return false;

                                    // Show pages around current page
                                    return Math.abs(page - currentPage) <= 1;
                                })
                                .map((page) => (

                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`
                            flex h-11 w-11 items-center justify-center
                            rounded-full text-sm transition
                            ${currentPage === page
                                                ? "bg-stone-900 text-white shadow-md"
                                                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                            }
                        `}
                                    >
                                        {page}
                                    </button>

                                ))}


                            {/* Right dots */}
                            {currentPage < totalPages - 2 && (
                                <span className="px-1 text-stone-400">
                                    ...
                                </span>
                            )}


                            {/* Last page */}
                            {totalPages > 1 && (
                                <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    className={`
                        flex h-11 w-11 items-center justify-center
                        rounded-full text-sm transition
                        ${currentPage === totalPages
                                            ? "bg-stone-900 text-white shadow-md"
                                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                        }
                    `}
                                >
                                    {totalPages}
                                </button>
                            )}

                        </div>


                        {/* Next Button */}
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className={`
                flex h-11 w-11 items-center justify-center
                rounded-full text-lg transition
                ${currentPage === totalPages
                                    ? "cursor-not-allowed bg-stone-100 text-stone-300"
                                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                                }
            `}
                            aria-label="Next page"
                        >
                            →
                        </button>

                    </div>
                )}

            </div>

        </section>
    );
}