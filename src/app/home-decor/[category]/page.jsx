import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/home-page/Header";
import Footer from "@/components/home-page/Footer";

import articles from "@/data/articles/Index";


// Available categories
const categories = {
    "living-room": {
        name: "Living Room",
        description:
            "Create a living room that feels warm, comfortable, and beautifully styled with practical decorating ideas and inspiration.",
    },

    "bedroom": {
        name: "Bedroom",
        description:
            "Discover cozy bedroom decor ideas, styling tips, and simple ways to create a relaxing space you'll love coming home to.",
    },

    "kitchen": {
        name: "Kitchen",
        description:
            "Explore beautiful kitchen decor ideas, clever styling tips, and practical ways to make your kitchen feel warm and inviting.",
    },

    "bathroom": {
        name: "Bathroom",
        description:
            "Transform your bathroom into a beautiful and relaxing space with cozy decor, storage, and styling inspiration.",
    },

    "dining-room": {
        name: "Dining Room",
        description:
            "Discover dining room decorating ideas, table styling inspiration, lighting tips, and beautiful ways to create an inviting space.",
    },

    "home-office": {
        name: "Home Office",
        description:
            "Create a productive and beautiful workspace with cozy home office decor, organization, and styling ideas.",
    },
    "small-spaces": {
        name: "Small Spaces",
        description:
            "Make every inch count with clever small-space decorating, storage, and organization ideas that make compact homes feel beautiful, comfortable, and functional.",
    },
    "organization": {
        name: "Organization",
        description:
            "Discover smart organization ideas, clever storage solutions, and simple ways to keep every room tidy, functional, and beautifully styled.",
    },

    "seasonal-decor": {
        name: "Seasonal Decor",
        description:
            "Refresh your home throughout the year with beautiful seasonal decorating ideas, cozy styling inspiration, and simple ways to celebrate every season.",
    },

    "budget-decor": {
        name: "Budget Decor",
        description:
            "Create a beautiful home without overspending with affordable decorating ideas, budget-friendly styling tips, and smart ways to make your space look expensive for less.",
    },
};


export default async function CategoryPage({ params }) {

    const { category } = await params;

    const categoryInfo = categories[category];

    // Invalid category → 404
    if (!categoryInfo) {
        notFound();
    }


    // Convert URL category to article category
    const categoryArticles = articles
        .filter((article) => {

            return (
                article.category?.toLowerCase() ===
                categoryInfo.name.toLowerCase()
            );

        })
        .sort(
            (a, b) =>
                new Date(b.updated) - new Date(a.updated)
        );


    return (
        <main>

            <Header />


            {/* Hero */}

            <section className="bg-[#F8F6F2] py-24">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <span className="inline-flex rounded-full bg-[#F4E6D8] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#9C6A3F]">

                       Home Decor

                    </span>

                    <h1 className="mt-5 font-serif text-5xl font-light text-stone-900 md:text-6xl">
                        {categoryInfo.name}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                        {categoryInfo.description}
                    </p>

                </div>

            </section>


            {/* Articles */}

            <section className="py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-12">

                        <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                            Latest Inspiration
                        </p>

                        <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                            {categoryInfo.name} Ideas
                        </h2>

                    </div>


                    {categoryArticles.length === 0 ? (

                        <div className="py-20 text-center">

                            <p className="text-stone-500">
                                No articles found in this category yet.
                            </p>

                        </div>

                    ) : (

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                            {categoryArticles.map((article) => (

                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="group"
                                >

                                    <article className="overflow-hidden rounded-3xl bg-[#F8F6F2]">

                                        <div className=" overflow-hidden">

                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                width={700}
                                                height={500}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />

                                        </div>


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