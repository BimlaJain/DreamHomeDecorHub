
import React from "react";
import {
    FaLeaf,
    FaHome,
    FaLightbulb,
    FaHeart,
    FaArrowRight,
    FaPinterestP,
    FaGift,
    FaBoxOpen,
    FaStar,
    FaRegCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/home-page/Header";
import Footer from "@/components/home-page/Footer";

const categories = [
    {
        number: "01",
        icon: <FaHome />,
        title: "Home Decor",
        description:
            "Thoughtful decor inspiration, beautiful corners, cozy spaces and little details that make a house feel like home.",
    },
    {
        number: "02",
        icon: <FaGift />,
        title: "Gift Ideas",
        description:
            "Meaningful, creative and beautiful gift ideas for birthdays, celebrations and every special moment.",
    },
    {
        number: "03",
        icon: <FaBoxOpen />,
        title: "Home Organization",
        description:
            "Clever organizing ideas, storage inspiration and simple ways to create a more functional, clutter-free home.",
    },
    {
        number: "04",
        icon: <FaRegCalendarAlt />,
        title: "Seasonal Styling",
        description:
            "Festive decorations, seasonal touches and inspiration to make every celebration feel a little more special.",
    },
    {
        number: "05",
        icon: <FaLeaf />,
        title: "Lifestyle Inspiration",
        description:
            "Little everyday ideas, aesthetic finds and simple ways to bring more beauty into your daily routine.",
    },
    {
        number: "06",
        icon: <FaStar />,
        title: "Curated Finds",
        description:
            "Discover-worthy products, thoughtful picks and lovely finds that combine style, usefulness and value.",
    },
];

const About = () => {
    return (
        <>
            <Header />

            <main className="overflow-hidden bg-[#faf8f5] text-[#302923]">

                {/* HERO / INTRODUCTION */}

                <section className="px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-12 text-center">
                            <div className="mb-5 flex items-center justify-center gap-3">
                                <span className="h-px w-9 bg-[#b18a6a]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a27b5b]">
                                    A Little About Me
                                </span>
                                <span className="h-px w-9 bg-[#b18a6a]" />
                            </div>

                            <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                                Hello, I'm{" "}
                                <span className="italic text-[#a77c5b]">
                                    Vimal.
                                </span>
                            </h1>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#81776e] sm:text-base">
                                A creative mind behind Styled by Vimal, sharing
                                inspiration for beautiful homes, thoughtful gifts,
                                organized spaces and the little things that make
                                everyday life special.
                            </p>
                        </div>

                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                            {/* Image */}

                            <div className="relative">
                                <div className="absolute -left-4 -top-4 h-full w-full rounded-[32px] border border-[#dfd2c4]" />

                                <img
                                    src="/images/StyledByVimal.webp"
                                    alt="Styled by Vimal"
                                    className="relative h-[420px] w-full rounded-[30px] object-cover shadow-sm sm:h-[560px]"
                                />

                                <div className="absolute -bottom-8 -right-3 max-w-[230px] rounded-2xl bg-white p-6 shadow-xl sm:-right-8">
                                    <FaHeart className="mb-3 text-xl text-[#b18a6a]" />

                                    <p className="font-serif text-xl italic leading-snug text-[#40352c]">
                                        Finding beauty in the little things.
                                    </p>

                                    <span className="mt-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a58a74]">
                                        A Styled by Vimal Thought
                                    </span>
                                </div>
                            </div>

                            {/* About Content */}

                            <div className="pt-8 lg:pt-0">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a77c5b]">
                                    The Person Behind The Page
                                </span>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.2] sm:text-5xl">
                                    A Love For All Things
                                    <span className="block italic text-[#a77c5b]">
                                        Beautiful & Thoughtful.
                                    </span>
                                </h2>

                                <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#786f67]">
                                    <p>
                                        Hi, I'm Vimal! I'm someone who loves
                                        discovering beautiful ideas, exploring
                                        creative inspiration and finding simple
                                        ways to make everyday spaces and moments
                                        feel more special.
                                    </p>

                                    <p>
                                        That's what inspired me to create{" "}
                                        <strong className="font-semibold text-[#40352c]">
                                            Styled by Vimal
                                        </strong>
                                        — a little corner of the internet where
                                        creativity meets everyday living.
                                    </p>

                                    <p>
                                        From cozy home decor and clever
                                        organization ideas to thoughtful gifts,
                                        seasonal decorations and beautiful
                                        everyday finds, I love bringing together
                                        inspiration that is both lovely and
                                        practical.
                                    </p>

                                    <p>
                                        My goal is to make finding inspiration
                                        easier, more enjoyable and accessible,
                                        so you can create spaces you love and
                                        celebrate life's little moments in
                                        your own way.
                                    </p>
                                </div>

                                <div className="mt-9 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#b18a6a]" />
                                    <span className="font-serif text-2xl italic text-[#a77c5b]">
                                        With love, Vimal
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* BRAND PHILOSOPHY */}

                <section className="bg-[#eee7de] px-5 py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">

                        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a27b5b]">
                            What We Believe
                        </span>

                        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            It's The Little Things
                            <span className="block italic text-[#a77c5b]">
                                That Make Life Beautiful.
                            </span>
                        </h2>

                        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#766b61] sm:text-base">
                            A thoughtfully decorated corner, a beautifully
                            wrapped gift, an organized space or a seasonal
                            detail that brings a smile. We believe inspiration
                            doesn't have to be complicated or expensive.
                            Sometimes, the smallest details make the biggest
                            difference.
                        </p>

                        <div className="mx-auto mt-10 h-px w-20 bg-[#b18a6a]" />

                        <p className="mt-5 font-serif text-lg italic text-[#a27b5b]">
                            Make everyday living a little more beautiful.
                        </p>

                    </div>
                </section>


                {/* WHAT YOU WILL FIND */}

                <section className="px-5 py-20 lg:px-8 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 text-center">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a27b5b]">
                                Explore Our World
                            </span>

                            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                                A Little Inspiration
                                <span className="italic text-[#a77c5b]">
                                    {" "}For Everything.
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#81776e]">
                                From refreshing your home to finding the perfect
                                gift, discover ideas for all the things that
                                make everyday life special.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {categories.map((item) => (
                                <div
                                    key={item.number}
                                    className="group rounded-2xl border border-[#ebe3da] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a88e] hover:shadow-lg sm:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eee7] text-xl text-[#a77c5b] transition-colors group-hover:bg-[#a77c5b] group-hover:text-white">
                                            {item.icon}
                                        </span>

                                        <span className="font-serif text-sm italic text-[#b6a495]">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-7 font-serif text-2xl text-[#40352c]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#81776e]">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 h-px w-10 bg-[#c7a487] transition-all duration-300 group-hover:w-16" />
                                </div>
                            ))}

                        </div>
                    </div>
                </section>


                {/* PINTEREST SECTION */}

                <section className="px-5 pb-20 lg:px-8 lg:pb-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[30px] bg-[#42362e] px-7 py-16 text-center sm:px-12 lg:py-20">

                            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
                            <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-white/10" />

                            <FaPinterestP className="relative mx-auto text-3xl text-[#d3ad8e]" />

                            <span className="relative mt-6 block text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
                                Let's Get Inspired
                            </span>

                            <h2 className="relative mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
                                More Ideas, More
                                <span className="block italic text-[#d3ad8e]">
                                    Inspiration.
                                </span>
                            </h2>

                            <p className="relative mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60">
                                Join me on Pinterest for beautiful ideas,
                                creative inspiration, lovely finds and
                                things worth saving for later.
                            </p>

                            <Link
                                href="https://in.pinterest.com/Styled_By_Vimal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-[#f8f3ed] px-8 py-4 text-sm font-medium text-[#40352c] transition-all duration-300 hover:bg-white"
                            >
                                Explore Pinterest

                                <FaArrowRight />
                            </Link>

                        </div>
                    </div>
                </section>


                {/* FINAL NOTE */}

                <section className="border-t border-[#e9e0d7] px-5 py-16 text-center lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-2xl">

                        <FaLeaf className="mx-auto text-2xl text-[#b18a6a]" />

                        <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                            Thank You For Being Here.
                        </h2>

                        <p className="mt-5 text-sm leading-8 text-[#81776e]">
                            Whether you're here for a little home inspiration,
                            thoughtful gift ideas, clever organization tips
                            or simply something beautiful to discover,
                            I'm so happy you found your way here.
                        </p>

                        <p className="mt-7 font-serif text-xl italic text-[#a77c5b]">
                            Let's make life a little more lovely.
                        </p>

                        <Link
                            href="/blog"
                            className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-[#a77c5b] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#896346]"
                        >
                            Explore The Blog
                            <FaArrowRight />
                        </Link>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default About;
