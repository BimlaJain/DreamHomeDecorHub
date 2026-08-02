import Link from "next/link";
import { ArrowRight, Star, BadgeCheck, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-[#F8F6F2]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        {/* Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8B892]/40 bg-white px-4 py-2 shadow-sm">
                            <BadgeCheck className="h-4 w-4 text-[#365947]" />

                            <span className="text-sm font-medium text-[#365947]">
                                Updated Weekly • Honest Product Reviews
                            </span>
                        </div>

                        {/* Heading */}

                        <h1 className="font-serif text-4xl font-bold leading-tight text-[#1E1E1E] md:text-5xl lg:text-6xl">
                            10 Best Floating
                            <br />
                            Wall Shelves for
                            <span className="text-[#365947]">
                                {" "}
                                Modern Homes
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="mt-6 max-w-xl text-lg leading-8 text-[#666666]">
                            Discover beautifully designed floating wall shelves that combine
                            modern style, durability, and value. Every recommendation is
                            carefully selected to help you decorate your home with confidence.
                        </p>

                        {/* CTA */}

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="#top-picks"
                                className="flex items-center gap-2 rounded-full bg-[#365947] px-7 py-4 font-semibold text-white transition duration-300 hover:bg-[#294437]"
                            >
                                Explore Top Picks
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="#buying-guide"
                                className="rounded-full border border-[#365947] px-7 py-4 font-semibold text-[#365947] transition hover:bg-[#365947] hover:text-white"
                            >
                                Buying Guide
                            </Link>

                        </div>

                        {/* Trust */}

                        <div className="mt-10 flex flex-wrap gap-8">

                            <div className="flex items-center gap-2">
                                <Star
                                    className="fill-yellow-400 text-yellow-400"
                                    size={20}
                                />
                                <span className="text-sm text-[#666666]">
                                    Editor's Choice
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck
                                    className="text-[#365947]"
                                    size={20}
                                />
                                <span className="text-sm text-[#666666]">
                                    Honest Reviews
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <BadgeCheck
                                    className="text-[#365947]"
                                    size={20}
                                />
                                <span className="text-sm text-[#666666]">
                                    Updated Monthly
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        {/* Background */}

                        <div className="absolute -left-6 top-8 h-72 w-72 rounded-full bg-[#D8B892]/20 blur-3xl"></div>

                        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#365947]/10 blur-3xl"></div>

                        {/* Image */}

                        <div className="relative overflow-hidden rounded-4xl bg-white p-4 shadow-2xl">
                            <a
                                href={"https://link.amazon/B03cLvsF3"}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                            >
                            <img
                                src="../images/floating-shelves/hero/hero.webp"
                                alt="Modern Floating Wall Shelf"
                                className=" w-full rounded-3xl object-cover"
                                />
                                </a>

                            {/* Floating Card */}

                            <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">

                                <p className="text-sm text-[#666666]">
                                    Best Overall
                                </p>

                                <h3 className="mt-1 text-lg font-bold text-[#1E1E1E]">
                                    Wooden Floating Shelf
                                </h3>

                                <div className="mt-2 flex items-center gap-2">

                                    <Star
                                        className="fill-yellow-400 text-yellow-400"
                                        size={18}
                                    />

                                    <span className="font-semibold">
                                        4.8
                                    </span>

                                    <span className="text-[#666666]">
                                        (2,000+ Reviews)
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}