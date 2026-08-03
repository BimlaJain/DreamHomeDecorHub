import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PinterestCTA() {
    return (
        <section className="bg-stone-900 py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">

                <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                    More Inspiration Awaits
                </p>

                <h2 className="mt-4 font-serif text-5xl font-light text-white">
                    Follow Us on Pinterest
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                    Discover beautifully curated home decor ideas, minimalist room
                    inspiration, furniture styling tips, and seasonal decorating
                    trends. Save your favorite ideas and create your dream home,
                    one pin at a time.
                </p>

                <Link
                    href="https://in.pinterest.com/DecorHomeDecorHub/"
                    target="_blank"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-stone-900 transition hover:bg-stone-200"
                >
                    Follow on Pinterest
                    <ArrowUpRight size={18} />
                </Link>

            </div>
        </section>
    );
}