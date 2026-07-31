"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "@/data/Blog";



export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[650px] w-full flex-1 overflow-hidden rounded-[32px]">

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${current === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />
                </div>
            ))}

            <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-5 py-3 backdrop-blur-md">
                <p className="text-sm tracking-wide text-stone-700">
                    {slides[current].title}
                </p>
            </div>

        </div>
    );
}