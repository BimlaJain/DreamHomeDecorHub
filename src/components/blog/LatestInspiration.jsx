import ArticleCard from "./ArticleCard";

import { articles } from "@/data/Blog";

export default function LatestInspiration() {
    return (
        <section className="bg-[#F8F6F2] py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

                    <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                        Latest Inspiration
                    </p>

                    <h2 className="mt-4 text-4xl font-light text-stone-900 md:text-5xl">
                        Fresh Ideas for Every Space
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
                        Explore our newest decorating ideas, styling guides, and
                        minimalist shelf inspiration to elevate every room in your home.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {articles.map((article) => (
                        <ArticleCard
                            key={article.slug}
                            {...article}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}