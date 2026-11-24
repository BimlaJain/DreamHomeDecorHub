
import Image from "next/image";
import Link from "next/link";

const pins = [
    "/images/blog/article/75-best-stocking-stuffer-ideas-for-everyone/best-stocking-stuffer-hero-image.webp",
    "/images/blog/article/15-closet-organization-ideas/closet-organization-hero-image.webp",
    "/images/blog/article/25-cozy-living-room-ideas/living-room-hero.webp",
    "/images/blog/article/17-bathroom-decor-ideas/bathroom-hero-image.webp",
    "/images/blog/article/18-Kitchen-decor-ideas/kitchen-hero-image.webp",
];

export default function PinterestCTA() {
    return (
        <section className="overflow-hidden bg-[#FAF7F2] py-28">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="text-sm font-semibold uppercase tracking-[4px] text-[#9B7669]">
                        Daily Inspiration
                    </span>

                    <h2 className="mt-4 font-serif text-5xl font-light text-[#292725]">
                        Find Us on Pinterest
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#776456]">
                        Discover thoughtful gift ideas, beautiful finds,
                        creative inspiration, organization tips and
                        little things worth saving for later.
                    </p>

                </div>

                {/* Pinterest Board */}

                <div className="relative mx-auto mt-24 flex h-[500px] max-w-6xl items-center justify-center">

                    {/* Left Top */}

                    <div className="absolute left-0 top-0 rotate-[-10deg] transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
                        <div className="relative h-72 w-56 overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src={pins[0]}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Left Bottom */}

                    <div className="absolute bottom-0 left-24 rotate-[8deg] transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
                        <div className="relative h-64 w-52 overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src={pins[1]}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Center */}

                    <div className="relative z-10">

                        <div className="relative h-96 w-72 overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(41,39,37,0.15)]">

                            <Image
                                src={pins[2]}
                                alt=""
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                    {/* Right Top */}

                    <div className="absolute right-16 top-0 rotate-[8deg] transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">

                        <div className="relative h-72 w-56 overflow-hidden rounded-3xl shadow-2xl">

                            <Image
                                src={pins[3]}
                                alt=""
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                    {/* Right Bottom */}

                    <div className="absolute bottom-0 right-0 rotate-[-8deg] transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">

                        <div className="relative h-64 w-52 overflow-hidden rounded-3xl shadow-2xl">

                            <Image
                                src={pins[4]}
                                alt=""
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-16 text-center">

                    <Link
                        href="https://in.pinterest.com/Styled_By_Vimal/"
                        target="_blank"
                        className="inline-flex items-center gap-3 rounded-full bg-[#292725] px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#776456] hover:shadow-xl"
                    >
                        Follow on Pinterest
                        <span className="text-2xl">📌</span>
                    </Link>

                    <p className="mt-5 text-[#8C796B]">
                        Discover fresh ideas every week and save your favorites.
                    </p>

                </div>

            </div>
        </section>
    );
}
