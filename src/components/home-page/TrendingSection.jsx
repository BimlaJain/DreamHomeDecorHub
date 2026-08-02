import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/HomePage";

export default function TrendingSection() {
    const featured = posts.find((post) => post.featured);
    const others = posts.filter((post) => !post.featured);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-14 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
                        Trending
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-stone-900">
                        Trending This Week
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
                        Discover the latest home decor ideas everyone is loving.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Featured Card */}

                    <Link
                        href={featured.href}
                        className="group relative h-[650px] overflow-hidden rounded-[32px]"
                    >
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-10 text-white">

                            <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                                {featured.category}
                            </span>

                            <h3 className="mt-6 text-4xl font-bold leading-tight">
                                {featured.title}
                            </h3>

                            <p className="mt-5 max-w-md text-stone-200">
                                Discover stylish ideas to transform your home with beautiful,
                                modern interiors.
                            </p>

                            <span className="mt-8 inline-flex font-semibold">
                                Read Article →
                            </span>

                        </div>
                    </Link>

                    {/* Right Cards */}

                    <div className="grid gap-6">

                        {others.map((post) => (

                            <Link
                                key={post.title}
                                href={post.href}
                                className="group flex overflow-hidden rounded-[28px] bg-[#faf7f2] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="relative h-52 w-52 shrink-0 overflow-hidden">

                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                </div>

                                <div className="flex flex-col justify-center p-6">

                                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                                        {post.category}
                                    </span>

                                    <h3 className="mt-3 text-2xl font-bold text-stone-900">
                                        {post.title}
                                    </h3>

                                    <span className="mt-6 font-medium">
                                        Read More →
                                    </span>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

                {/* Button */}

                <div className="mt-16 text-center">

                    <Link
                        href="/blog"
                        className="inline-flex rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
                    >
                        View All Articles
                    </Link>

                </div>

            </div>
        </section>
    );
}