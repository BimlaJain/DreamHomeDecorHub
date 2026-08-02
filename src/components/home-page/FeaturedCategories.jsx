import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/HomePage";


export default function FeaturedCategories() {
    return (
        <section className="bg-[#faf7f2] py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
                        Browse Inspiration
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
                        Explore by Category
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
                        Discover beautiful ideas for every room in your home. Browse our
                        most popular decor collections and find inspiration for your next
                        makeover.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link
                            key={category.title}
                            href={category.href}
                            className="group relative h-[420px] overflow-hidden rounded-[28px] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                                <h3 className="text-2xl font-bold">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm text-stone-200">
                                    Beautiful ideas & inspiration
                                </p>

                                <span className="mt-5 inline-flex items-center gap-2 font-medium">
                                    Explore
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
