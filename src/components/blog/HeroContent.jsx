import Link from "next/link";

export default function HeroContent() {
    return (
        <div className="flex-1">

            <span className="inline-flex rounded-full border font-semibold border-stone-300 px-4 py-2 text-xs uppercase tracking-[0.25em] text-stone-600">
                Dream Home Decor 
            </span>

            <h1 className="mt-8 text-5xl font-light leading-tight text-stone-900 md:text-7xl font-serif">
                Beautiful Ideas for the Home You Love
               
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
                Explore inspiring decor ideas, practical tips, stylish makeovers, and simple ways to make every corner of your home feel beautiful, comfortable, and uniquely yours.
            </p>

            <Link
                href="/latest-articles"
                className="mt-10 inline-flex rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-black"
            >
                Explore Inspiration →
            </Link>

        </div>
    );
}