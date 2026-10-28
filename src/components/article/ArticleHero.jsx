"use client";

import Image from "next/image";


export default function ArticleHero({
    categories,
    title,
    description,
    updated,
    readTime,
    image,
    topPicks,
}) {
    return (
        <section className="bg-[#FAF7F2] pb-20">

            {/* Content */}

            <div className="mx-auto max-w-5xl px-6 pt-14">

                {/* Category */}

                <div className="flex flex-wrap gap-2">
                    {categories?.map((category) => (
                        <span
                            key={category}
                            className="inline-flex rounded-full bg-[#F4E6D8] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Title */}

                <h1 className="mt-6 font-playfair text-4xl font-bold leading-tight text-[#4E342E] md:text-6xl">

                    {title}

                </h1>

                {/* Description */}

                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">

                    {description}

                </p>

                {/* Meta */}

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-500">

                    <span>
                        Updated
                        <span className="ml-1 font-medium text-[#4E342E]">
                            {updated}
                        </span>
                    </span>

                    <span>•</span>

                    <span>{readTime}</span>

                    <span>•</span>

                    <span>
                        By
                        <span className="ml-1 font-medium text-[#4E342E]">
                            Styled By Vimal
                        </span>
                    </span>

                </div>

            </div>

            {/* Hero Image */}

            {image && (
                <div className="mx-auto mt-14 max-w-7xl px-6">

                    <div className="flex items-center justify-center">

                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={500}
                          
                            className="object-fill h-full"
                        />

                    </div>

                </div>
            )}
            {/* Optional Top Picks */}
            {topPicks?.items?.length > 0 && (
                <div className="mx-auto mt-12 max-w-5xl px-6">
                    <div className="rounded-2xl border border-[#E9D8C8] bg-white p-6 md:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]">
                            Editor's Selection
                        </p>

                        <h2 className="mt-3 font-playfair text-2xl font-bold text-[#4E342E] md:text-3xl">
                            {topPicks.title || "Our Top Picks"}
                        </h2>

                        <div className="mt-6 divide-y divide-[#EEE5DC]">
                            {topPicks.items.map((pick, index) => (
                                <div key={`${pick.label}-${index}`} className="py-5">
                                    <p className="text-lg leading-8 text-stone-700">
                                        <strong className="text-[#4E342E]">
                                            {pick.label}:
                                        </strong>{" "}


                                        {pick.link ? (
                                            <a
                                                href={pick.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline decoration-2 underline-offset-4 hover:text-[#9C6A3F]"
                                            >
                                                {pick.title}
                                            </a>
                                        ) : (
                                            pick.title
                                        )}

                                    </p>

                                    {pick.description && (
                                        <p className="mt-3 text-base leading-8 text-stone-600">
                                            “{pick.description}”
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}