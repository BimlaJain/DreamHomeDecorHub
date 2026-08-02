import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/HomePage";

export default function PopularCollections() {

    return (
        <section className="bg-[#faf7f2] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
                        Collections
                    </span>

                    <h2 className="mt-3 text-5xl font-bold text-stone-900">
                        Popular Decor Styles
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
                        Explore timeless decorating styles and discover the perfect look
                        for your dream home.
                    </p>

                </div>

                {/* Editorial Grid */}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {collections.map((item, index) => (

                        <Link
                            key={index}
                            href={item.href}
                            className={`group relative overflow-hidden rounded-[32px] ${item.className}`}
                        >

                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                            {/* Featured Badge */}

                            {index === 0 && (
                                <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-sm font-semibold">
                                    Featured Style
                                </div>
                            )}

                            {/* Content */}

                            <div className="absolute bottom-0 left-0 p-8 text-white">

                                <h3
                                    className={`font-bold ${index === 0 ? "text-5xl" : "text-3xl"
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                <p className="mt-3 max-w-sm text-stone-200">
                                    Beautiful interiors inspired by {item.title.toLowerCase()} style.
                                </p>

                                <span className="mt-6 inline-flex items-center gap-2 font-semibold">

                                    Explore Style

                                    <span className="transition duration-300 group-hover:translate-x-2">
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