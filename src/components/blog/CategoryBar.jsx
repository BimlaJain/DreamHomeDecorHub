"use client";

import { useState } from "react";

const categories = [
    "All",
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Bathroom",
    "Office",
    "Small Spaces",
];

export default function CategoryBar() {
    const [active, setActive] = useState("All");

    return (
        <section className="sticky top-20 z-40 border-y border-stone-200 bg-[#F8F6F2]/90 backdrop-blur-md">
            <div className="mx-auto max-w-7xl overflow-x-auto scrollbar-hide">

                <div className="flex min-w-max gap-3 px-6 py-4">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActive(category)}
                            className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300
              
              ${active === category
                                    ? "border-stone-900 bg-stone-900 text-white"
                                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-900"
                                }
              
              `}
                        >
                            {category}
                        </button>
                    ))}

                </div>
            </div>
        </section>
    );
}