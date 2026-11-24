
import Link from "next/link";

const categories = [
    "Gift Ideas",
    "Home Decor",
    "Organization",
    "Seasonal Inspiration",
    "Digital Products",
];

export default function Hero() {
    return (
        <section className="overflow-hidden bg-[#faf7f2]">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">

                {/* Left Content */}
                <div>
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbcfc1] bg-white px-5 py-2 text-sm font-medium tracking-wide text-[#776456]">
                        ✨ A LITTLE INSPIRATION FOR EVERYDAY LIVING
                    </p>

                    <h1 className="font-serif text-5xl leading-[1.15] tracking-tight text-[#292725] sm:text-6xl lg:text-7xl">
                        Find Your Next
                        <br />
                        <span className="font-normal italic text-[#ad7865]">
                            Favorite Thing.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-8 text-[#776f68] sm:text-lg">
                        From thoughtful gift ideas and beautiful home finds
                        to clever organization tips and everyday inspiration —
                        discover little things that make life more beautiful.
                    </p>

                    {/* Categories */}
                    <div className="mt-8 flex flex-wrap gap-2.5">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="rounded-full border border-[#e5dbd0] bg-white/80 px-4 py-2 text-sm text-[#65584e] transition hover:border-[#9b7669] hover:bg-[#f1e9e1]"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/blog"
                            className="rounded-full bg-[#292725] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#776456]"
                        >
                            Explore Inspiration →
                        </Link>

                        <Link
                            href="/latest-articles"
                            className="rounded-full border border-[#d8ccc0] bg-transparent px-8 py-4 text-sm font-semibold text-[#292725] transition duration-300 hover:bg-white"
                        >
                            Latest Articles
                        </Link>
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-12 flex items-center gap-3">
                        <div className="h-px w-10 bg-[#b49b88]" />
                        <p className="text-sm italic tracking-wide text-[#8c796b]">
                            Curated ideas, thoughtful finds & everyday inspiration.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#e8ded2]/70 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[32px]">
                        <img
                            src="/images/StyledByVimal.webp"
                            alt="Curated lifestyle inspiration, gifts and beautiful home finds"
                            className="h-[480px] w-full object-cover sm:h-[580px] lg:h-[650px]"
                        />

                        {/* Image Overlay Card */}
                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9b7669]">
                                Discover Something Lovely
                            </p>
                            <h3 className="mt-2 font-serif text-2xl text-[#292725]">
                                Inspiration for Every Little Thing.
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
