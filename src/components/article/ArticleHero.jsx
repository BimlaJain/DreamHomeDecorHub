"use client";

import Image from "next/image";

export default function ArticleHero({
    categories,
    title,
    description,
    updated,
    readTime,
    image,
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
                            Dream Home Decor Hub
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

        </section>
    );
}