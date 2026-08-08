"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "@/data/Blog";

export default function LatestInspiration() {
    const [currentPage, setCurrentPage] = useState(1);

    // Number of articles per page
    const articlesPerPage = 3;

    // Total pages
    const totalPages = Math.ceil(
        articles.length / articlesPerPage
    );

    // Calculate articles for current page
    const startIndex =
        (currentPage - 1) * articlesPerPage;

    const currentArticles = articles.slice(
        startIndex,
        startIndex + articlesPerPage
    );

    return (
        <section className="py-20">

            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-14 text-center">

                    <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                        Latest Inspiration
                    </p>

                    <h2 className="mt-4 text-4xl font-light text-stone-900 md:text-5xl">
                        Fresh Ideas for Every Space
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                        Explore our newest decorating ideas, styling guides,
                        and minimalist shelf inspiration to elevate every
                        room in your home.
                    </p>

                </div>


                {/* Articles */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {currentArticles.map((article) => (
                        <ArticleCard
                            key={article.slug}
                            {...article}
                        />
                    ))}

                </div>


                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-14 flex items-center justify-center gap-3">

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (

                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`
        flex h-11 w-11 items-center justify-center
        rounded-full text-sm transition-all duration-300
        ${currentPage === page
                                        ? "bg-stone-900 text-white shadow-md"
                                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                    }
    `}
                            >
                                {page}
                            </button>
                        ))}

                    </div>
                )}

            </div>

        </section>
    );
}