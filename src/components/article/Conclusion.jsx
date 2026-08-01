import Link from "next/link";

export default function Conclusion() {
    return (
        <section className="bg-[#F8F6F2] py-20">
            <div className="mx-auto max-w-4xl px-6 text-center">

                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Final Thoughts
                </p>

                <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                    Beautiful Shelves Begin with Simple Choices
                </h2>

                <p className="mt-8 text-lg leading-8 text-stone-600">
                    Styling minimalist floating shelves isn't about buying more
                    decorations—it's about selecting the right pieces and arranging
                    them with intention. A thoughtful combination of books,
                    greenery, ceramics, artwork, and empty space can completely
                    transform your living room into a calm, elegant, and inviting
                    space.
                </p>

                <p className="mt-6 text-lg leading-8 text-stone-600">
                    Start with one or two of these ideas, experiment with different
                    layouts, and remember that simplicity often creates the most
                    timeless interiors. With a little creativity, your floating
                    shelves can become one of the most beautiful focal points in
                    your home.
                </p>

                <div className="mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700"
                    >
                        Explore More Home Decor Ideas
                    </Link>
                </div>

            </div>
        </section>
    );
}