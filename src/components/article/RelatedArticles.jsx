import Link from "next/link";


const RelatedArticles = ({ articles }) => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-5">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                        Explore More
                    </p>
                    <h2 className="text-4xl font-bold mt-3">
                        Related Articles
                    </h2>
                </div>
                <div className="flex flex-col gap-8">
                    { articles.slice(0, 3).map((article) => (
                            <Link
                                href={`/articles/${article.slug}`}
                                key={article.id}
                                className="group p-5  hover:shadow-lg transition duration-300">
                                <article>
                                    <div className="overflow-hidden rounded-3xl">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-contain group-hover:scale-105 transition duration-500"/>
                                    </div>
                                    <p className="mt-5 text-sm text-gray-500 ">
                                        {article.category}
                                    </p>
                                    <h3 className=" mt-2 text-xl font-semibold leading-snug ">
                                        {article.title}
                                    </h3>
                                    <span className=" inline-block mt-4 text-sm font-medium ">
                                        Read More →
                                    </span>
                                </article>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export default RelatedArticles;