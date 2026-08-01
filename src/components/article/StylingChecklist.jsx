import { Check } from "lucide-react";

const checklist = [
    "Choose a neutral color palette for a clean minimalist look.",
    "Mix books, ceramics, greenery, and artwork thoughtfully.",
    "Vary object heights to create visual balance.",
    "Leave intentional empty space on every shelf.",
    "Use warm lighting to enhance the overall styling.",
    "Display only a few meaningful decorative pieces.",
    "Limit decorative objects to avoid visual clutter.",
    "Refresh shelf styling seasonally without changing everything.",
];

export default function StylingChecklist() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-5xl px-6">

                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Quick Recap
                </p>

                <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                    Minimalist Shelf Styling Checklist
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
                    Before you finish styling your floating shelves, use this
                    simple checklist to make sure every detail contributes to a
                    balanced, modern, and clutter-free space.
                </p>

                <div className="mt-12 grid gap-5 md:grid-cols-2">

                    {checklist.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-[#F8F6F2] p-5"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white">
                                <Check size={18} />
                            </div>

                            <p className="leading-7 text-stone-700">
                                {item}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}