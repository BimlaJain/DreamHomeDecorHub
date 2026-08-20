import Link from "next/link";
import Image from "next/image";
import Header from "@/components/home-page/Header";
import Footer from "@/components/home-page/Footer";
import articles from "@/data/articles/Index";

export const metadata = {
    title: "Home Decor Ideas & Inspiration",
    description:
        "Discover beautiful home decor ideas, styling inspiration, room decorating tips, and practical ways to make your home feel more beautiful and inviting.",
};

export default function HomeDecorPage() {

    const homeDecorArticles = articles
        .filter((article) =>
            article.categories?.includes("Home Decor")
        )
        .sort(
            (a, b) =>
                new Date(b.updated) - new Date(a.updated)
        );

    return (
        <main>

            <Header />

            {/* Hero */}
            <section className="bg-[#F8F6F2] py-24">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="inline-flex rounded-full bg-[#F4E6D8] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]">

                       Home Decor

                    </span>

                    <h1 className="mt-5 font-serif text-5xl font-light leading-tight text-stone-900 md:text-6xl">
                        Ideas to Make Your Home
                        <br />
                        Feel More Like You
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">
                        Discover beautiful decorating ideas, room inspiration,
                        styling tips, and practical ways to create a home
                        that feels comfortable, personal, and effortlessly stylish.
                    </p>

                </div>

            </section>


            {/* Articles */}
            <section className="py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-12">
                        <span className="inline-flex rounded-full bg-[#F4E6D8] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]">

                           Latest Inspiration

                        </span>

                        <h2 className="mt-4 font-serif text-4xl font-light text-stone-900 md:text-5xl">
                            Home Decor Ideas
                        </h2>

                    </div>


                    {homeDecorArticles.length === 0 ? (

                        <p className="py-20 text-center text-stone-500">
                            No home decor articles found.
                        </p>

                    ) : (

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                            {homeDecorArticles.map((article) => (

                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="group"
                                >

                                    <article className="overflow-hidden rounded-3xl bg-[#F8F6F2]">

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

                                        <div className="p-6">

                                            <p className="text-xs uppercase tracking-widest text-stone-500">
                                                {article.category}
                                            </p>

                                            <h3 className="mt-3 text-2xl font-serif font-medium leading-tight text-stone-900">
                                                {article.title}
                                            </h3>

                                            <p className="mt-4 text-sm text-stone-500">
                                                {article.readTime}
                                            </p>

                                            <span className="mt-5 inline-block text-sm font-medium text-stone-900">
                                                Read Article →
                                            </span>

                                        </div>

                                    </article>

                                </Link>

                            ))}

                        </div>

                    )}

                </div>

            </section>


            <Footer />

        </main>
    );
}