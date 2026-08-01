import { Lightbulb } from "lucide-react";

export default function DesignerTip() {
    return (
        <section className="bg-[#F8F6F2] py-20">
            <div className="mx-auto max-w-4xl px-6">

                <div className="rounded-[32px] border border-stone-200 bg-white p-10 shadow-sm">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-white">
                            <Lightbulb size={26} />
                        </div>

                        <div>

                            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                                Expert Advice
                            </p>

                            <h2 className="mt-1 font-serif text-3xl font-light text-stone-900">
                                Designer Tip
                            </h2>

                        </div>

                    </div>

                    <div className="mt-8 space-y-6">

                        <p className="text-lg leading-8 text-stone-700">
                            One of the biggest secrets to beautiful floating shelf styling
                            is knowing when <span className="font-semibold text-stone-900">not</span> to
                            decorate. Leaving intentional empty space helps every object
                            stand out while creating a calm and balanced composition.
                        </p>

                        <p className="text-lg leading-8 text-stone-700">
                            Instead of filling every inch, combine books, ceramics,
                            greenery, and artwork with breathing room between them.
                            This approach creates a luxurious, curated look rather than
                            making the shelves feel crowded.
                        </p>

                    </div>

                    <div className="mt-10 rounded-2xl bg-stone-100 p-6">

                        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                            Quick Rule
                        </p>

                        <p className="mt-3 text-xl font-medium leading-8 text-stone-900">
                            Style in groups of three and always leave around
                            <span className="font-semibold"> 30–40% </span>
                            of your shelf empty for a clean minimalist appearance.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}