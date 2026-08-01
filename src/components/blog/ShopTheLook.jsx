"use client";
import Link from "next/link";
import { collections } from "@/data/Blog";

export default function ShopTheLook() {
    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-sm uppercase tracking-widest text-amber-700 font-semibold">
                        Curated Collections
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-gray-900">
                        Shop the Look
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Recreate your favorite floating shelf style with our curated
                        collection of shelves and home decor.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {collections.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {item.description}
                                </p>

                                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-700">
                                    Shop Collection →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}