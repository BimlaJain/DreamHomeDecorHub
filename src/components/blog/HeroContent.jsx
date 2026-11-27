
import Link from "next/link";

export default function HeroContent() {
    return (
        <div className="flex-1">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#b18a6a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a77c5b]">
                    A Little Inspiration For Everyday Living
                </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 font-serif text-5xl font-normal leading-[1.15] tracking-tight text-[#302923] sm:text-6xl lg:text-7xl">

                Making Everyday

                <span className="block italic text-[#a77c5b]">
                    Beautiful.
                </span>

                Little Ideas,
                <span className="block">
                    Lovely Living.
                </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-[#81776e] sm:text-lg">
                Discover thoughtful gift ideas, beautiful home decor,
                clever organization tips, seasonal inspiration and
                lovely finds to make everyday life a little more special.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

                <Link
                    href="/latest-articles"
                    className="inline-flex items-center gap-3 rounded-full bg-[#42362e] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a77c5b]"
                >
                    Explore Inspiration

                    <span className="text-lg">→</span>
                </Link>

                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 border-b border-[#b18a6a] pb-2 text-sm font-medium text-[#66574a] transition hover:text-[#a77c5b]"
                >
                    Get to know me
                </Link>

            </div>

            {/* Bottom decorative text */}
            <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d5c5b5]" />

                <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#a39485]">
                    Home · Gifts · Lifestyle · Inspiration
                </span>
            </div>

        </div>
    );
}
