
import Image from "next/image";
import Link from "next/link";

export default function OurPromise() {
    return (
        <section className="bg-[#FAF7F2] py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left Image */}

                <div className="relative h-[650px] overflow-hidden rounded-[40px]">

                    <Image
                        src="/images/StyledByVimal.webp"
                        alt="Thoughtfully curated lifestyle inspiration and beautiful everyday finds"
                        fill
                        className="object-cover"
                    />

                </div>

                {/* Right Content */}

                <div>

                    <span className="text-sm font-semibold uppercase tracking-[4px] text-[#9B7669]">
                        Styled By Vimal
                    </span>

                    <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[#292725]">
                        A Little Inspiration for a More Beautiful Everyday.
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-[#776456]">
                        We believe it's the little things that make everyday
                        life special. From thoughtful gift ideas and beautiful
                        finds to clever organization tips, seasonal inspiration,
                        and creative digital resources, we're here to help you
                        discover ideas worth saving, sharing, and bringing to life.
                    </p>

                    <div className="mt-10 space-y-6">

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E9E1] text-xl">
                                ✨
                            </div>

                            <div>

                                <h4 className="font-semibold text-[#292725]">
                                    Thoughtful Inspiration
                                </h4>

                                <p className="text-[#776456]">
                                    Fresh ideas for gifting, living, and everyday moments.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E9E1] text-xl">
                                🎁
                            </div>

                            <div>

                                <h4 className="font-semibold text-[#292725]">
                                    Curated Finds & Recommendations
                                </h4>

                                <p className="text-[#776456]">
                                    Lovely discoveries, useful products, and things worth sharing.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E9E1] text-xl">
                                🌷
                            </div>

                            <div>

                                <h4 className="font-semibold text-[#292725]">
                                    Ideas Made to Inspire
                                </h4>

                                <p className="text-[#776456]">
                                    Creative printables, organization tips, and seasonal inspiration.
                                </p>

                            </div>

                        </div>

                    </div>

                    <Link
                        href="/about"
                        className="mt-12 inline-flex rounded-full bg-[#292725] px-8 py-4 text-white transition hover:bg-[#776456]"
                    >
                        Discover Our Story →
                    </Link>

                </div>

            </div>
        </section>
    );
}
