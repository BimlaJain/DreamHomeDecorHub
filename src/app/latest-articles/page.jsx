import articles from "@/data/articles/Index";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/home-page/Header";

export const metadata = {
    title: "Latest Home Decor Articles",
    description:
        "Discover the latest home decor ideas, bedroom inspiration, living room styling, and interior design tips.",
};

export default function LatestArticlesPage() {

    const latestArticles = [...articles]
        .sort((a, b) => new Date(b.updated) - new Date(a.updated))
        .slice(0, 6);

    return (
        <main className="">
            <Header />
            <div className="container mx-auto">

            <h1 className="text-5xl pt-10 font-bold text-center">
                Latest Articles
            </h1>

            <p className="text-center text-gray-600 mt-4">
                Explore our newest home decor inspiration.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                {latestArticles.map((article) => (

                    <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                    >

                        <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

                            <Image
                                src={article.image}
                                alt={article.title}
                                width={700}
                                height={500}
                                className="w-full object-cover"
                            />

                            <div className="p-6">

                                <span className="text-sm text-orange-600 font-semibold">
                                    {article.category}
                                </span>

                                <h2 className="text-2xl font-bold mt-3">
                                    {article.title}
                                </h2>

                                <p className="mt-2 text-gray-500">
                                    {article.readTime}
                                </p>

                                <button className="mt-5 text-orange-600 font-semibold">
                                    Read Article →
                                </button>

                            </div>

                        </div>

                    </Link>

                ))}

                </div>
            </div>

        </main>
    );
}