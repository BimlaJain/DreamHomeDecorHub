import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/HomePage";    

export default function BrowseByRoom() {
    return (
        <section className="bg-[#faf7f2] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
                        Browse
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
                        Browse by Room
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
                        Find decorating inspiration for every room in your home.
                        Explore beautiful interiors, organization ideas, and timeless
                        design styles.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {rooms.map((room) => (

                        <Link
                            key={room.title}
                            href={room.href}
                            className="group relative h-[420px] overflow-hidden rounded-[30px]"
                        >

                            {/* Image */}

                            <Image
                                src={room.image}
                                alt={room.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Badge */}

                            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur">
                                {room.ideas}
                            </div>

                            {/* Content */}

                            <div className="absolute bottom-0 left-0 p-8 text-white">

                                <h3 className="text-3xl font-bold">
                                    {room.title}
                                </h3>

                                <p className="mt-3 max-w-xs text-stone-200">
                                    Discover stylish decorating ideas and inspiration.
                                </p>

                                <span className="mt-6 inline-flex items-center gap-2 font-semibold">

                                    Explore Room

                                    <span className="transition duration-300 group-hover:translate-x-2">
                                        →
                                    </span>

                                </span>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
}