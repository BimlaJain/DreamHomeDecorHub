import RoomCard from "./RoomCard";
import { rooms } from "@/data/Blog";

export default function BrowseByRoom() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-16 text-center">

                    <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                        Browse by Room
                    </p>

                    <h2 className="mt-4 text-5xl font-serif font-light text-stone-900">
                        Inspiration for Every Space
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                        Explore beautifully styled floating shelf ideas curated for
                        every room in your home.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {rooms.map((room) => (
                        <RoomCard
                            key={room.title}
                            {...room}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}