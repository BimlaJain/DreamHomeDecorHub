import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[#faf7f2]">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">
                {/* Left Content */}
                <div className="flex-1">
                    <p className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
                        ✨ Home Decor Inspiration 2026
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-stone-900 lg:text-6xl">
                        Create a Home
                        <br />
                        You'll Love.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                        Discover beautiful home decor ideas, room inspiration, DIY
                        projects, organization tips, and the latest interior design
                        trends to transform every corner of your home.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/blog"
                            className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
                        >
                            Explore Ideas →
                        </Link>

                        <Link
                            href="/latest-articles"
                            className="rounded-full border border-stone-300 bg-white px-8 py-4 font-semibold text-stone-900 transition hover:border-black"
                        >
                            Latest Articles
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 flex gap-10">
                        <div>
                            <h3 className="text-3xl font-bold">300+</h3>
                            <p className="text-stone-500">Decor Ideas</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">50+</h3>
                            <p className="text-stone-500">Room Guides</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">100%</h3>
                            <p className="text-stone-500">Free Inspiration</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <img
                        src="/images/home-page/hero.webp"
                        alt="Modern Home Decor"
                        className="h-[650px] w-full rounded-[40px] object-cover shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}