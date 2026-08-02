import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { products } from "@/data/WallShelves";

export default function TopPicks() {
    const topProducts = products.wallShelves.slice(0, 3);

    return (
        <section id="top-picks" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center max-w-2xl mx-auto">

                    <span className="inline-block rounded-full bg-[#365947]/10 px-4 py-2 text-sm font-semibold text-[#365947]">
                        Our Top Picks
                    </span>

                    <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                        Best Wall Shelves at a Glance
                    </h2>

                    <p className="mt-4 text-[#666666] text-lg leading-8">
                        Don't want to read the full review? Here are our three favorite
                        floating wall shelves for every budget.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {topProducts.map((product) => (

                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-3xl border border-stone-200 bg-[#F8F6F2] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* Image */}

                            <div className="relative">

                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={600}
                                    height={400}
                                    className="h-96 w-full transition duration-500 group-hover:scale-105"
                                />

                                <span className="absolute left-5 top-5 rounded-full bg-[#365947] px-4 py-2 text-sm font-semibold text-white">
                                    {product.badge}
                                </span>

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <h3 className="text-2xl font-semibold text-[#1E1E1E]">
                                    {product.title}
                                </h3>

                                <div className="mt-3 flex items-center gap-2">

                                    <Star
                                        className="fill-yellow-400 text-yellow-400"
                                        size={18}
                                    />

                                    <span className="font-semibold">
                                        {product.rating}
                                    </span>

                                    <span className="text-[#666666]">
                                        ({product.reviews})
                                    </span>

                                </div>

                                <p className="mt-5 text-[#666666] leading-7">
                                    {product.description}
                                </p>

                                <div className="mt-6 flex items-center justify-between">

                                    <div>

                                        <p className="text-sm text-[#666666]">
                                            Starting From
                                        </p>

                                        <h4 className="text-2xl font-bold text-[#365947]">
                                            {product.price}
                                        </h4>

                                    </div>

                                    <Link
                                        href={`#product-${product.id}`}
                                        className="flex items-center gap-2 rounded-full bg-[#365947] px-5 py-3 text-white transition hover:bg-[#294437]"
                                    >
                                        View Review
                                        <ArrowRight size={17} />
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}