import { CircleAlert } from "lucide-react";

const mistakes = [
    {
        title: "Overcrowding the Shelf",
        description:
            "Adding too many decorative items makes floating shelves look busy and takes away from the clean minimalist aesthetic.",
    },
    {
        title: "Ignoring Scale & Height",
        description:
            "Using objects with similar sizes creates a flat display. Mix tall, medium, and small pieces for visual balance.",
    },
    {
        title: "Using Too Many Colors",
        description:
            "A wide range of colors can make the shelf feel chaotic. Stick to a neutral palette with one or two accent tones.",
    },
    {
        title: "Filling Every Empty Space",
        description:
            "Negative space is an important design element. Leaving some areas empty allows your decor to stand out.",
    },
    {
        title: "Forgetting About Lighting",
        description:
            "Beautiful styling can lose its impact without proper lighting. Warm ambient light enhances textures and creates a cozy atmosphere.",
    },
];

export default function CommonMistakes() {
    return (
        <section className="bg-[#F8F6F2] py-20">
            <div className="mx-auto max-w-5xl px-6">

                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Styling Guide
                </p>

                <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                    Common Mistakes to Avoid
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
                    Even beautiful decor pieces can look cluttered if they're not styled
                    thoughtfully. Avoid these common mistakes to create floating shelves
                    that feel balanced, elegant, and intentionally designed.
                </p>

                <div className="mt-12 space-y-5">

                    {mistakes.map((mistake, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">

                                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                                    <CircleAlert size={20} />
                                </div>

                                <div>

                                    <h3 className="text-xl font-semibold text-stone-900">
                                        {mistake.title}
                                    </h3>

                                    <p className="mt-2 leading-7 text-stone-600">
                                        {mistake.description}
                                    </p>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                <div className="mt-12 rounded-3xl border-l-4 border-stone-900 bg-white p-8">

                    <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                        Remember
                    </p>

                    <p className="mt-4 text-xl leading-9 text-stone-800">
                        Minimalist styling is not about owning fewer decorative pieces—
                        it's about displaying the <span className="font-semibold">right pieces</span> with
                        purpose, balance, and enough breathing room.
                    </p>

                </div>

            </div>
        </section>
    );
}