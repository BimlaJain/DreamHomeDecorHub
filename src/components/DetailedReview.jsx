"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, Star, ArrowRight } from "lucide-react";
import { products } from "@/data/WallShelves";

export default function DetailedReview() {
    return (
        <section className="bg-[#F8F6F2] py-20">
            <div className="mx-auto max-w-7xl px-6">

                {products.wallShelves.map((product) => (
                    <section
                        key={product.id}
                        id={`product-${product.id}`}
                        className="mb-24 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm lg:p-12"
                    >
                        {/* Badge */}

                        <span className="inline-flex rounded-full bg-[#365947] px-4 py-2 text-sm font-semibold text-white">
                            {product.badge}
                        </span>

                        {/* Title */}

                        <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                            {product.title}
                        </h2>

                        {/* Rating */}

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-1">
                                <Star
                                    className="fill-yellow-400 text-yellow-400"
                                    size={18}
                                />
                                <span className="font-semibold">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="text-gray-500">
                                ({product.reviews})
                            </span>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                {product.price}
                            </span>
                        </div>

                        {/* Content */}

                        <div className="mt-10 grid gap-10 lg:grid-cols-2">

                            {/* Image */}

                            <div className="overflow-hidden rounded-3xl bg-[#F8F6F2]">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={700}
                                    height={700}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Text */}

                            <div>

                                <h3 className="text-2xl font-bold text-[#1E1E1E]">
                                    Why We Recommend It
                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">
                                    {product.description} {product.whyRecommend}
                                </p>

                                {/* Pros */}

                                <div className="mt-8">

                                    <h4 className="text-xl font-semibold">
                                        Pros
                                    </h4>

                                    <ul className="mt-4 space-y-3">
                                       {product.pros.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check
                                                className="text-green-600"
                                                size={18}
                                            />
                                            {item}
                                        </li>
                                       ))}
                                        
                                    </ul>

                                </div>

                                {/* Cons */}

                                <div className="mt-8">

                                    <h4 className="text-xl font-semibold">
                                        Cons
                                    </h4>

                                    <ul className="mt-4 space-y-3">

                                        {product.cons.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3"
                                            >
                                                <X
                                                    className="text-red-500 shrink-0"
                                                    size={18}
                                                />

                                                {item}
                                            </li>
                                        ))}

                                    </ul>

                                </div>

                                {/* Button */}

                                <div className="mt-10">

                                    <Link
                                        href={product.affiliateLink} target="_blank" rel="nofollow sponsored"
                                        className="inline-flex items-center gap-2 rounded-full bg-[#365947] px-7 py-4 font-semibold text-white transition hover:bg-[#294437]"
                                    >
                                        Check Today's Price
                                        <ArrowRight size={18} />
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </section>
                ))}

            </div>
        </section>
    );
}