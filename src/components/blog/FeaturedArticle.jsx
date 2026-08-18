import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import articles from "@/data/articles/Index";

export default function FeaturedArticle() {

    // Automatically find latest article
    const latestArticle = [...articles].sort(
        (a, b) =>
            new Date(b.updated) - new Date(a.updated)
    )[0];

    // Safety check
    if (!latestArticle) {
        return null;
    }

    return (
        <section className="py-20">

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

                </div>


                {/* Featured Card */}
                <div className="grid overflow-hidden rounded-[36px] bg-[#F8F6F2] shadow-sm lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative min-h-[500px] overflow-hidden">

                        <Image
                            src={latestArticle.image}
                            alt={latestArticle.title}
                            fill
                            priority
                            className="object-contain transition duration-700 hover:scale-105"
                        />

                    </div>


                    {/* Content */}
                    <div className="flex flex-col justify-center p-10 md:p-16">

                        {/* Category */}
                        <span className="w-fit rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-stone-600">
                            {latestArticle.category}
                        </span>


                        {/* Title */}
                        <h3 className="mt-8 text-4xl font-light font-serif leading-tight text-stone-900">
                            {latestArticle.title}
                        </h3>


                        {/* Description */}
                        <p className="mt-6 text-lg leading-8 text-stone-600">
                            {Array.isArray(latestArticle.description)
                                ? latestArticle.description[0]
                                : latestArticle.description}
                        </p>


                        {/* Meta */}
                        <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">

                            <span>
                                {latestArticle.readTime}
                            </span>

                            <span>•</span>

                            <span>
                                {new Date(
                                    latestArticle.updated
                                ).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>

                        </div>


                        {/* Button */}
                        <Link
                            href={`/blog/${latestArticle.slug}`}
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