import Link from "next/link";
import { articles } from "@/data/Article";

export default function QuickNavigation() {
    const article = articles.find(
        (item) => item.slug === "minimalist-floating-shelf-ideas"
    );

    return (
        <section  className="bg-[#F8F6F2] py-16">
            <div className="mx-auto max-w-5xl px-6">

                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Quick Navigation
                </p>

                <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                    Jump to an Idea
                </h2>

                <div className="mt-10  gap-4 ">
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {article.ideas.map((idea) => (
                            <a
                                key={idea.id}
                                href={`#${idea.id}`}
                                className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-6 py-5 transition hover:border-stone-900 hover:shadow-md"
                            >
                                <span className="text-stone-800">
                                    {idea.number}. {idea.title}
                                </span>

                                <span className="transition group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}