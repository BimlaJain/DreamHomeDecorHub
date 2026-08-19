import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles/Index";

const RelatedArticles = ({ currentSlug, currentCategory }) => {

    const relatedArticles = (articles || [])
        .filter((article) => article.slug !== currentSlug)
        .filter((article) => {
            if (!currentCategory) return true;

            return article.category === currentCategory;
        })
        .sort(
            (a, b) =>
                new Date(b.updated) - new Date(a.updated)
        )
        .slice(0, 3);

    // Agar related article nahi hai to section hide
    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <section className="py-20">

            <div className="mx-auto max-w-6xl px-5">

                {/* Heading */}
                <div className="mb-10">

                    <span className="inline-flex rounded-full bg-[#F4E6D8] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]">

                        Explore More

                    </span>


                    <h2 className="mt-3 text-4xl font-bold">
                        Related Articles
                    </h2>

                </div>


                {/* Articles */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {relatedArticles.map((article) => (

                        <Link
                            href={`/blog/${article.slug}`}
                            key={article.slug}
                            className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:shadow-lg"
                        >

                            <article>

                                {/* Image */}
                                <div className=" overflow-hidden">

                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={700}
                                        height={500}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                </div>


                                {/* Content */}
                                <div className="p-5">

                                    <p className="text-sm text-gray-500">
                                        {article.category}
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-500">
                                        {article.readTime}
                                    </p>

                                    <span className="mt-4 inline-block text-sm font-medium">
                                        Read More →
                                    </span>

                                </div>

                            </article>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default RelatedArticles;