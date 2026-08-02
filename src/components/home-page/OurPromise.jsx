import Image from "next/image";
import Link from "next/link";

export default function OurPromise() {
    return (
        <section className="bg-[#faf7f2] py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left Image */}

                <div className="relative h-[650px] overflow-hidden rounded-[40px]">

                    <Image
                        src="/images/home-page/our-idea.webp"
                        alt="Dream Home Decor Hub"
                        fill
                        className="object-cover"
                    />

                </div>

                {/* Right Content */}

                <div>

                    <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
                        About Dream Home Decor Hub
                    </span>

                    <h2 className="mt-5 text-5xl font-bold leading-tight text-stone-900">
                        Designed to Inspire Every Home
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-stone-600">
                        We believe every home deserves to feel warm, beautiful,
                        and uniquely personal. That's why we curate timeless
                        decorating ideas, practical room inspiration, and
                        thoughtfully selected decor pieces that help you create
                        spaces you'll truly love.
                    </p>

                    <div className="mt-10 space-y-6">

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl">
                                ✨
                            </div>

                            <div>

                                <h4 className="font-semibold text-stone-900">
                                    Curated Inspiration
                                </h4>

                                <p className="text-stone-600">
                                    Fresh decorating ideas for every room.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl">
                                🛒
                            </div>

                            <div>

                                <h4 className="font-semibold text-stone-900">
                                    Handpicked Decor
                                </h4>

                                <p className="text-stone-600">
                                    Carefully selected products you'll actually love.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl">
                                📌
                            </div>

                            <div>

                                <h4 className="font-semibold text-stone-900">
                                    Pinterest-Worthy Ideas
                                </h4>

                                <p className="text-stone-600">
                                    Save-worthy interiors with timeless style.
                                </p>

                            </div>

                        </div>

                    </div>

                    <Link
                        href="/about"
                        className="mt-12 inline-flex rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-black"
                    >
                        Explore Our Story →
                    </Link>

                </div>

            </div>
        </section>
    );
}