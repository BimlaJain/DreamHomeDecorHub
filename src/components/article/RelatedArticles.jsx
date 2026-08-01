import Image from "next/image";
import Link from "next/link";

const relatedArticles = [
    {
        slug: "scandinavian-living-room-ideas",
        image: "/images/blog/article/scandinavian/scandinavian.webp",
        category: "Living Room",
        title: "12 Scandinavian Living Room Ideas for a Cozy Home",
        readTime: "6 min read",
    },
    {
        slug: "coffee-table-styling-ideas",
        image: "/images/blog/article/coffee-table/coffeeTable.webp",
        category: "Decor",
        title: "10 Coffee Table Styling Ideas That Look Effortless",
        readTime: "5 min read",
    },
    {
        slug: "small-bedroom-decor-ideas",
        image: "/images/blog/article/bedroom/bedroom.webp",
        category: "Bedroom",
        title: "15 Small Bedroom Decor Ideas That Maximize Space",
        readTime: "7 min read",
    },
];

export default function RelatedArticles() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                        Keep Reading
                    </p>

                    <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                        Related Articles
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                        Continue exploring home styling inspiration with more
                        decorating ideas curated by our design experts.
                    </p>

                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {relatedArticles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className="relative h-64 overflow-hidden">

                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-center transition duration-500 group-hover:scale-105"
                                />

                            </div>

                            <div className="p-6">

                                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                                    {article.category}
                                </p>

                                <h3 className="mt-3 font-serif text-2xl text-stone-900 transition group-hover:text-stone-700">
                                    {article.title}
                                </h3>

                                <p className="mt-5 text-sm text-stone-500">
                                    {article.readTime}
                                </p>
                                <p className="pt-2 font-bold text-lg">coming soon</p>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}