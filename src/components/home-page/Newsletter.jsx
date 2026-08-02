import Image from "next/image";
import Link from "next/link";

const pins = [
    "/images/home-page/shelf.webp",
    "/images/home-page/bedroom.webp",
    "/images/home-page/living-room.webp",
    "/images/home-page/bathroom.webp",
    "/images/home-page/kitchen.webp",
];

export default function PinterestCTA() {
    return (
        <section className="bg-[#faf7f2] py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="uppercase tracking-[4px] text-sm font-semibold text-amber-600">
                        Daily Inspiration
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-stone-900">
                        Follow Us on Pinterest
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                        Save beautiful room ideas, decorating inspiration,
                        styling tips and trending home decor you'll love.
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

                    <div className="absolute left-24 bottom-0 rotate-[8deg] transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
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

                        <div className="relative h-96 w-72 overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.18)]">

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

                    <div className="absolute right-0 bottom-0 rotate-[-8deg] transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">

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
                        href="https://in.pinterest.com/DecorHomeDecorHub/"
                        target="_blank"
                        className="inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Follow on Pinterest
                        <span className="text-2xl">📌</span>
                    </Link>

                    <p className="mt-5 text-stone-500">
                        Discover fresh ideas every week and save your favorites.
                    </p>

                </div>

            </div>
        </section>
    );
}