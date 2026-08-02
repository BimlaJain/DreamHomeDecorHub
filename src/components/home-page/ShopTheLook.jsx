import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/HomePage";

export default function ShopTheLook() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
                        Shop
                    </span>

                    <h2 className="mt-3 text-5xl font-bold text-stone-900">
                        Shop the Look
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
                        Bring your dream home to life with our favorite decor pieces.
                        Carefully selected to match every style on Dream Home Decor Hub.
                    </p>

                </div>

                {/* Products */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {products.map((item) => (

                        <div
                            key={item.title}
                            className="group overflow-hidden rounded-[30px] border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* Product Image */}

                            <div className="relative h-[340px] overflow-hidden">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
                                    {item.category}
                                </span>

                                <h3 className="mt-4 text-2xl font-bold text-stone-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-stone-600 leading-7">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-stone-900 transition-all duration-300 group-hover:gap-3"
                                >
                                    View Details
                                    <span>→</span>
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}