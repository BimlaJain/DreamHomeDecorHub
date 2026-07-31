import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RoomCard({
    title,
    image,
    href,
    articles,
}) {
    return (
        <Link
            href={href}
            className="group relative h-[420px] overflow-hidden rounded-[30px]"
        >
            {/* Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                <p className="text-sm uppercase tracking-[0.25em] opacity-80">
                    {articles}
                </p>

                <h3 className="mt-3 text-3xl font-light">
                    {title}
                </h3>

                <div className="mt-6 inline-flex items-center gap-2 text-sm">
                    Explore
                    <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                    />
                </div>

            </div>
        </Link>
    );
}