"use client";

import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

export default function HeroSection() {
    return (
        <section className="bg-[#F8F6F2]">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-14 px-6 py-16 lg:flex-row">

                <HeroContent />

                <HeroSlider />

            </div>
        </section>
    );
}